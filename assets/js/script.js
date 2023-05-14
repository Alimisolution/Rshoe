'use strict';

// get alll elements
const loader = document.querySelector('.loader');
const bar = document.querySelector('#bar');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const click = document.querySelector('.click');
const menuLink = document.querySelectorAll('.link');
const reviewSlide = document.querySelectorAll('.review-box');
// const aboutImg1 = document.querySelectorAll('.about-img1');
// const testword = document.querySelectorAll('.test-word');



// Page loader
setTimeout(() =>{
    loader.remove()
},2000)


// toggle menu
bar.addEventListener('click', () =>{
menu.classList.toggle('show');
})

// nemu Link Cliking
menuLink.forEach(menus =>{
    menus.addEventListener('click', () =>{
        menu.classList.toggle('show')

    })
})



// Sticky Navigation

window.addEventListener('scroll', () =>{
    if(window.scrollY > 500) header.classList.add('sticky')
    else header.classList.remove('sticky')
})



// slider
reviewSlide.forEach((el,i) => el.style.transform = `translateX(${100 * i}%)`)
let curSlide = 1;
const maxSlide = reviewSlide.length;

setInterval(() =>{
    if(curSlide === maxSlide - 1){
        curSlide = 0;
    }else{
        curSlide++;
    }
    reviewSlide.forEach((el,i) => el.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    
},2000)