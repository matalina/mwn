import Vue from 'vue';
import Vuex from 'vuex';

import localStore from './plugins/local';

Vue.use(Vuex);

const modes = ['customer','employee','admin'];

export default new Vuex.Store({
    state: {
        api_url: 'http://127.0.0.1:8000',
        api_token: null,
        user: null,
        mode: null,
    },
    plugins: [localStore],
    getters: {
        getMode: function (state) {
            if(state.mode === null || state.mode === undefined) {
                return 'none';
            }
            else {
                return modes[state.mode];
            }
        },
        isLoggedIn: function(state) {
            return state.api_token !== null && state.api_token !== undefined;
        },
        username: function(state) {
            console.log(state.user);
            if(state.user === null || state.user === undefined) {
                return 'Guest';
            }
            else {
                return state.user.name;
            }
        },
        isAdmin: function(state) {
            if(state.user !== null && state.user !== undefined) {
                return state.user.is_admin;
            }
            else {
                return false;
            }
        }
    },
    mutations: {
        changeMode(state, mode) {
            if(mode === null) {
                state.mode = null;
            }
            else if(modes.indexOf(mode) === -1){
                state.mode = null;
            }
            else {
                state.mode = modes.indexOf(mode);
            }
        },
        setToken(state, token) {
            state.api_token = token;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login(context, data) {
            context.commit('setToken', data.token);
            context.commit('setUser', data.user);
            context.commit('changeMode','employee');
        },
        logout(context) {
            context.commit('setToken', null);
            context.commit('setUser', null);
            context.commit('changeMode', null);
        }
    }
});
