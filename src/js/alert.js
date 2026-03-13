import { getAppData } from './api.js';

export async function alertInit() {
  const appData = await getAppData();

  const appHTTML = `
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
            <p class="alert-descr">${appData.status_summary.recommendation}</p>
        </div>
    </div>  
  `;
  return appHTTML;
}
