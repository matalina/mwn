<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        <form>
                            <div class="alert alert-danger" role="alert" v-show="error">
                                Credentials don't match what's in our system.
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" @keyup="error = false">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                            </div>
                            <button class="btn btn-default" @click.prevent="login">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import store from '../store';
    import router from '../routes';

    axios.defaults.baseURL = store.state.api_url;

    export default {
        data: function() {
            return {
                'email': '',
                'password': '',
                'error': null
            }
        },
        methods: {
            login: function()
            {
                let obj = this;

                axios.post('/oauth/token', {
                    client_id: 2,
                    client_secret: 'pRKur5QmyirXzJXL4x7vvsUq6kiSFaTa7u4XUdb3',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password,
                    scope: '*'
                })
                    .then(function(response) {
                        let data = {};
                        data.token = response.data;
                        axios.get('api/v1/user', {
                            headers: {
                                Authorization: response.data.token_type
                                + ' ' + response.data.access_token
                            }
                        })
                            .then(function(response) {
                                data.user = response.data;
                                store.dispatch('login', data);
                                router.push('/employee');
                            });

                    }, function(e) {
                        obj.error = true;
                    });

            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>