import { getAppData } from './api.js';

export async function popupInit() {
  const appData = await getAppData();

  const appHTTML = `
  <div class="overlay">
    <div class="popup">
          <div class="popup-header">
            <p class="popup-title">${appData.optimization_status.message}</p>
            <p class="popup-descr">${appData.optimization_status.submessage}</p>
            <p class="popup-timer">01:00</p>
            <img
              src="./img/png/settings-img-popup.png"
              alt="Icon of IOS Settings with attention sign"
              class="popup-img"
            />
          </div>
          <div class="popup-footer">
            <button type="button" class="popup-btn">${appData.actions.secondary}</button>
          </div>
        </div>
      </div>
  `;
  return appHTTML;
}
