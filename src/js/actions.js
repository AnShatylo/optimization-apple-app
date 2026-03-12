import { getAppData } from './api.js';

export async function actionsInit() {
  const appData = await getAppData();

  const appHTTML = `
    <section class="actions">
        <div class="container">
          <div class="actions-wrap">
            <button type="button" class="actions-optimize-btn">${appData.actions.primary}</button>
          </div>
        </div>
      </section>
  `;
  return appHTTML;
}
