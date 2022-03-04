// For corousel

const corouselList = document.querySelectorAll('.corousel>img');
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
    slider();
}, 6000);