// For corousel

const corouselList = document.querySelectorAll('.corousel>li');
slider = () => {
    Array.from(corouselList).forEach((element) => {
        if (element.style.transform != "translateX(-100%)") {
            element.style.transform = "translateX(-100%)";
        } else {
            element.style.transform = "translateX(0%)";
        }
    });
}
setInterval(() => {
    // slider();
}, 4000);

// slideBtn = document.getElementsByClassName('slide-btn');

// Array.from(slideBtn).forEach(element => {
//     element.addEventListener('click', slider());
// });