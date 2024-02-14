import{i as g,a as L,S}from"./assets/vendor-92f1aa52.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function E({webformatURL:e,largeImageURL:t,tags:n,likes:i,views:r,comments:o,downloads:s}){return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${e}" alt="${n}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${i}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${r}</h3>
      </li>
      <li class="description-item">
        <h2>comments</h2>
        <h3>${o}</h3>
      </li>
      <li class="description-item">
        <h2>downloads</h2>
        <h3>${s}</h3>
      </li>
    </ul>
</li> `}function v(e){let t=e.hits.map(E).join("");if(t.length===0){g.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});return}else return t}function u(e){const t=v(e);t.length!==0&&a.insertAdjacentHTML("beforeend",t)}const l=document.querySelector(".js_picture_load"),m=document.querySelector(".js-loader"),a=document.querySelector(".gallery"),w=document.querySelector(".js-search-form");w.addEventListener("submit",P);l.addEventListener("click",b);async function P(e){if(e.preventDefault(),document.getElementById("loader").style.display="flex",c=e.target.elements.form.value.trim(),a.innerHTML="",d=1,c===""){e.target.reset(),a.innerHTML="",document.getElementById("loader").style.display="none",y();return}try{const t=await h();document.getElementById("loader").style.display="none",u(t),p(),f.refresh()}catch(t){console.error("Error retrieving image link:",t)}e.target.reset()}let d=1,c=null;async function h(){const e="https://pixabay.com/api/?",t=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:15}),n=e;try{return(await L.get(n,{params:t})).data}catch(i){console.error("Error retrieving image link:",i)}}async function b(){y(),d+=1;try{const e=await h();document.getElementById("loader").style.display="none",u(e),p(),f.refresh()}catch(e){console.error("Error retrieving image link:",e)}}function p(){m.classList.add("hidden"),l.classList.remove("hidden")}function y(){m.classList.add("hidden"),l.classList.add("hidden")}const f=new S(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
