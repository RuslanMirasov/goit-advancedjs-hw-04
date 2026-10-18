import{a as p,S as f,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="38685778-b39595dc2d3e03e48621cd56d";function g(o){return p.get(m,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:d})=>`<li>
        <a href="${n}" class="lightbox-target">
          <div class="thumb">
            <img src="${s}" alt="${e}" loading="lazy" />
          </div>
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${t}</span></p>
            <p class="info-item"><b>Views</b><span>${i}</span></p>
            <p class="info-item"><b>Comments</b><span>${u}</span></p>
            <p class="info-item"><b>Downloads</b><span>${d}</span></p>
          </div>
        </a>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function v(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){a.warning({message:"Please enter your search query!",position:"topRight"});return}L(),v(),g(r).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(()=>{a.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
