function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}


const navLeft = document.querySelector(".left");
const navRight = document.querySelector(".right");

const images = document.querySelector(".images");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function right() {
  transform((index = index < 3 ? ++index : 0));
}

function left() {
  transform((index = index > 0 ? --index : 3));
}

navLeft.addEventListener("click", left);
navRight.addEventListener("click", right);

function transform(index) {
  images.style.transform = `translateX(-${index * 100}%)`;
  colors.style.transform = `translateX(-${index * 100}%)`;
}






let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-1')
    document.querySelector('.slide-2').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-1')
    document.querySelector('.slide-2').prepend(items[items.length - 1]) // here the length of items = 6
})