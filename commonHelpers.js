import{i as u,a as b,S as v}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function B({webformatURL:t,largeImageURL:o,tags:n,likes:s,views:e,comments:r,downloads:i}){return`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${t}" alt="${n}">
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
        <h3>${i}</h3>
      </li>
    </ul>
</li> `}function F(t){let o=t.hits.map(B).join("");if(o.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),m();return}else return o}function h(t){const o=F(t);o.length!==0&&l.insertAdjacentHTML("beforeend",o)}const d=document.querySelector(".js_picture_load");document.getElementById("loader");const g=document.getElementById("loader_serch"),l=document.querySelector(".gallery"),w=document.querySelector(".js-search-form");let a=1,c="",p=15,y,f;w.addEventListener("submit",I);d.addEventListener("click",$);async function I(t){if(t.preventDefault(),document.getElementById("loader").style.display="flex",c=t.target.elements.form.value.trim(),l.innerHTML="",a=1,c===""){t.target.reset(),l.innerHTML="",document.getElementById("loader").style.display="none";return}let o;try{const r=await L();o=r.totalHits,E(),document.getElementById("loader").style.display="none",h(r),S.refresh()}catch(r){console.error("Error retrieving image link:",r)}const e=document.querySelector(".gallery-item").getBoundingClientRect().height;f=e+e,y=o,t.target.reset()}async function L(){const t="https://pixabay.com/api/?",o=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:p}),n=t;try{return(await b.get(n,{params:o})).data}catch(s){console.error("Error retrieving image link:",s)}}async function $(){m(),document.getElementById("loader").style.display="flex",a+=1,E();try{const t=await L();document.getElementById("loader").style.display="none",h(t),S.refresh()}catch(t){console.error("Error retrieving image link:",t)}window.scrollBy({top:`${f}`,behavior:"smooth"}),P()}function E(){Math.ceil(y/p)<=a?(u.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#1bb5b0",position:"topRight"}),m()):P()}function P(){g.classList.add("is-open"),d.classList.remove("hidden")}function m(){g.classList.remove("is-open"),d.classList.add("hidden")}const S=new v(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
