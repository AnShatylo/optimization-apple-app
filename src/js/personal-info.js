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
              <p class="personal-info-value">${item.content ?? ''}</p>
              <svg class="action-required-item-icon" width="11" height="19">
                <use href="./img/svg/icons.svg#icon-arrow" />
              </svg>
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
