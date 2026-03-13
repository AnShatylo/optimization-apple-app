'use strict';

import { headerInit } from './js/header';
import { personalInfoInit } from './js/personal-info';
import { deviceInfoInit } from './js/device-info';
import { actionRequiredInit } from './js/action-required';
import { actionsInit } from './js/actions';
import { alertInit } from './js/alert';
import { popupInit } from './js/popup';

document.addEventListener('DOMContentLoaded', async function () {
  const mainHTML = `
        ${await headerInit()}
        ${await actionRequiredInit()}
        ${await personalInfoInit()}
        ${await deviceInfoInit()}
        ${await actionsInit()}
`;

  document
    .querySelector('.main-content')
    .insertAdjacentHTML('afterbegin', mainHTML);

  setTimeout(async () => {
    const alertHTML = `
    ${await alertInit()}
        `;
    document
      .querySelector('.main-content')
      .insertAdjacentHTML('beforeend', alertHTML);

    setTimeout(async () => {
      const popupHTML = `
        ${await popupInit()}
        `;
      document
        .querySelector('.main-content')
        .insertAdjacentHTML('beforeend', popupHTML);
    }, 5000);
  }, 3000);
});
