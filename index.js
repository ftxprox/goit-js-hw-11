import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();let l;function f(r){r.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function c(){const r=document.querySelector(".loader");r&&r.remove()}function d(r){const n=document.querySelector(".gallery"),o=r.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-link">
        <img class="img-gallery"
          src="${e.webformatURL}"
          alt="${e.tags}" 
          loading="lazy" />
        <ul class="list-wrapper">
          <li class="content"><b>Likes:</b> ${e.likes}</li>
          <li class="content"><b>Views:</b> ${e.views}</li>
          <li class="content"><b>Comments:</b> ${e.comments}</li>
          <li class="content"><b>Downloads:</b> ${e.downloads}</li>
        </ul>
      </a>
  `).join("");n.innerHTML=o,l?l.refresh():l=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function m(r){a.info({title:"Info",message:r,position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"})}const g="https://pixabay.com/api/",y="46020556-902bd777cf965228c32d535d7";function p(r){const n=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}),o=`${g}?${n.toString()}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>(console.log(e),e)).catch(e=>{throw console.error("There was an error with the fetch operation:",e),e})}const b=document.querySelector(".search-form"),L=document.querySelector('[name="searchQuery"]'),w=document.querySelector(".gallery");b.addEventListener("submit",r=>{r.preventDefault();const n=L.value.trim();if(!n){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(),f(w),p(n).then(o=>{if(c(),!o||o.hits.length===0){m("Sorry, there are no images matching your search query. Please try again!");return}d(o.hits)}).catch(o=>{console.error("Error fetching images:",o),a.error({title:"Error",message:`Error: ${o.message}`,position:"topRight"})}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
