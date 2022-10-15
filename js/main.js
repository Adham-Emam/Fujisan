/* BG Rotation */
let imgs = ["bg1.webp", "bg2.webp", "bg3.webp", "bg4.webp", "bg5.jpg"];

let element = document.getElementById("landing");

function change() {
  let randBg = Math.floor(Math.random() * imgs.length);
  element.style.backgroundImage = `url(./images/${imgs[randBg]})`;
}
setInterval(change, 2000);

let resUl = document.querySelector(".res-ul");
let menuIcon = document.querySelector(".menu");

let setting = document.querySelector(".setting");
let settingbtn = document.querySelector(".set-icon");
let settingIcon = document.querySelector(".fa-gear");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("icon-active");
  resUl.classList.toggle("res-ul-active");
  setting.classList.remove("setting-active");
  settingIcon.classList.remove("fa-spin");
};

settingbtn.onclick = function () {
  settingIcon.classList.toggle("fa-spin");
  setting.classList.toggle("setting-active");
  resUl.classList.remove("res-ul-active");
};
