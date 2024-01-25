"use strict";

window.addEventListener('DOMContentLoaded', () => {
  // Header
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }

  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
      header.style.background = 'rgb(135, 140, 146)';
    } else {
      header.style.background = 'transparent';
    }
  });

  // Application Form
  const basicForm = document.querySelector('.form-main__form'),           
        basicInputName = document.querySelector('.form-main__name'),
        basicInputPhone = document.querySelector('.form-main__tel'),
        basicButtonSubmit = document.querySelector('.form-main__button');

  const userData = {
      userName: '', 
      userPhone: ''
  };

  const emptyInput = function (input) {
    input.style.cssText = 'border: 1px solid rgb(228, 56, 56); box-shadow: 0px 0px 10px rgb(228, 56, 56)';
  };
  const focusInput = function (input) {
    input.addEventListener('focus', () => {
      input.style.cssText = 'border: 1px solid rgba(255, 255, 255, 0.70); box-shadow: none';
      input.value = '';
    })
  };

  basicButtonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (basicInputName.value != '') {
      userData.userName = basicInputName.value;
    } else {
      emptyInput(basicInputName);
    }
    if (basicInputPhone.value != '' && basicInputPhone.value.match(/^[0-9]+$/) != null) {
      userData.userPhone = basicInputPhone.value;
    } else {
      emptyInput(basicInputPhone);
    }

    if (basicInputName.value != '' && basicInputPhone.value != '' && basicInputPhone.value.match(/^[0-9]+$/) != null) {
      basicForm.reset();
      alert(`Ласкаво просимо ${userData.userName}`);
      console.log(userData);
    }

    focusInput(basicInputName);
    focusInput(basicInputPhone);
  });

  // Tabs
  const tabs = document.querySelectorAll('.header-tab-products__item'),
    tabsContent = document.querySelectorAll('.content-tab-products__items'),
    tabsParent = document.querySelector('.header-tab-products__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('header-tab-products__item_active');
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('header-tab-products__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('header-tab-products__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Слайдер
  const swiper = new Swiper('.work__slider', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Кількість слайдів
    slidesPerView: 1,

    // Відступ між слайдами
    spaceBetween: 18,

    // Активний слайд
    centeredSlides: true,

    // Автопрокрутка
    autoplay: {
      delay: 3000
    },

    speed: 1600,

    // Адаптив
    // breakpoints: {
    //   320: {
    //     slidesPerView: 'auto',
    //   },
    //   1200: {
    //     slidesPerView: 2
    //   }
    // }
  });

  // Модальне вікно
  const modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modalBuyBtn = modal.querySelector('.modal__button');

  function openModal() {
    modal.classList.add('show__modal');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show__modal');
    document.body.style.overflow = '';
  };

  tabsContent.forEach(element => {
    element.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.classList.contains('content-tab-products__button')) {
        e.preventDefault();
        openModal();
      }
    })
  });

  modalCloseBtn.addEventListener('click', closeModal);

  modalBuyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show__modal')) {
      closeModal();
    }
  });

});