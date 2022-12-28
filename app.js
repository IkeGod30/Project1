var contactForm = document.querySelector('.cont');
var btnClass = document.querySelector('.button');
var formShow = document.querySelector('.btn');



function showContact() {

// var contactForm = document.querySelector('.cont');
// const btnClass = document.querySelector('.button');
// var formShow = document.querySelector('.btn');
contactForm.style.visibility = 'visible';

}

btnClass.addEventListener('click', showContact);