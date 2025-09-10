
function togglemenu(){
    const menu = document.querySelector(".hum-menu-links")
    const humb = document.querySelector(".hum-icon")

    menu.classList.toggle('open')
    humb.classList.toggle('open')
}

const arrowIconHovers = document.querySelectorAll('.arrow-icon');
arrowIconHovers.forEach(arrowIconHover => {
    arrowIconHover.addEventListener('mouseenter', () => {
        arrowIconHover.src = './assets/down-arrow-hover.png';
    });
    arrowIconHover.addEventListener('mouseleave', () => {
        arrowIconHover.src = './assets/down-arrow.png';
    });
});

const skills1 = document.querySelectorAll(".level-indicator") 