import{i as d,a as L,S}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function E({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:r,comments:o,downloads:i}){return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${e}" alt="${s}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${n}</h3>
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
        <h3>${i}</h3>
      </li>
    </ul>
</li> `}function F(e){let t=e.hits.map(E).join("");if(t.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});return}else return t}function m(e){const t=F(e);t.length!==0&&a.insertAdjacentHTML("beforeend",t)}const c=document.querySelector(".js_picture_load");document.querySelector(".js-loader");const a=document.querySelector(".gallery"),P=document.querySelector(".js-search-form");P.addEventListener("submit",B);c.addEventListener("click",v);async function B(e){if(e.preventDefault(),document.getElementById("loader").style.display="flex",y(),l=e.target.elements.form.value.trim(),a.innerHTML="",u=1,l===""){e.target.reset(),a.innerHTML="",document.getElementById("loader").style.display="none";return}let t;try{const s=await g();t=s,document.getElementById("loader").style.display="none",m(s),f.refresh()}catch(s){console.error("Error retrieving image link:",s)}p(),b(t),e.target.reset()}let u=1,l=null,h=150;async function g(){const e="https://pixabay.com/api/?",t=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:h}),s=e;try{return(await L.get(s,{params:t})).data}catch(n){console.error("Error retrieving image link:",n)}}async function v(){document.getElementById("loader").style.display="flex",u+=1;try{const e=await g();document.getElementById("loader").style.display="none",m(e),f.refresh()}catch(e){console.error("Error retrieving image link:",e)}}function b(e){console.log(e.totalHits);const t=Math.ceil(e.totalHits/h),s=t<=e.page;console.log(t),console.log(page),s?(d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),y()):(p(),console.log(1212121))}function p(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}const f=new S(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
