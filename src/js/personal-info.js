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
                <svg
                  class="personal-info-icon"
                  width="11"
                  height="19"
                  viewBox="0 0 20 32"
                  aria-hidden="true"
                >
                  <path d="M17.618 15.111c0 0.337-0.067 0.656-0.202 0.959-0.123 0.292-0.325 0.572-0.606 0.841l-12.94 12.671c-0.438 0.426-0.97 0.639-1.599 0.639-0.404 0-0.78-0.101-1.127-0.303s-0.628-0.471-0.841-0.808c-0.202-0.337-0.303-0.718-0.303-1.144 0-0.617 0.236-1.167 0.707-1.649l11.526-11.207-11.526-11.207c-0.471-0.471-0.707-1.021-0.707-1.649 0-0.415 0.101-0.791 0.303-1.127 0.213-0.348 0.494-0.623 0.841-0.825s0.724-0.303 1.127-0.303c0.628 0 1.161 0.213 1.599 0.639l12.94 12.671c0.269 0.269 0.471 0.55 0.606 0.841s0.202 0.611 0.202 0.959z"></path>
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
