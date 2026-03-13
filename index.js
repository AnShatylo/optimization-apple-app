import{a as r}from"./assets/vendor-Dl2X3eg5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const p="/api/mobile/mobile.json";async function n(){try{return(await r.get(p)).data}catch(t){alert("Error fetching data: "+t)}}async function l(){const t=await n();return`
    <section class="header">
        <div class="container">
          <div class="header-wrap">
            <div class="header-left">
              <img
                src="${new URL("/assets/settings-img-C5bOI3cp.png",import.meta.url).href}"
                alt="Icon of IOS Settings"
                class="header-img"
              />
              <div class="header-info">
                <h1 class="header-brand">${t.device.brand}</h1>
                <p class="header-model">${t.device.model}</p>
                <p class="header-status">Result: ${t.device.status}</p>
              </div>
            </div>
            <span class="header-recommendation">Action Required</span>
          </div>
        </div>
      </section>
  `}async function d(){return`
     <section class="personal-info">
        <div class="container">
          <ul class="personal-info-list">
          ${(await n()).personal_info_sections.map(i=>`
            <li class="personal-info-item">
              <p class="personal-info-type">${i.name}</p>
              <div class="personal-info-right">
                <p class="personal-info-value">${i.content??""}</p>
                <svg
                  class="personal-info-icon"
                  width="11"
                  height="19"
                  viewBox="0 0 20 32"
                  aria-hidden="true"
                >
                  <path d="M17.618 15.111c0 0.337-0.067 0.656-0.202 0.959-0.123 0.292-0.325 0.572-0.606 0.841l-12.94 12.671c-0.438 0.426-0.97 0.639-1.599 0.639-0.404 0-0.78-0.101-1.127-0.303s-0.628-0.471-0.841-0.808c-0.202-0.337-0.303-0.718-0.303-1.144 0-0.617 0.236-1.167 0.707-1.649l11.526-11.207-11.526-11.207c-0.471-0.471-0.707-1.021-0.707-1.649 0-0.415 0.101-0.791 0.303-1.127 0.213-0.348 0.494-0.623 0.841-0.825s0.724-0.303 1.127-0.303c0.628 0 1.161 0.213 1.599 0.639l12.94 12.671c0.269 0.269 0.471 0.55 0.606 0.841s0.202 0.611 0.202 0.959z"></path>
                </svg>
              </div>
            </li>
          `).join("")}
          </ul>
        </div>
      </section>
  `}async function m(){const t=await n();return`
    <section class="device-info">
        <div class="container">
          <div class="device-info-wrap">
            <img
              src="${new URL("data:image/png;base64,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",import.meta.url).href}"
              alt="Image of IPhone"
              class="device-info-img"
            />
            <div class="device-info-content">
              <p class="device-type">${t.device_info.type}</p>
              <p class="device-description">${t.device_info.description}</p>
            </div>
          </div>
        </div>
      </section>
  `}async function f(){const t=await n(),e=[14,6,8,2];return`
    <section class="action-required">
        <div class="container">
          <ul class="action-required-list">
            ${t.action_required.items.map((c,s)=>`<li class="action-required-item">
                    <div class="action-required-item-info">
                      <svg
                        class="action-required-item-icon"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M15.999 8.335c0.552 0 1 0.448 1 1v8c0 0.552-0.448 1-1 1s-1-0.448-1-1v-8c0-0.552 0.448-1 1-1z"></path>
                        <path d="M15.999 22.668c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"></path>
                        <path d="M1.666 16.001c0-7.916 6.417-14.333 14.333-14.333s14.333 6.417 14.333 14.333-6.417 14.333-14.333 14.333c-7.916 0-14.333-6.417-14.333-14.333zM15.999 3.668c-6.811 0-12.333 5.522-12.333 12.333s5.522 12.333 12.333 12.333c6.812 0 12.333-5.522 12.333-12.333s-5.522-12.333-12.333-12.333z"></path>
                      </svg>
                      <p class="action-required-name">${c.name}</p>
                    </div>
                    <p class="action-required-name-qty">${e[s]}</>
                  </li>`).join("")}
          </ul>
        </div>
      </section>
  `}async function u(){return`
    <section class="actions">
        <div class="container">
          <div class="actions-wrap">
            <button type="button" class="actions-optimize-btn">${(await n()).actions.primary}</button>
          </div>
        </div>
      </section>
  `}async function h(){const t=await n();return`
    <div class="alert">
      <img
        src="${new URL("/assets/settings-img-C5bOI3cp.png",import.meta.url).href}"
        alt="Icon of IOS Settings"
        class="alert-img"
      />
      <div class="alert-right">
          <div class="alert-title">
            <p class="alert-heading">Settings</p>
            <span class="alert-time">now</span>
          </div>
          <p class="alert-descr">${t.status_summary.recommendation}</p>
        </div>
    </div>  
  `}async function v(){const t=await n();return`
  <div class="overlay">
    <div class="popup">
          <div class="popup-header">
            <p class="popup-title">${t.optimization_status.message}</p>
            <p class="popup-descr">${t.optimization_status.submessage}</p>
            <p class="popup-timer">01:00</p>
            <img
              src="${new URL("/assets/settings-img-popup-D2aFHVZE.png",import.meta.url).href}"
              alt="Icon of IOS Settings with attention sign"
              class="popup-img"
            />
          </div>
          <div class="popup-footer">
            <button type="button" class="popup-btn">${t.actions.secondary}</button>
          </div>
        </div>
      </div>
  `}document.addEventListener("DOMContentLoaded",async function(){const t=`
        ${await l()}
        ${await f()}
        ${await d()}
        ${await m()}
        ${await u()}
`;document.querySelector(".main-content").insertAdjacentHTML("afterbegin",t),setTimeout(async()=>{const e=`
    ${await h()}
        `;document.querySelector(".main-content").insertAdjacentHTML("beforeend",e),setTimeout(async()=>{const i=`
        ${await v()}
        `;document.querySelector(".main-content").insertAdjacentHTML("beforeend",i)},5e3)},3e3)});
//# sourceMappingURL=index.js.map
