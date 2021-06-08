/**
 * [Adds eventListeners to multiple elements of the same class.]
 * @param className [class name]
 * @param type [event type]
 * @param funcName [function]
 * @return {void}
 */
function addEventListenerByClass(className, type, funcName) {
    const list = document.querySelectorAll(className);
    let i = 0;
    for(i=0; i<list.length; i++) {
        list[i].addEventListener(type, funcName);
    }
}


/**
 * [Toogle function for accordeon]
 * @return {void}
 */
function toggle(event) {
    const id = event.currentTarget.id;
    const number = id.split("").pop();
    const accordeon = document.getElementById(event.currentTarget.id);
    const plus = document.getElementById((number === 'n' ? 'plus' : `plus${number}`));
    const text = document.getElementById((number === 'n' ? 'text' : `text${number}`));
    accordeon.classList.toggle('accordeon');
    plus.classList.toggle('hide');
    text.classList.toggle('hide');
}

addEventListenerByClass('.faqs_container .section .section_container', 'click', toggle); 


/**
 * [Toogle function for nav toggler button]
 * @return {void}
 */
function navToggle(event) {
    const cross = document.getElementById('cross');
    const hamburger = document.getElementById('hamburger');
    const container = document.getElementById('nav_link_container');
    hamburger.classList.toggle('hide');
    container.classList.toggle('segment');
    container.classList.toggle('dropdown');
    cross.classList.toggle('hide');
    event.preventDefault();
}

addEventListenerByClass('.nav .bar .link_container .hamburger', 'click', navToggle);


/**
 * [Handles dots.]
 * @return {void}
 */
function dotHandler(event) {
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const dot3 = document.getElementById('dot3');
    const whiteDot = '&#9898';
    const darkDot = '&#9899';
    
    if(event.currentTarget.id === dot1.id) {
        dot1.innerHTML =  darkDot;
        dot2.innerHTML =  whiteDot;
        dot3.innerHTML =  whiteDot;
    } else if (event.currentTarget.id === dot2.id) {
        dot1.innerHTML =  whiteDot;
        dot3.innerHTML =  whiteDot;
        dot2.innerHTML =  darkDot;
    } else {
        dot3.innerHTML =  darkDot;
        dot1.innerHTML =  whiteDot;
        dot2.innerHTML =  whiteDot;
    }
}


/**
 * [Handles sliding]
 * @return {void}
 */
function sliderHandler(event) {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const slide3 = document.getElementById('slide3');
    
    if(event.currentTarget.id.split('').reverse()[0] === slide1.id.split('').reverse()[0]) {
        slide1.classList.remove('hide');
        slide2.classList.add('hide');
        slide3.classList.add('hide');
    } else if (event.currentTarget.id.split('').reverse()[0] === slide2.id.split('').reverse()[0]) {
        slide2.classList.remove('hide');
        slide1.classList.add('hide');
        slide3.classList.add('hide');
    } else {
        slide3.classList.remove('hide');
        slide1.classList.add('hide');
        slide2.classList.add('hide');
    }
}

addEventListenerByClass('.slider_container .frame .dot_container .dots .dot', 'click', dotHandler);
addEventListenerByClass('.slider_container .frame .dot_container .dots .dot', 'click', sliderHandler);


/**
 * [Toogle function for showMore button.]
 * @return {void}
 */
function showMoreToggle() {
    const showMore = document.getElementById('showMore');
    const gallery = document.getElementById('gallery');
    showMore.classList.toggle('hide');
    gallery.classList.remove('gallery');
}

addEventListenerByClass('.image_container .show_more', 'click', showMoreToggle);

/**
 * [Reload function to reload dom element.]
 * @return {void}
 */
function reload(){
    const container = document.getElementById("gallery");
    const content = container.innerHTML;
    container.innerHTML= content; 
}

addEventListenerByClass('.image_container .show_more', 'click', reload);