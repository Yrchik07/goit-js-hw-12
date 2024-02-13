import{i as p,a as c,S as f}from"./assets/vendor-92f1aa52.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function g({webformatURL:r,largeImageURL:e,tags:i,likes:s,views:t,comments:o,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${r}" alt="${i}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${s}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${t}</h3>
      </li>
      <li class="description-item">
        <h2>comments</h2>
        <h3>${o}</h3>
      </li>
      <li class="description-item">
        <h2>downloads</h2>
        <h3>${n}</h3>
      </li>
    </ul>
</li> `}function y(r){let e=r.hits.map(g).join("");if(e.length===0){p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});return}else return e}function l(r){const e=y(r);e.length!==0&&a.insertAdjacentHTML("beforeend",e)}const L=document.querySelector(".js-search-form"),a=document.querySelector(".gallery"),u=document.querySelector(".js_picture_load"),S=document.querySelector(".js-loader");let d=1,m="";const P="https://pixabay.com/api/?",v=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:m,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:3}),h=P+v;u.addEventListener("click",w);L.addEventListener("submit",r=>{r.preventDefault(),document.getElementById("loader").style.display="flex";const e=r.target.elements.form.value.trim();if(e===""){r.target.reset(),a.innerHTML="",document.getElementById("loader").style.display="none";return}E(e).then(i=>{document.getElementById("loader").style.display="none",b(),l(i),$.refresh()}),r.target.reset(),a.innerHTML=""});async function E(r){m=`${r}`;try{return(await c.get(h)).data}catch(e){console.error("Error retrieving image link:",e)}}async function w(){d+=1;try{return(await c.get(h)).data}catch(r){console.error("Error retrieving image link:",r)}l(data)}function b(){S.classList.add("hidden"),u.classList.remove("hidden")}const $=new f(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
