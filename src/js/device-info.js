import { getAppData } from './api.js';

export async function deviceInfoInit() {
  const appData = await getAppData();

  const appHTTML = `
    <section class="device-info">
        <div class="container">
          <div class="device-info-wrap">
            <img
              src="${new URL('../img/png/iPhone Space Deep Purple Front.png', import.meta.url).href}"
              alt="Image of IPhone"
              class="device-info-img"
            />
            <div class="device-info-content">
              <p class="device-type">${appData.device_info.type}</p>
              <p class="device-description">${appData.device_info.description}</p>
            </div>
          </div>
        </div>
      </section>
  `;

  return appHTTML;
}
