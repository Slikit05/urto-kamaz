const { src, dest, watch, series, parallel } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const { rimraf } = require("rimraf");
const svgSprite = require("gulp-svg-sprite");

// Пути
const paths = {
  pug: {
    src: "src/pug/pages/**/*.pug",
    dest: "dist/",
  },
  scss: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
  assets: {
    src: "src/img/**/*",
    dest: "dist/img/",
  },
  js: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
  },
  icons: {
    src: "src/icons/*.svg",
    dest: "dist/",
  },
  fonts: {
    src: 'src/fonts/**/*.{woff,woff2,ttf,otf,eot,svg}',
    dest: 'dist/fonts/'
  },
  vendor: {
    src: 'src/vendor/**/*',
    dest: 'dist/vendor/'
  },
};

// Очистка
function clean() {
  return rimraf("dist");
}

// Pug
function compilePug() {
  return src(paths.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(dest(paths.pug.dest))
    .pipe(browserSync.stream({ once: true }));
}

// SCSS
function compileScss() {
  return src(paths.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// Assets (img)
function copyAssets() {
  return src(paths.assets.src, { encoding: false })
    .pipe(dest(paths.assets.dest));
}

// JavaScript (без минификации!)
function scripts() {
  return src(paths.js.src).pipe(dest(paths.js.dest));
}

// svg спрайт
function sprite() {
  return src(paths.icons.src)
    .pipe(svgSprite({
        mode: {
          symbol: {
            dest: '.',
            sprite: "sprite.svg", // имя итогового файла
            example: false, // не генерировать HTML-пример
          },
        },
        shape: {
          transform: ["svgo"], // оптимизация через SVGO
          spacing: {
            padding: 0, // без отступов между иконками
          },
        },
      })
    )
    .pipe(dest(paths.icons.dest));
}

// fonts
function fonts() {
  return src(paths.fonts.src, { encoding: false }) 
    .pipe(dest(paths.fonts.dest));
}

// vendor
function copyVendor() {
  return src(paths.vendor.src, { encoding: false }) 
    .pipe(dest(paths.vendor.dest));
}

// Dev-сервер
function serve() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });

  watch('src/pug/**/*.pug', compilePug);
  watch(paths.scss.src, compileScss);
  watch(paths.assets.src, copyAssets).on("change", browserSync.reload);
  watch(paths.js.src, scripts).on("change", browserSync.reload);
  watch(paths.icons.src, sprite).on('change', browserSync.reload);
  watch(paths.fonts.src, fonts).on('change', browserSync.reload);
  watch(paths.vendor.src, copyVendor).on('change', browserSync.reload);
}

// Сборка
const build = series(
  clean,
  parallel(compilePug, compileScss, copyAssets, scripts, sprite, fonts, copyVendor)
);

// Экспорт
exports.clean = clean;
exports.pug = compilePug;
exports.scss = compileScss;
exports.assets = copyAssets;
exports.scripts = scripts;
exports.sprite = sprite;
exports.build = build;
exports.serve = series(build, serve);
exports.default = exports.serve;

