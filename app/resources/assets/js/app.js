
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

import router from './routes';
import store from './store';

import TopMenu from './components/TopMenu';

router.beforeEach(function(to, from, next) {
    if(to.path !== '/') {
        if(store.getters.isLoggedIn) {
            return next();
        }
        else {
            return next('/');
        }
    }
    else {
        if(store.getters.isLoggedIn) {
            return next('/' + store.getters.getMode);
        }
        else {
            return next();
        }
    }
});

Vue.component('top-menu', TopMenu);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: [TopMenu]
});
