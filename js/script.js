$(document).ready(function () {
  
    $(window).scroll(function(){
        if(scrollY > 40){
            $('.nav-container').addClass('sticky');
        }else{
            $('.nav-container').removeClass('sticky');
        }
    })


    $(window).scroll(function(){
        if(scrollY > 40){
            $('.collapse').addClass('sticky');
        }else{
            $('.collapse').removeClass('sticky');
        }
    })


    // Companies Slider JS
    $('.companies-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });


    // Profile Slider JS
    $('.profile-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });



});


// nav-toggler
const navTogglerBtn = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");
        
navTogglerBtn.addEventListener("click", ()=>{
    navTogglerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
})