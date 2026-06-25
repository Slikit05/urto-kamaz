document.addEventListener("DOMContentLoaded", () => {
  // new-modal
  // window.addEventListener("click", function (event) {
  //   const eventTar = event.target;

  //   if (eventTar.dataset.clickModal) {
  //     event.preventDefault();

  //     const btnName = eventTar.dataset.clickModal;

  //     document.querySelector("#" + btnName).classList.add("new-modal--open");
  //     document.querySelector("html").classList.add("hidden");
  //   }

  //   if (eventTar.classList.contains("new-modal__overlay")) {
  //     eventTar.closest(".new-modal").classList.remove("new-modal--open");
  //     document.querySelector("html").classList.remove("hidden");
  //   } else if (eventTar.classList.contains("js-closeModal")) {
  //     eventTar.closest(".new-modal").classList.remove("new-modal--open");
  //     document.querySelector("html").classList.remove("hidden");
  //   }
  // });

  // file
  // if (document.querySelector(".field-download")) {
  //   initResumeUpload(document.getElementById("resumeUpload"));

  //   function initResumeUpload(field) {
  //     const dropArea = field;
  //     const fileInput = field
  //       .closest(".field-download")
  //       .querySelector(".file-input");
  //     const uploadText = field.querySelector(".upload-text");
  //     const icon = field.querySelector(".icon-field");
  //     const fileName = field.querySelector(".file-name");
  //     const removeBtn = field
  //       .closest(".field-download")
  //       .querySelector(".remove-file");
  //     const hint = field.closest(".field-download").querySelector(".hint");

  //     // Функция сброса состояния
  //     function resetField() {
  //       uploadText.textContent = "Прикрепить резюме*";
  //       uploadText.style.display = "inline";
  //       fileName.textContent = "";
  //       fileName.style.display = "none";
  //       icon.textContent = "+";
  //       removeBtn.classList.remove("show");
  //       hint.textContent = "Необходимо прикрепить резюме в формате PDF";
  //       fileInput.value = "";
  //     }

  //     // Функция обработки файла
  //     function handleFile(file) {
  //       if (!file || file.type !== "application/pdf") {
  //         alert("Пожалуйста, загрузите файл в формате PDF");
  //         resetField();
  //         return;
  //       }

  //       // Обновляем интерфейс
  //       uploadText.style.display = "none";
  //       fileName.textContent = file.name;
  //       fileName.style.display = "inline";
  //       icon.style.display = "none";
  //       removeBtn.classList.add("show");
  //       hint.textContent = "Резюме успешно загружено";
  //     }

  //     dropArea.addEventListener("click", () => {
  //       fileInput.click();
  //     });

  //     fileInput.addEventListener("change", () => {
  //       if (fileInput.files.length > 0) {
  //         handleFile(fileInput.files[0]);
  //       }
  //     });

  //     removeBtn.addEventListener("click", (event) => {
  //       const field = event.target.closest(".field-download");
  //       const fileInput = field.querySelector(".file-input");

  //       // Сбрасываем состояние
  //       const uploadText = field.querySelector(".upload-text");
  //       const fileName = field.querySelector(".file-name");
  //       const icon = field.querySelector(".icon-field");
  //       const hint = field.querySelector(".hint");

  //       uploadText.style.display = "inline";
  //       fileName.style.display = "none";
  //       icon.style.display = null;
  //       event.target.classList.remove("show");
  //       hint.textContent = "Необходимо прикрепить резюме в формате PDF";
  //       fileInput.value = "";
  //     });
  //   }
  // }

  if (window.screen.width <= 768) {
    // accordion
    const accordions = document.querySelectorAll(".footer-nav");
    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(".footer-nav__up");
      const dropDown = accordion.querySelector(".footer-nav__list");
      if (accordionHeader) {
        if (dropDown) {
          accordionHeader.addEventListener("click", (event) => {
            event.preventDefault();
            // const eventTar = event.target;
            accordion.classList[
              accordion.classList.contains("is-opened") ? "remove" : "add"
            ]("is-opened");
            if (accordion.classList.contains("is-opened")) {
              dropDown.style.maxHeight = `${dropDown.scrollHeight}px`;
            } else {
              dropDown.style.maxHeight = null;
            }
          });
        }
      }
    });
  }

  if (window.screen.width <= 1240) {
    // accordion
    const accordions = document.querySelectorAll(
      ".mobile-menu__wrap_accordion"
    );
    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(".mobile-menu__up");
      const dropDown = accordion.querySelector(".mobile-menu__dropdown");
      if (accordionHeader) {
        if (dropDown) {
          accordionHeader.addEventListener("click", (event) => {
            event.preventDefault();
            // const eventTar = event.target;
            accordion.classList[
              accordion.classList.contains("is-opened") ? "remove" : "add"
            ]("is-opened");
            if (accordion.classList.contains("is-opened")) {
              dropDown.style.maxHeight = `${dropDown.scrollHeight}px`;
            } else {
              dropDown.style.maxHeight = null;
              if (dropDown.querySelector(".vehicle-catalog")) {
                dropDown
                  .querySelectorAll(".vehicle-catalog__block")
                  .forEach((elem) => {
                    elem.classList.remove("is-opened");
                    elem.querySelector(
                      ".vehicle-catalog__list"
                    ).style.maxHeight = null;
                  });
              }
            }
          });
        }
      }
    });
  }

  if (document.querySelector(".auto-page-accordions")) {
    // accordion
    const accordions = document.querySelectorAll(
      ".auto-page-accordions__block"
    );
    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(
        ".auto-page-accordions__up"
      );
      const dropDown = accordion.querySelector(
        ".auto-page-accordions__dropdown"
      );
      if (accordionHeader) {
        if (dropDown) {
          accordionHeader.addEventListener("click", (event) => {
            event.preventDefault();
            // const eventTar = event.target;
            accordion.classList[
              accordion.classList.contains("is-open") ? "remove" : "add"
            ]("is-open");
            if (accordion.classList.contains("is-open")) {
              dropDown.style.maxHeight = `${dropDown.scrollHeight}px`;
            } else {
              dropDown.style.maxHeight = null;
            }
          });
        }
      }
    });
  }

  if (window.screen.width <= 1240) {
    // accordion
    const accordions = document.querySelectorAll(".vehicle-catalog__block");
    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(
        ".vehicle-catalog__up-block"
      );
      const dropDown = accordion.querySelector(".vehicle-catalog__list");
      if (accordionHeader) {
        accordionHeader.addEventListener("click", (event) => {
          event.preventDefault();
          // const eventTar = event.target;
          accordion.classList[
            accordion.classList.contains("is-opened") ? "remove" : "add"
          ]("is-opened");
          if (accordion.classList.contains("is-opened")) {
            dropDown.style.maxHeight = `${dropDown.scrollHeight}px`;
            if (accordion.closest(".mobile-menu__wrap")) {
              accordion.closest(".mobile-menu__dropdown").style.maxHeight =
                "4000px";
            }
          } else {
            dropDown.style.maxHeight = null;
          }
        });
      }
    });
  }

  if (window.screen.width <= 1240) {
    // accordion
    const accordions = document.querySelectorAll(".filter");
    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(".filter__up");
      const dropDown = accordion.querySelector(".filter__dropdown");
      if (accordionHeader) {
        accordionHeader.addEventListener("click", (event) => {
          event.preventDefault();
          // const eventTar = event.target;
          accordion.classList[
            accordion.classList.contains("is-opened") ? "remove" : "add"
          ]("is-opened");
          if (accordion.classList.contains("is-opened")) {
            dropDown.style.maxHeight = `${dropDown.scrollHeight}px`;
            setTimeout(() => {
              dropDown.style.overflow = "visible";
            }, 300);
          } else {
            dropDown.style.overflow = null;
            dropDown.style.maxHeight = null;
          }
        });
      }
    });
  }

  if (document.querySelector(".js-fixe-header")) {
    const header = document.querySelector(".js-fixe-header");
    const headerHeight = document.querySelector(".header").offsetHeight;

    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      const currentScroll = window.pageYOffset;

      // Логика добавления/удаления класса fixed
      if (currentScroll > 0) {
        header.classList.add("is-fixed");
        header.closest(".header").style.height = `${headerHeight}px`;
      } else {
        header.classList.remove("is-fixed");
        setTimeout(() => {
          header.closest(".header").style.height = null;
        }, 300);
      }
    }
  }

  if (document.querySelector(".burger")) {
    const burger = document.querySelector(".burger");
    const pageHTML = document.querySelector("html");

    burger.addEventListener("click", (event) => {
      if (pageHTML.classList.contains("is-open-mobile-menu")) {
        pageHTML.classList.remove("is-open-mobile-menu");

        document
          .querySelectorAll(".is-opened .mobile-menu__up")
          .forEach((elem) => {
            elem.click();
          });
      } else {
        pageHTML.classList.add("is-open-mobile-menu");
      }
    });
  }

  if (document.querySelector(".auto-custom-select")) {
    document.querySelectorAll(".auto-custom-select").forEach((nativeSelect) => {
      // Пропускаем уже обработанные селекты
      if (nativeSelect.dataset.customized === "true") return;

      // Создаем обертку
      const wrapper = document.createElement("div");
      wrapper.className = "custom-select-wrapper";
      nativeSelect.parentNode.insertBefore(wrapper, nativeSelect);
      wrapper.appendChild(nativeSelect);

      // Создаем кастомный интерфейс
      const customSelect = document.createElement("div");
      customSelect.className = "custom-select";
      customSelect.innerHTML = `
      <div class="selected-option" tabindex="0">${
        nativeSelect.options[0].text
      }<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.707153 0.707092L4.70715 4.70709L8.70715 0.707092" stroke="currentColor" stroke-width="2"/></svg></div>
      <ul class="options">
        ${Array.from(nativeSelect.options)
          .map(
            (option) => `<li data-value="${option.value}">${option.text}</li>`
          )
          .join("")}
      </ul>`;
      wrapper.appendChild(customSelect);

      // Настраиваем связи
      const selectedOption = customSelect.querySelector(".selected-option");
      const optionsList = customSelect.querySelector(".options");

      // Синхронизация с нативным select
      const sync = () => {
        const selected = nativeSelect.options[nativeSelect.selectedIndex];
        selectedOption.textContent = selected.text;
      };

      // Обновление при изменении нативного select
      nativeSelect.addEventListener("change", sync);

      // Обработка выбора опции
      optionsList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          const value = e.target.dataset.value;
          nativeSelect.value = value;
          sync();
          customSelect.classList.remove("open");
          nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });

      // Открытие/закрытие списка
      selectedOption.addEventListener("click", () => {
        customSelect.classList.toggle("open");
      });

      // Закрытие при клике вне
      document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
          customSelect.classList.remove("open");
        }
      });

      // Поддержка клавиатуры
      selectedOption.addEventListener("keydown", (e) => {
        if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
          e.preventDefault();
          customSelect.classList.add("open");

          // Фокус на первый элемент при открытии
          if (["Enter", " "].includes(e.key)) {
            optionsList.querySelector("li").focus();
          }
        }
      });

      // Помечаем как обработанный
      nativeSelect.dataset.customized = "true";
    });
  }

  if (document.querySelector(".review-card")) {
    const MAX_CHARS = 307; // Максимальное количество символов

    document.querySelectorAll(".review-card").forEach((card) => {
      const textEl = card.querySelector(".review-text");
      const btn = card.querySelector(".toggle-btn");
      const fullText = textEl.textContent.trim();

      // Обрезаем текст, если он превышает лимит по символам
      let isTruncatedByChars = false;
      if (fullText.length > MAX_CHARS) {
        textEl.textContent = fullText.substring(0, MAX_CHARS);
        isTruncatedByChars = true;
      }

      // Проверяем, нужно ли показывать кнопку (по строкам или по символам)
      const lineHeight = parseFloat(getComputedStyle(textEl).lineHeight);
      const scrollHeight = textEl.scrollHeight;
      const clientHeight = textEl.clientHeight;

      if (scrollHeight > clientHeight || isTruncatedByChars) {
        btn.classList.add("visible");
      }

      btn.addEventListener("click", () => {
        if (textEl.classList.contains("expanded")) {
          // Сворачиваем
          if (isTruncatedByChars) {
            textEl.textContent = fullText.substring(0, MAX_CHARS);
          } else {
            textEl.textContent = fullText;
          }
          textEl.classList.remove("expanded");
        } else {
          // Раскрываем
          textEl.textContent = fullText;
          textEl.classList.add("expanded");
        }
        btn.classList.toggle("expanded");
      });
    });
  }

  if (document.querySelector("#map")) {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [45.135313, 39.026373],
        zoom: 15,
        controls: [], // Убираем все элементы управления
      });

      // Создаём метку с красной иконкой
      var myPlacemark = new ymaps.Placemark(
        [45.135313, 39.026373],
        {
          hintContent: "Юрто-Трак",
        },
        {
          preset: "islands#redIcon",
        }
      );

      myMap.geoObjects.add(myPlacemark);
    }
  }

  if (document.querySelector(".js-cookies")) {
    const cookieBanner = document.querySelector(".js-cookies");
    const cookiesApply = document.querySelector(".js-cookiesApply");

    if (!document.cookie.includes("cookie_accept=true")) {
      cookieBanner.classList.add("cookies_visible");
    }

    cookiesApply.addEventListener("click", () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      document.cookie = `cookie_accept=true; path=/; expires=${date.toUTCString()}`;
      cookieBanner.classList.remove("cookies_visible");
    });
  }

  if (document.querySelector(".js-showModal")) {
    window.addEventListener("click", function (event) {
      const eventTar = event.target;

      if (eventTar.dataset.clickModal) {
        event.preventDefault();

        const btnName = eventTar.dataset.clickModal;

        if (document.querySelector("#" + btnName)) {
          document.querySelector("#" + btnName).classList.add("modal--open");
        }

        document.querySelector("html").classList.add("hidden");
      }

      if (eventTar.classList.contains("modal__overlay")) {
        eventTar.closest(".modal").classList.remove("modal--open");
        document.querySelector("html").classList.remove("hidden");
      } else if (eventTar.classList.contains("close")) {
        eventTar.closest(".modal").classList.remove("modal--open");
        document.querySelector("html").classList.remove("hidden");
      }
    });
  }

  // swiper
  if (document.querySelector(".js-firstSlider")) {
    const arrFirstSlider = document.querySelectorAll(".js-firstSlider");

    arrFirstSlider.forEach((elem) => {
      const parrentSlider = elem.closest(".first-slider");
      const slidesWrapper = elem.querySelector(".swiper-wrapper");
      const slides = slidesWrapper.querySelectorAll(".swiper-slide");

      let currentSlides = Array.from(slides);

      if (currentSlides.length < 5) {
        // Создаём копии слайдов и добавляем в wrapper
        let clonedSlides = [];

        while (clonedSlides.length + currentSlides.length < 5) {
          currentSlides.forEach((slide) => {
            if (clonedSlides.length + currentSlides.length < 5) {
              clonedSlides.push(slide.cloneNode(true));
            }
          });
        }

        clonedSlides.forEach((slide) => {
          // Опционально: добавить класс, чтобы отличать клонированные
          slide.classList.add("swiper-slide--clone");
          slidesWrapper.appendChild(slide);
        });
      }

      const swiper = new Swiper(elem, {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        initialSlide: 1,
        centeredSlides: true,
        // pagination: {
        //   el: parrentSlider.querySelector(".js-firstSliderPagination"),
        //   type: "fraction",
        //   renderFraction: function (currentClass, totalClass) {
        //     return (
        //       '<div class="wrap-fraction"><span class="' +
        //       currentClass +
        //       '"></span>' +
        //       " из " +
        //       '<span class="' +
        //       totalClass +
        //       '"></span></div>'
        //     );
        //   },
        // },
        navigation: {
          nextEl: parrentSlider.querySelector(".js-firstSliderButtonNext"),
          prevEl: parrentSlider.querySelector(".js-firstSliderButtonPrev"),
        },
        on: {
          init: (swiper) => {
            console.log(swiper)
            // swiper.navigation.prevEl.click();
            swiper.update()
          },
        },
      });
    });
  }

  if (document.querySelector(".js-equipmentInStock")) {
    const swiper = new Swiper(".js-equipmentInStock", {
      slidesPerView: 3,
      spaceBetween: 32,
      pagination: {
        el: ".js-equipmentInStock-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<div class="wrap-fraction"><span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span></div>'
          );
        },
      },
      navigation: {
        nextEl: ".js-equipmentInStock-next",
        prevEl: ".js-equipmentInStock-prev",
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        // when window width is >= 640px
        1320: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  }

  if (document.querySelector(".js-newsAndStock")) {
    const swiper = new Swiper(".js-newsAndStock", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 3,
      spaceBetween: 32,
      initialSlide: 1,

      pagination: {
        el: ".js-newsAndStock-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<div class="wrap-fraction"><span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span></div>'
          );
        },
      },
      navigation: {
        nextEl: ".js-newsAndStock-next",
        prevEl: ".js-newsAndStock-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        // when window width is >= 640px
        1320: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      on: {
        init: (swiper) => {
          swiper.navigation.prevEl.click();
        },
      },
    });
  }

  if (document.querySelector(".js-reviewsSlider")) {
    const swiper = new Swiper(".js-reviewsSlider", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 3,
      spaceBetween: 32,
      initialSlide: 1,

      pagination: {
        el: ".js-reviewsSlider-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<div class="wrap-fraction"><span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span></div>'
          );
        },
      },
      navigation: {
        nextEl: ".js-reviewsSlider-next",
        prevEl: ".js-reviewsSlider-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        // when window width is >= 640px
        1320: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      on: {
        init: (swiper) => {
          swiper.navigation.prevEl.click();
        },
      },
    });
  }

  if (document.querySelector(".js-companyDepartments")) {
    const swiper = new Swiper(".js-companyDepartments", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 4,
      spaceBetween: 32,
      initialSlide: 1,

      pagination: {
        el: ".js-companyDepartments-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<div class="wrap-fraction"><span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span></div>'
          );
        },
      },
      navigation: {
        nextEl: ".js-companyDepartments-next",
        prevEl: ".js-companyDepartments-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        // when window width is >= 640px
        1320: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      },
      on: {
        init: (swiper) => {
          swiper.navigation.prevEl.click();
        },
      },
    });
  }

  if (document.querySelector(".js-firstSliderAuto")) {
    const firstSliderAuto = new Swiper(".js-firstSliderAutoTumbs", {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 8,
      freeMode: true,
      watchSlidesProgress: true,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3.45,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 6,
          spaceBetween: 23,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 8,
          spaceBetween: 23,
        },
        // when window width is >= 1240px
        1240: {
          slidesPerView: 8,
          spaceBetween: 32,
        },
      },
    });

    const firstSliderAutoTumbs = new Swiper(".js-firstSliderAuto", {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      initialSlide: 1,
      centeredSlides: true,
      // pagination: {
      //   el: document.querySelector(
      //     ".first-slider .js-firstSliderAutoPagination"
      //   ),
      //   type: "fraction",
      //   renderFraction: function (currentClass, totalClass) {
      //     return (
      //       '<div class="wrap-fraction"><span class="' +
      //       currentClass +
      //       '"></span>' +
      //       " из " +
      //       '<span class="' +
      //       totalClass +
      //       '"></span></div>'
      //     );
      //   },
      // },
      navigation: {
        nextEl: document.querySelector(
          ".first-slider .js-firstSliderAutoButtonNext"
        ),
        prevEl: document.querySelector(
          ".first-slider .js-firstSliderAutoButtonPrev"
        ),
      },
      thumbs: {
        swiper: firstSliderAuto,
      },
    });
  }
});
