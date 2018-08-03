import Vue from 'vue';

import VeeValidate, { Validator } from 'vee-validate';
import de from 'vee-validate/dist/locale/de';

Validator.localize('de', de);

Vue.use(VeeValidate);
