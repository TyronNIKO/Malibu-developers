import{A as p,S as a,N as w,K as f,M as m,a as v}from"./assets/vendor-dae45302.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();jQuery(document).ready(function(o){o("#my-accordion").accordionjs()});console.log("hello");new p(".faq-list",{showMultiple:!0});const d={leftButton:document.querySelector(".swiper-button-prev"),rightButton:document.querySelector(".swiper-button-next")};new a(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});const u=document.querySelector(".swiper").swiper;d.rightButton.addEventListener("click",()=>{u.slideNext()});d.leftButton.addEventListener("click",()=>{u.slidePrev()});console.log("sads");new a(".reviews-wrapper",{modules:[w,f,m],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const y="https://portfolio-js.b.goit.study/api",h="/reviews",g=`${y}${h}`;let b=1;const l={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};async function E(o){try{const r=await v.get(g,{params:{id:o}});if(r.status!==200)throw new Error(r.status);return r.data}catch(r){throw new Error(`Fetching reviews failed: ${r.message}`)}}const x=async()=>{try{const r=(await E(b)).map(({_id:i,author:s,avatar_url:e,review:t})=>`
  <div class="swiper-slide">
  <li class="reviews-item " data="${i}">
  <img class="reviews-img" src="${e}" alt="${s}"/>
  
  <p class="reviews-text">${t}</p>
  <h2 class="reviews-subtitle">${s}</h2>

  </li>
  </div>
  `).join("");l.container.insertAdjacentHTML("beforeend",r)}catch{l.container.insertAdjacentHTML("afterbegin",'<p class="reviews-error-text">Not found</p>')}};x();(()=>{const o=document.querySelectorAll(".glass"),r=10,i=5;o.forEach(s=>{let e=document.createElement("div");const t=s.clientWidth/r+i;console.log(t),e.classList.add("glass-elem"),e.style.width=`${t}px`;for(let n=0;n<r;n++){const c=e.cloneNode(!0);c.style.left=`${t*n-i*n}px`,s.insertAdjacentElement("beforeend",c)}setTimeout(()=>{s.classList.add("active")},500)})})();
//# sourceMappingURL=commonHelpers.js.map
