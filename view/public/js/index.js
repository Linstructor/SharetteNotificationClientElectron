// const electron = require('electron');
const $ = require('jquery');

function verifyAccount(button) {
  $(button).css('display', 'none');
  $('#tempo').css('display', 'block');
  setTimeout(() => {
    $(button).css('display', 'inline-block');
    $('#tempo').css('display', 'none');
    window.location = 'loading.html';
  }, 2000);
}
