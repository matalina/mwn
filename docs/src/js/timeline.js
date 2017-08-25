import Vue from 'vue';

import router from './timeline/routes';
import store from './timeline/store';

//Vue.component('top-menu', TopMenu);

const app = new Vue({
    el: '#app',
    router,
    store
});