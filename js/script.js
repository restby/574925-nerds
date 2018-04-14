var modalWindow = document.querySelector('.modal-write');
var openModal = document.querySelector('.btn-adress');
var modalWindowClose = document.querySelector('.modal-close');
var nameFocus = document.querySelector('[name=name]');
var staticMap = document.querySelector('.static-map');
var wrapperMap = document.querySelector('.map');
openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalWindow.classList.add('modal-write-open');
  nameFocus.focus();
});
modalWindowClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalWindow.classList.remove('modal-write-open');
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWindow.classList.contains('modal-write-open')) {
    modalWindow.classList.remove('modal-write-open');
    }
  }
});
if(staticMap) {
  staticMap.classList.add('hide-map');
  wrapperMap.innerHTML = '<iframe src="https://yandex.by/map-widget/v1/-/CBqqYEBmWB" width="1440" height="417" frameborder="0"></iframe>';
};
