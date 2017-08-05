import Vue from 'vue';
import Router from 'vue-router';

import Login from './pages/Login';
import Employee from './pages/Employee';
import Admin from './pages/Admin';
import Customer from './pages/Customer';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/employee',
            component: Employee
        },
        {
            path: '/admin',
            component: Admin
        },
        {
            path: '/customer',
            component: Customer
        }
    ]
});