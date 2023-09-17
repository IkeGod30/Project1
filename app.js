var contactForm = document.querySelector('.cont');
var btnClass = document.querySelector('.button');


function showContact() {
    contactForm.style.visibility = 'visible';
    

}

btnClass.addEventListener('click', showContact);