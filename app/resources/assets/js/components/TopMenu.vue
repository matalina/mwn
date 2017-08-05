<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="/">
                    My Writing Notebook
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right" v-show="isLoggedIn()">
                    <li :class="{ active: mode('customer') }">
                        <router-link to="/mode/customer">Customer</router-link>
                    </li>
                    <li :class="{ active: mode('employee') }">
                        <router-link to="/mode/employee">Store</router-link>
                    </li>
                    <li :class="{ active: mode('admin') }" v-show="isAdmin()">
                        <router-link to="/mode/admin">Admin</router-link>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ $store.getters.username }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a @click="logout()">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import store from '../store';
    import router from '../routes';

    export default {
        methods: {
            isLoggedIn() {
                return store.getters.isLoggedIn;
            },
            mode(type) {
                return store.getters.getMode === type;
            },
            logout() {
                store.dispatch('logout');
                router.push('/');
            },
            isAdmin() {
                return store.getters.isAdmin;
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
