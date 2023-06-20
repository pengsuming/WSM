const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);

// .nav-toggle 클릭하면
nav_toggle.onclick = () => {
    // .nav-toggle i 햄버거메뉴 <-> X
    // class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    // .nav-list에 .show-menu toggle
    navListUl.classList.toggle("show-menu");
}



//HTML -> js
// 1. ID
// 요소가 하나
// const navToggleDiv = document.getElementById("nav-toggle");
// nav-toggle
// 2. class
// 요소가 여러개일 수 있음
// const navToggleDiv = document.getElementsByClassName("nav-toggle");
// 3. Tag
// const navToggleDiv = document.getElementsByTagName("div")[0];
// 4. CSS selector
// const navToggleDiv = document.querySelector("#nav-toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];
// 5. XPath
// nav_toggle.onclick = () => alert("안녕");
// nav_toggle.onclick = alert("안녕");
// function sayHello() {
//     alert("안녕");
// }

// "안녕"이라는 창을 띄우는 함수를 실행해라
// nav_toggle.onclick = function () {
//     alert("안녕");
// };
// nav_toggle.onclick = () => {
//     alert("안녕");
// };
