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

const navlist = document.querySelectorAll('.primary-nav>li');
Array.from(navlist).forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.id == "") {
            element.id = "active";
            console.log(element.offsetLeft);
        } else if (e.offsetLeft != element.offsetLeft) {
            element.id = "";
        }
    })
});


// not working

// if (nav.id == 'nav-shown') {
//     document.addEventListener('click', () => {
//         if (nav.id != 'nav-hidden') {
//             nav.id = 'nav-hidden';
//             menubtn.style.backgroundImage = 'url(../img/icon-hamburger.svg)';
//             console.log('if');
//         }
//     })
// }


// For showing scroll to top button

let topbtn = document.querySelector('.topbtn');
document.addEventListener('scroll', () => {
    if (scrollY >= 300) {
        topbtn.style.display = "flex";
    } else {
        topbtn.style.display = "none";
    }
})