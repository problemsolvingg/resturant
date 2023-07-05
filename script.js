const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".menu .arrows i ");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.opacity = carousel.scrollLeft == 0 ? "0.5" : "1";
    arrowIcons[1].style.opacity = carousel.scrollLeft == scrollWidth ? "0.5" : "1";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 18; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
//  /////////////////////////////////////////////////////////
function myclick1() {
    var color = document.getElementById(`1`);
    color.classList.toggle("mycolor");
}
function myclick2() {
    var color = document.getElementById(`2`);
    color.classList.toggle("mycolor");
}
function myclick3() {
    var color = document.getElementById(`3`);
    color.classList.toggle("mycolor");
}
function myclick4() {
    var color = document.getElementById(`4`);
    color.classList.toggle("mycolor");
}
function myclick5() {
    var color = document.getElementById(`5`);
    color.classList.toggle("mycolor");
}
function myclick6() {
    var color = document.getElementById(`6`);
    color.classList.toggle("mycolor");
}
function myclick7() {
    var color = document.getElementById(`7`);
    color.classList.toggle("mycolor");
}
function myclick8() {
    var color = document.getElementById(`8`);
    color.classList.toggle("mycolor");
}
function myclick9() {
    var color = document.getElementById(`9`);
    color.classList.toggle("mycolor");
}
function myclick10() {
    var color = document.getElementById(`10`);
    color.classList.toggle("mycolor");
}
function myclick11() {
    var color = document.getElementById(`11`);
    color.classList.toggle("mycolor");
}
function myclick12() {
    var color = document.getElementById(`12`);
    color.classList.toggle("mycolor");
}

////////////////////////////////////////////////////////////
const carousel1 = document.querySelector(".gallery .carousel"),
firstImg1 = carousel1.querySelectorAll("img")[0],
arrowIcons1 = document.querySelectorAll(".gallery i ");
let isDragStart1 = false, isDragging1 = false, prevPageX1, prevScrollLeft1, positionDiff1;
const showHideIcons1 = () => {
    // showing and hiding prev/next icon according to carousel1 scroll left value
    let scrollWidth = carousel1.scrollWidth - carousel1.clientWidth; // getting max scrollable width
    arrowIcons1[0].style.opacity = carousel1.scrollLeft == 0 ? "0.5" : "1";
    arrowIcons1[1].style.opacity = carousel1.scrollLeft == scrollWidth ? "0.5" : "1";
}
arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg1.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel1 scroll left else add to it
        carousel1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons1(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide1 = () => {
    // if there is no image left to scroll then return from here
    if(carousel1.scrollLeft - (carousel1.scrollWidth - carousel1.clientWidth) > -1 || carousel1.scrollLeft <= 0) return;
    positionDiff1 = Math.abs(positionDiff1); // making positionDiff1 value to positive
    let firstImgWidth = firstImg1.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel1 left to take middle img center
    let valDifference = firstImgWidth - positionDiff1;
    if(carousel1.scrollLeft > prevScrollLeft1) { // if user is scrolling to the right
        return carousel1.scrollLeft += positionDiff1 > firstImgWidth / 3 ? valDifference : -positionDiff1;
    }
    // if user is scrolling to the left
    carousel1.scrollLeft -= positionDiff1 > firstImgWidth / 3 ? valDifference : -positionDiff1;
}
const dragStart1 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart1 = true;
    prevPageX1 = e.pageX || e.touches[0].pageX;
    prevScrollLeft1 = carousel1.scrollLeft;
}
const dragging1 = (e) => {
    // scrolling images/carousel1 to left according to mouse pointer
    if(!isDragStart1) return;
    e.preventDefault();
    isDragging1 = true;
    carousel1.classList.add("dragging");
    positionDiff1 = (e.pageX || e.touches[0].pageX) - prevPageX1;
    carousel1.scrollLeft = prevScrollLeft1 - positionDiff1;
    showHideIcons1();
}
const dragStop1 = () => {
    isDragStart1 = false;
    carousel1.classList.remove("dragging");
    if(!isDragging1) return;
    isDragging1 = false;
    autoSlide1();
}
carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("touchstart", dragStart1);
document.addEventListener("mousemove", dragging1);
carousel1.addEventListener("touchmove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("touchend", dragStop1);
////////////////////////////////////////////////////////
function myfunc(){
    const menu = document.querySelector("nav");
    menu.style.right="0";
}
function myfunc2(){
    const menuclose = document.querySelector("nav");
    menuclose.style.right="-300px";
}
///////////////////////////////////////////////
function search(){
    var search = document.getElementById(`search`);
    search.classList.toggle("search-bar");
}
/////////////////////////////////////
function cartshow(){
    var cart = document.getElementById("cart");
    cart.classList.toggle("cart-show");
}
//////////////////////////////////
var num=document.getElementById("num")
            count=1;
            num.innerHTML=count;
            function increment(){
                count++;
                num.innerHTML=count;
            }
            function decrement(){
                count--;
                num.innerHTML=count;
                if(count == 0){
                    document.getElementById("card").outerHTML="";
                }
            }
            function del(){
                del = document.getElementById("card").outerHTML="";
                var cont = document.getElementById("container");
                if(del == ""){
                    const box = document.createElement("p");
            box.id = "empty";
        box.textContent="Your Cart is Currantly Empty "
            cont.appendChild(box); 
                }
            }