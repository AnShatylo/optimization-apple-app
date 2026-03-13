import { getAppData } from './api.js';

export async function personalInfoInit() {
  const appData = await getAppData();

  const appHTTML = `
     <section class="personal-info">
        <div class="container">
          <ul class="personal-info-list">
          ${appData.personal_info_sections
            .map(
              item => `
            <li class="personal-info-item">
              <p class="personal-info-type">${item.name}</p>
              <div class="personal-info-right">
                <p class="personal-info-value">${item.content ?? ''}</p>
                <svg class="personal-info-icon" width="11" height="19">
                  <use href="${new URL('../img/svg/icons.svg', import.meta.url).href}#icon-arrow" />
                </svg>
              </div>
            </li>
          `
            )
            .join('')}
          </ul>
        </div>
      </section>
  `;

  return appHTTML;
  c;
}
