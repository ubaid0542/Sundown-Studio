// for smooth scrolling using locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")

    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page3Animation();

// swiper js for swipe
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
}
swiperAnimation();
//custom cursor
function custom_cursor(){
    var cursor = document.querySelector("#custom_cursor");
    var main = document.querySelector("#main");
    main.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:0.2,
            ease:"power4"
        })
    })
    var navv = document.querySelector("#nav-2")
    navv.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:0.5,
            backgroundColor:"white"
        })
    })
    navv.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1,
            backgroundColor:"#FE320A"
        })
    })
}
custom_cursor();

//menu for responsive 
function responsive_menu(){
    var menu = document.querySelector("nav h3")
    var full= document.querySelector("#full_scr")
    var navimage = document.querySelector("nav img")
    var flag =0
    menu.addEventListener("click",function(){
        if(flag == 0){
            full.style.top =0
            navimage.style.opacity =0
            flag =1
        }
        else{
            full.style.top =-"100%"
            navimage.style.opacity = 1
            flag = 0
        }
    
    })
}
responsive_menu();

//loader
function loader(){
    var loader = document.querySelector("#loader")
    setTimeout(function(){
        loader.style.top = "-100%"
    },6000)
}
loader()