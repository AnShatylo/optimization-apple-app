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
                (item, index) =>
                  `<li class="action-required-item">
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
                      <p class="action-required-name">${item.name}</p>
                    </div>
                    <p class="action-required-name-qty">${qty[index]}</>
                  </li>`
              )
              .join('')}
          </ul>
        </div>
      </section>
  `;

  return appHTTML;
}
