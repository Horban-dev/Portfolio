
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

/* const submitFormButton = document.querySelector('.contacts__btn'),
      contact = document.querySelector('[type=checkbox]'),
      agreement = document.querySelector('#agreement');
      
submitFormButton.addEventListener('click', () => {
 if (!contact.checked){
     agreement.style.color = 'red'
 }
}); */

let arrowTop = document.getElementById('arrow_top');
arrowTop.onclick = function() {
    window.scrollTo(scrollX, 0);
};

  window.addEventListener('scroll', function() {
    arrowTop.hidden = (scrollY < document.documentElement.clientHeight);
});


function sizePlus() {
    let sizeI = document.getElementById("size").value;
    let img = document.getElementById("inputImg");
    img.width = 400 + 1*sizeI;
}



let vv = document.querySelectorAll(".about__skills-text");
vv.forEach(elem => {
    elem.addEventListener('mouseover', function on() {
        elem.setAttribute('style', 'font-style: italic;');
    });
});

let vc = document.querySelectorAll(".about__skills-text");
vc.forEach(elem => {
    elem.addEventListener('mouseout', function off() {
        elem.setAttribute('style', 'font-size: 80%;');
    });
});



