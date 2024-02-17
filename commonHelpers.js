import{i as h,a as v,S as F}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function w({webformatURL:t,largeImageURL:o,tags:i,likes:s,views:e,comments:r,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${t}" alt="${i}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${s}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${e}</h3>
      </li>
      <li class="description-item">
        <h2>comments</h2>
        <h3>${r}</h3>
      </li>
      <li class="description-item">
        <h2>downloads</h2>
        <h3>${n}</h3>
      </li>
    </ul>
  </li> `}function E(t){let o=t.hits.map(w).join("");if(o.length===0){h.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});return}else return o}function g(t){const o=E(t);o.length!==0&&l.insertAdjacentHTML("beforeend",o)}const l=document.querySelector(".gallery"),a=document.querySelector(".js_picture_load"),d=document.getElementById("loader_serch"),B=document.querySelector(".js-search-form");let c=1,u="",p=15,f,y;B.addEventListener("submit",$);a.addEventListener("click",q);async function $(t){if(t.preventDefault(),S(),u=t.target.elements.form.value.trim(),l.innerHTML="",c=1,u===""){t.target.reset(),l.innerHTML="",m();return}let o;try{const r=await L();o=r.totalHits,g(r),b.refresh()}catch(r){m(),t.target.reset(),console.error("Error retrieving image link:",r)}const e=document.querySelector(".gallery-item").getBoundingClientRect().height;y=e+e,f=o,t.target.reset(),P()}async function L(){const t="https://pixabay.com/api/?",o=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:p}),i=t;try{return(await v.get(i,{params:o})).data}catch(s){console.error("Error retrieving image link:",s)}}async function q(){c+=1,S();try{const t=await L();g(t),b.refresh()}catch(t){console.error("Error retrieving image link:",t)}window.scrollBy({top:`${y}`,behavior:"smooth"}),P()}function P(){Math.ceil(f/p)<=c?(h.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#1bb5b0",position:"topRight"}),_(),m()):C()}function C(){d.classList.add("is-open"),a.classList.remove("hidden")}function S(){d.classList.remove("is-open"),a.classList.add("hidden")}function m(){d.classList.add("is-open")}function _(){a.classList.add("hidden")}const b=new F(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
