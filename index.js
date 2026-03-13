import{a as r}from"./assets/vendor-Dl2X3eg5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const p="/api/mobile/mobile.json";async function n(){try{return(await r.get(p)).data}catch(e){alert("Error fetching data: "+e)}}async function l(){const e=await n();return`
    <section class="header">
        <div class="container">
          <div class="header-wrap">
            <div class="header-left">
              <img
                src="./img/png/settings-img.png"
                alt="Icon of IOS Settings"
                class="header-img"
              />
              <div class="header-info">
                <h1 class="header-brand">${e.device.brand}</h1>
                <p class="header-model">${e.device.model}</p>
                <p class="header-status">Result: ${e.device.status}</p>
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
          ${(await n()).personal_info_sections.map(a=>`
            <li class="personal-info-item">
              <p class="personal-info-type">${a.name}</p>
              <div class="personal-info-right">
                <p class="personal-info-value">${a.content??""}</p>
                <svg class="personal-info-icon" width="11" height="19">
                  <use href="./img/svg/icons.svg#icon-arrow" />
                </svg>
              </div>
            </li>
          `).join("")}
          </ul>
        </div>
      </section>
  `}async function u(){const e=await n();return`
    <section class="device-info">
        <div class="container">
          <div class="device-info-wrap">
            <img
              src="./img/png/iPhone Space Deep Purple Front.png"
              alt="Image of IPhone"
              class="device-info-img"
            />
            <div class="device-info-content">
              <p class="device-type">${e.device_info.type}</p>
              <p class="device-description">${e.device_info.description}</p>
            </div>
          </div>
        </div>
      </section>
  `}async function m(){const e=await n(),s=[14,6,8,2];return`
    <section class="action-required">
        <div class="container">
          <ul class="action-required-list">
            ${e.action_required.items.map((o,t)=>`<li class="action-required-item">
                    <div class="action-required-item-info">
                      <svg class="action-required-item-icon" width="32" height="32">
                        <use href="./img/svg/icons.svg#icon-settings" />
                      </svg>
                      <p class="action-required-name">${o.name}</p>
                    </div>
                    <p class="action-required-name-qty">${s[t]}</>
                  </li>`).join("")}
          </ul>
        </div>
      </section>
  `}async function f(){return`
    <section class="actions">
        <div class="container">
          <div class="actions-wrap">
            <button type="button" class="actions-optimize-btn">${(await n()).actions.primary}</button>
          </div>
        </div>
      </section>
  `}async function v(){return`
    <div class="alert">
        <img
        src="./img/png/settings-img.png"
        alt="Icon of IOS Settings"
        class="alert-img"
        />
        <div class="alert-right">
            <div class="alert-title">
                <p class="alert-heading">Settings</p>
                <span class="alert-time">now</span>
            </div>
            <p class="alert-descr">${(await n()).status_summary.recommendation}</p>
        </div>
    </div>  
  `}async function g(){const e=await n();return`
  <div class="overlay">
    <div class="popup">
          <div class="popup-header">
            <p class="popup-title">${e.optimization_status.message}</p>
            <p class="popup-descr">${e.optimization_status.submessage}</p>
            <p class="popup-timer">01:00</p>
            <img
              src="./img/png/settings-img-popup.png"
              alt="Icon of IOS Settings with attention sign"
              class="popup-img"
            />
          </div>
          <div class="popup-footer">
            <button type="button" class="popup-btn">${e.actions.secondary}</button>
          </div>
        </div>
      </div>
  `}document.addEventListener("DOMContentLoaded",async function(){const e=`
        ${await l()}
        ${await m()}
        ${await d()}
        ${await u()}
        ${await f()}
`;document.querySelector(".main-content").insertAdjacentHTML("afterbegin",e),setTimeout(async()=>{const s=`
    ${await v()}
        `;document.querySelector(".main-content").insertAdjacentHTML("beforeend",s),setTimeout(async()=>{const a=`
        ${await g()}
        `;document.querySelector(".main-content").insertAdjacentHTML("beforeend",a)},5e3)},3e3)});
//# sourceMappingURL=index.js.map
