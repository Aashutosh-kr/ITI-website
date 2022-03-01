// for Showing and hiding of nav bar in small screen devices

const menubtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menubtn.addEventListener('click', () => {
    if (nav.id != 'nav-shown') {
        nav.id = 'nav-shown';
        menubtn.style.backgroundImage = 'url("../img/icon-close.svg")';
    } else {
        nav.id = 'nav-hidden';
        menubtn.style.backgroundImage = 'url("../img/icon-hamburger.svg")';
    }
})



// For showing scroll to top button

let topbtn = document.querySelector('.topbtn');
document.addEventListener('scroll', () => {
    if (scrollY >= 300) {
        topbtn.style.display = "flex";
    } else {
        topbtn.style.display = "none";
    }
})

// not working properly

// if (nav.id == 'nav-shown') {
    document.addEventListener('scroll', () => {
        if (nav.id != 'nav-hidden') {
            nav.id = 'nav-hidden';
            menubtn.style.backgroundImage = 'url(../img/icon-hamburger.svg)';
           // console.log('if');
        }
    })
// }
