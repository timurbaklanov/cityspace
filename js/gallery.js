let position = 0;
const itemsToShow = 5;
const itemsToScroll = 1;
const container = document.querySelector(".frame .container");
const track = document.querySelector(".frame .container .track");
const items = document.querySelectorAll(".frame .container .track div");
const itemCount = items.length;
const itemWidth = track.clientWidth / itemsToShow;
const movePosition = itemsToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = itemWidth + 'px';
});

function next() {
    if (position > -(itemCount - itemsToShow) / 2 * itemWidth) {
        position -= movePosition;
        setPosition();
    }
}
function prev(){
    if (position < 0) {
        position += movePosition;
        setPosition();
    }
}

const setPosition = () => {
    track.style.transform = 'translateX(' + position + 'px)';
    checkBtns();
}

const checkBtns = () => {
    
}
