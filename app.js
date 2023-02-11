var contactForm = document.querySelector('.cont');
var btnClass = document.querySelector('.button');
//var formShow = document.querySelector('.btn');



function showContact() {
    contactForm.style.visibility = 'visible';

}

btnClass.addEventListener('click', showContact);