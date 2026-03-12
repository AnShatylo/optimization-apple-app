import { getAppData } from './api.js';

export async function actionRequiredInit() {
  const appData = await getAppData();
  const qty = [14, 6, 8, 2];
  const appHTTML = `
    <section class="action-required">
        <div class="container">
          <ul class="action-required-list">
            ${appData.action_required.items
              .map(
                (item, index) => `<li class="action-required-item">
              <svg class="action-required-item-icon" width="32" height="32">
                <use href="./img/svg/icons.svg#icon-settings" />
              </svg>
              <p class="action-required-name">${item.name}</p>
              <p class="action-required-name-qty">${qty[index]}</p>
            </li>`
              )
              .join('')}
          </ul>
        </div>
      </section>
  `;

  return appHTTML;
}
