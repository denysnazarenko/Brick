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
    })
  };

  basicButtonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (basicInputName.value != '') {
      userData.userName = basicInputName.value;
    } else {
      emptyInput(basicInputName);
    }
    if (basicInputPhone.value != '') {
      userData.userPhone = basicInputPhone.value;
    } else {
      emptyInput(basicInputPhone);
    }

    if (basicInputName.value != '' && basicInputPhone.value != '') {
      basicForm.reset();
      console.log(userData);
    }

    focusInput(basicInputName);
    focusInput(basicInputPhone);
  });

});