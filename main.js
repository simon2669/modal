'use strict';

const modal = document.querySelector('.modal');

const openModal = () => {
  document
    .querySelector('.openmodal-btn')
    .addEventListener('click', () => {
      modal.classList.remove('modal--eltünés');
      modal.classList.add('displax-flex', 'modal--megjelenés');
      //! A focust nem tudom hogyan kell megoldani :((
    });

};
const closeModal = () => {
  const closeE = document.querySelectorAll('.modal__sötétítés, .modal__szöveg button')
  closeE.forEach(item => {
    item.addEventListener('click', closeModalHandler);
  })
};

const closeModalHandler = () => {
  modal.classList.add('modal--eltünés');
  modal.classList.remove('modal--megjelenés');
  setTimeout(() => {
    modal.classList.remove('displax-flex');
  }, 1002)
}
openModal();
closeModal();
