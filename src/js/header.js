import { getAppData } from './api.js';

export async function headerInit() {
  const appData = await getAppData();

  const appHTTML = `
    <section class="header">
        <div class="container">
          <div class="header-wrap">
            <div class="header-left">
              <img
                src="${new URL('../img/png/settings-img.png', import.meta.url).href}"
                alt="Icon of IOS Settings"
                class="header-img"
              />
              <div class="header-info">
                <h1 class="header-brand">${appData.device.brand}</h1>
                <p class="header-model">${appData.device.model}</p>
                <p class="header-status">Result: ${appData.device.status}</p>
              </div>
            </div>
            <span class="header-recommendation">Action Required</span>
          </div>
        </div>
      </section>
  `;

  return appHTTML;
}
