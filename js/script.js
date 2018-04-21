var modalWindow = document.querySelector('.modal-write');
var openModal = document.querySelector('.btn-adress');
var modalWindowClose = document.querySelector('.modal-close');
var nameForm = document.querySelector('[name=name]');
var emailForm = document.querySelector('[name=email]');
var mailTextForm = document.querySelector('[name=mail-text]');
var staticMap = document.querySelector('.static-map');
var wrapperMap = document.querySelector('.map');
var slider0 = document.querySelector('.slider-item:nth-child(1)');
var slider1 = document.querySelector('.slider-item:nth-child(2)');
var slider2 = document.querySelector('.slider-item:nth-child(3)');
var sliderControls0 = document.querySelector('.slider-controls i:nth-child(1)');
var sliderControls1 = document.querySelector('.slider-controls i:nth-child(2)');
var sliderControls2 = document.querySelector('.slider-controls i:nth-child(3)');
var form = modalWindow.querySelector('form');
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');

} catch(err) {
    isStorageSupport = false;
}

if(sliderControls0 && sliderControls1 && sliderControls2) {
    sliderControls0.addEventListener('click', function(evt) {
    evt.preventDefault();
    slider1.classList.remove('slider-item-show');
    slider2.classList.remove('slider-item-show');
    slider0.classList.add('slider-item-show');
    sliderControls0.classList.add('active');
    sliderControls1.classList.remove('active');
    sliderControls2.classList.remove('active');
  });
  sliderControls1.addEventListener('click', function(evt) {
    evt.preventDefault();
    slider2.classList.remove('slider-item-show');
    slider0.classList.remove('slider-item-show');
    slider1.classList.add('slider-item-show');
    sliderControls0.classList.remove('active');
    sliderControls2.classList.remove('active');
    sliderControls1.classList.add('active');
  });
  sliderControls2.addEventListener('click', function(evt) {
    evt.preventDefault();
    slider0.classList.remove('slider-item-show');
    slider1.classList.remove('slider-item-show');
    slider2.classList.add('slider-item-show');
    sliderControls0.classList.remove('active');
    sliderControls1.classList.remove('active');
    sliderControls2.classList.add('active');
  });
}

openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalWindow.classList.add('modal-write-open');
  nameForm.focus();
  if(storageName) {
    nameForm.value = storageName;
    emailForm.focus();
  } else {
      nameForm.focus();
  }
});

modalWindowClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalWindow.classList.remove('modal-write-open');
  modalWindow.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWindow.classList.contains('modal-write-open')) {
    modalWindow.classList.remove('modal-write-open');
    modalWindow.classList.remove('modal-error');
    }
  }
});

if(staticMap) {
  staticMap.classList.add('hide-map');
  wrapperMap.innerHTML = '<iframe src="https://yandex.by/map-widget/v1/-/CBqqYEBmWB" width="1440" height="417" frameborder="0"></iframe>';
};

form.addEventListener('submit', function(evt) {
  if(!nameForm.value || !emailForm.value || !mailTextForm.value){
    evt.preventDefault();
    modalWindow.classList.add('modal-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('name', nameForm.value);
      localStorage.setItem('email', emailForm.value);
    }
  }
});
