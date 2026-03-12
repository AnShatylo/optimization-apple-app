'use strict';

import { headerInit } from './js/header';
import { personalInfoInit } from './js/personal-info';
import { deviceInfoInit } from './js/device-info';
import { actionRequiredInit } from './js/action-required';
import { actionsInit } from './js/actions';
import { alertInit } from './js/alert';
import { popupInit } from './js/popup';

const html = `
        ${await headerInit()},
        ${await actionRequiredInit()}
        ${await personalInfoInit()}
        ${await deviceInfoInit()}
        ${await actionsInit()}
        ${await alertInit()}
        ${await popupInit()}
`;

const appWrap = document
  .querySelector('.main-content')
  .insertAdjacentHTML('afterbegin', html);
