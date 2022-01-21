let hero = document.querySelector('.hero');
let text = hero.querySelector('h1');
const walk = 200; //200 px

hero.addEventListener('mousemove', function(e) {
    let { offsetX: x, offsetY: y } = e;
    let { offsetWidth: width, offsetHeight: height } = hero;


    x += e.target.offsetLeft;
    y += e.target.offsetTop;

    let xWalk = Math.round((x / width * walk) - (walk / 2));
    let yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style = `text-shadow:
    ${xWalk}px ${yWalk}px 0 rgba(243, 85, 24, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(75, 42, 108, 0.7),
    ${yWalk *-1}px ${xWalk}px 0 rgba(15, 200, 150, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(185, 25, 85, 0.7)
    `
})