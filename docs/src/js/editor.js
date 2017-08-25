import Vue from 'vue';

import router from './editor/routes';
import store from './editor/store';

//Vue.component('top-menu', TopMenu);

const app = new Vue({
    el: '#app',
    router,
    store
});