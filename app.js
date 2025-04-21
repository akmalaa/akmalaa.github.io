// loading
const loadWord = document.querySelectorAll('.loading-word');
const loadWrap = document.querySelector('.loading-wrap');
const backload = document.querySelector('.bundar');

for (let i = 0; i < loadWord.length; i++) {
    setTimeout(function timer() {
      loadWord[i].classList.remove('hidden');
      loadWord[i-1].classList.add('hidden');
    }, i * 150);
  }
setTimeout(function timer() {
    loadWrap.style.transform = "translateY(-100%)"
    backload.style.transform = "translateY(-100%)"
}, loadWord.length * 200);
  

const timeCont = document.querySelector('.time');

setInterval(() => {
    const desiredTimeZone = "Asia/jakarta";
    const now = new Date();
    
    const options = {
      timeZone: desiredTimeZone,
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    };
    
    const currentTime = now.toLocaleString("en-US", options);
    
    timeCont.innerHTML = currentTime;
}, 1000);

const a = document.querySelectorAll("a");
const nav = document.querySelector(".cont-header");
const tod = document.querySelector(".tod");
let marker = tod.offsetTop/1.1;

const mek = document.querySelector(".mek");
let marker2 = mek.offsetTop /1.07;

const burger = document.querySelector('.burger');
const round = document.querySelector('.round');
const burgerDis = document.querySelector('.disappear');


document.addEventListener('DOMContentLoaded', function() {

    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1
    });
  
    scroll.on('scroll', function() {
      const scrollPositionY = scroll.scroll.instance.scroll.y;
      if (scrollPositionY > marker){
        for(let i = 0; i < 4 ; i++){
            a[i].style.color ='white'; 
        }
        nav.style.color ='white'; 
        round.classList.add('isscrolled');
        burgerDis.style.opacity = '0';
    } 
      else {
            for(let i = 0; i < 4 ; i++){
                a[i].style.color ='#2d2d2d'; 
            }
            nav.style.color ='#2d2d2d';
            round.classList.remove('isscrolled');
            burgerDis.style.opacity = '1';
        }
    });
    
    scroll.on('scroll', function() {
        let titleProject =  document.querySelector(".titleProject");
        let titleProjectAppear = titleProject.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (titleProjectAppear < screenPosition){
            titleProject.classList.add("titleProjectAppear");
        }
    });
    
    scroll.on('scroll', function() {
        let projectsContainer =  document.querySelector(".projectsContainer");
        let projectsContainerAppear = projectsContainer.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (projectsContainerAppear < screenPosition){
            projectsContainer.classList.add("projectsContainerAppear");
        }
    });
    
    scroll.on('scroll', function() {
        let textContact =  document.querySelector(".contact");
        let textContactAppear = textContact.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (textContactAppear < screenPosition){
            textContact.classList.add("textContactAppear");
        }
    });
    
    scroll.on('scroll', function() {
        let textContact =  document.querySelector(".contact");
        let textContactAppear = textContact.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (textContactAppear < screenPosition){
            textContact.classList.add("textContactAppear");
        }
    });
   
    var prevScrollpos = scroll.scroll.instance.scroll.y;
    scroll.on('scroll', function() {
        var currentScrollPos = scroll.scroll.instance.scroll.y;
        if (prevScrollpos >= currentScrollPos) {
        nav.style.top = "0";
        } 
        else {
        nav.style.top = "-135px";
        }
        prevScrollpos = currentScrollPos;
    });
    
    scroll.on('scroll', function() {
        var scrollPositionY = scroll.scroll.instance.scroll.y;
        if(scrollPositionY > marker2) {
            nav.style.top = "0";
            round.classList.remove('isscrolled');
            burgerDis.style.opacity = '1';
         }
    });

  });

nav.addEventListener("mouseover", function() {
    nav.style.top = "0";
});
nav.addEventListener("mouseleave", function() {
    if((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        nav.style.top = "0";
    } 
    else if(document.body.scrollTop = 0 || document.documentElement.scrollTop == 0){
        nav.style.top = "0";

    }
});

// cursor
const cursor = document.querySelector('.cursor');

const contact = document.querySelector('.contact').querySelector('a');
const navCursor = document.querySelector('.nav');
const cvCursor = document.querySelector('.cv');
const emailCursor = document.querySelector('.email');
const cv = document.querySelector('.link');
const logo = document.querySelector('.logo');
const navlist = document.querySelectorAll(".navlist");

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

a.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
        navCursor.style.display = "block";
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        navCursor.style.display = "none";
    })
});

navlist.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
        navCursor.style.display = "none";
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    })
});

contact.addEventListener('mouseover', () => {
    cursor.classList.add('grow-more');
    emailCursor.style.display = "block";
    navCursor.style.display = "none";
});
contact.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow-more');
    emailCursor.style.display = "none";
});

logo.addEventListener('mouseover', () => {
    cursor.classList.add('grow-more');
});
logo.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow-more');
});

cv.addEventListener('mouseover', () => {
    cursor.classList.add('grow-more');
    cvCursor.style.display = "block";
    navCursor.style.display = "none";
});
cv.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow-more');
    cvCursor.style.display = "none";
});

const contNav = document.querySelector('.cont-navbar');
burger.addEventListener('click', () => {
    if(contNav.classList.contains('isActive')){
        nav.style.top ='0';
        contNav.classList.remove('isActive')
    }
    else {
        contNav.classList.add('isActive')
    }
});

for(let i = 0; i < 4 ; i++){
    a[i].addEventListener('click', () => {
        contNav.classList.remove('isActive')
    }) 
}

