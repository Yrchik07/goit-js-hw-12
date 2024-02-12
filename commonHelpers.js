import{i as l,a as c,S as u}from"./assets/vendor-92f1aa52.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function d({webformatURL:r,largeImageURL:t,tags:s,likes:i,views:e,comments:o,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${r}" alt="${s}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${i}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${e}</h3>
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
</li> `}function m(r){let t=r.hits.map(d).join("");if(t.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});return}else return t}function p(r){const t=m(r);t.length!==0&&a.insertAdjacentHTML("beforeend",t)}const h=document.querySelector(".js-search-form"),a=document.querySelector(".gallery"),f=document.querySelector(".js_picture_load"),y=document.querySelector(".js-loader");let g=1;h.addEventListener("submit",r=>{r.preventDefault(),document.getElementById("loader").style.display="flex";const t=r.target.elements.form.value.trim();if(t===""){r.target.reset(),a.innerHTML="",document.getElementById("loader").style.display="none";return}L(t).then(s=>{document.getElementById("loader").style.display="none",S(),p(s),P.refresh()}),r.target.reset(),a.innerHTML=""});async function L(r){const t="https://pixabay.com/api/?",s=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:g,per_page:3}),i=t+s;try{return(await c.get(i)).data}catch(e){console.error("Error retrieving image link:",e)}}function S(){y.classList.add("hidden"),f.classList.remove("hidden")}const P=new u(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
