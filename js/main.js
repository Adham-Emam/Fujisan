// Page Scroll Progress
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

/* BG Rotation */
let imgs = ["bg1.webp", "bg2.webp", "bg3.webp", "bg4.webp", "bg5.jpg"];

let element = document.getElementById("landing");

function change() {
  let randBg = Math.floor(Math.random() * imgs.length);
  element.style.backgroundImage = `url(./images/${imgs[randBg]})`;
}

let imgChange = setInterval(change, 2000);

let navbar = document.querySelectorAll(".navbar li a");
let navbarLinks = [...navbar];
let resUl = document.querySelector(".res-ul");
let resUlLinks = document.querySelectorAll(".res-ul li a");
let linksArray = [...resUlLinks];
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
  menuIcon.classList.remove("icon-active");
};

// window.addEventListener('load', () => {
// };

// Set active class for navbar
navbarLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    navbarLinks.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});
linksArray.forEach((li) => {
  li.addEventListener("click", (e) => {
    linksArray.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});
let colorsArray = document.querySelectorAll(".setting .color span");
let logo = document.querySelector(".logo");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");

colorsArray.forEach((color) => {
  color.addEventListener("click", (e) => {
    colorsArray.forEach((el) => el.classList.remove("active"));
    localStorage.setItem("active-color", e.currentTarget.classList);
    e.currentTarget.classList.add("active");
  });
});

first.onclick = function () {
  document.documentElement.style.setProperty("--main-color", "#16c2b1");
  localStorage.setItem("main-color", "#16c2b1");
  logo.setAttribute("src", "images/Logo main.png");
  localStorage.setItem("logo-color", "images/Logo main.png");
};
second.onclick = function () {
  document.documentElement.style.setProperty("--main-color", "#f9aa33");
  localStorage.setItem("main-color", "#f9aa33");
  logo.setAttribute("src", "images/Logo orange.png");
  localStorage.setItem("logo-color", "images/Logo orange.png");
};
third.onclick = function () {
  document.documentElement.style.setProperty("--main-color", "#276fbf");
  localStorage.setItem("main-color", "#276fbf");
  logo.setAttribute("src", "images/Logo blue.png");
  localStorage.setItem("logo-color", "images/Logo blue.png");
};
fourth.onclick = function () {
  document.documentElement.style.setProperty("--main-color", "#c51162");
  localStorage.setItem("main-color", "#c51162");
  logo.setAttribute("src", "images/Logo pink.png");
  localStorage.setItem("logo-color", "images/Logo pink.png");
};

// Change color onload
window.addEventListener("load", () => {
  if (window.localStorage.getItem("main-color")) {
    document.documentElement.style.setProperty(
      "--main-color",
      window.localStorage.getItem("main-color")
    );
    if (window.localStorage.getItem("logo-color")) {
      logo.setAttribute("src", window.localStorage.getItem("logo-color"));
    }
  }
  if (window.localStorage.getItem("animation") == "on") {
    on.classList.add("ani-active");
    off.classList.remove("ani-active");
    imgChange = setInterval(change, 2000);
  } else if (window.localStorage.getItem("animation") == "off") {
    off.classList.add("ani-active");
    on.classList.remove("ani-active");
    clearInterval(imgChange);
  }
  if (window.localStorage.getItem("active-color")) {
    colorsArray.forEach((color) => {
      color.classList.remove("active");
      if (window.localStorage.getItem("active-color") == color.classList) {
        color.classList.add("active");
      }
    });
  }
});

let on = document.querySelector(".on");
let off = document.querySelector(".off");

on.onclick = function () {
  on.classList.add("ani-active");
  off.classList.remove("ani-active");
  imgChange = setInterval(change, 2000);
  window.localStorage.setItem("animation", "on");
};

off.onclick = function () {
  off.classList.add("ani-active");
  on.classList.remove("ani-active");
  clearInterval(imgChange);
  window.localStorage.setItem("animation", "off");
};

// reset button
document.querySelector(".reset").addEventListener("click", () => {
  window.localStorage.clear();
  window.location.reload();
});

// Skills width Animation on scroll
let skillsContainer = document.querySelector("#skills");
let skillSpans = document.querySelectorAll("#skills .skill span");
let skillProgress = [...skillSpans];

window.onscroll = function () {
  let skillsOffset = skillsContainer.offsetTop;
  let skillsOuterHeight = skillsContainer.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffset + skillsOuterHeight - windowHeight) {
    skillSpans.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
  remove();
};
function remove() {
  if (window.pageYOffset > 850) {
    settingIcon.classList.remove("fa-spin");
    setting.classList.remove("setting-active");
    resUl.classList.remove("res-ul-active");
    menuIcon.classList.remove("icon-active");
  }
}

// gallery Popup

let imageBox = document.querySelectorAll("#gallery .box img");
let imgsArray = [...imageBox];

imgsArray.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let popup = document.createElement("div");
    popup.classList.add("popup");

    let cloneImage = e.currentTarget.cloneNode(true);
    popup.appendChild(cloneImage);

    let deleteButton = document.createElement("span");
    deleteButton.classList.add("del");
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-x");
    deleteButton.appendChild(deleteIcon);
    popup.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      overlay.remove();
      popup.remove();
    });

    document.body.append(overlay);
    document.body.append(popup);
  });
});

// bullet scroll function
