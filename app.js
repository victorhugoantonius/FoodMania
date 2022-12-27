import { menu } from "./menu.js";

const toggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const height = linksContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;
  if (height === 0) {
    linksContainer.style.height = `${linkHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const head = document.getElementById("head");
const navCenter = document.querySelector(".nav-center");

// fixed navbar
window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  const scroll = window.pageYOffset;
  const heightNav = navCenter.getBoundingClientRect().height;
  if (scroll > heightNav) {
    head.classList.add("fixed-navbar");
  } else {
    head.classList.remove("fixed-navbar");
  }
});

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const ids = e.target.getAttribute("href").slice(1);
    const ele = document.getElementById(ids);
    let pos = ele.offsetTop;

    window.scrollTo({
      top: pos,
      left: 0,
    });
    linksContainer.style.height = 0;
  });
});

const menuContainer = document.querySelector(".menu-container");

window.addEventListener("DOMContentLoaded", () => {
  let displayItem = menu
    .map((item) => {
      return `<div class="menu-center">
          <div class="menu-item">
            <img src="${item.img}" alt="" />
            <div class="menu-info">
              <h3>${item.title}</h3>
              <h3 class="price">$${item.price}</h3>
            </div>
            <div class="underline2"></div>
            <p>
              ${item.desc}
            </p>
            <button type="button" class="btn">Order now</button>
          </div>
        </div>`;
    })
    .join("");
  menuContainer.innerHTML = displayItem;
});
