export default function(store) {
    // Do whatever here store is initialize
    if(! window.localStorage.state) {
        window.localStorage.state = true;
        window.localStorage.api_url =  'http://127.0.0.1:8000';
        window.localStorage.api_token = null;
        window.localStorage.user = null;
        window.localStorage.mode = null;
    }
    else {
        store.commit('setToken', JSON.parse(window.localStorage.api_token));
        store.commit('setUser', JSON.parse(window.localStorage.user));
        store.commit('changeMode', window.localStorage.mode);
    }
    store.subscribe(function (mutation, state) {
        // called after every mutation
        switch(mutation.type) {
            case 'setToken':
                window.localStorage.api_token = JSON.stringify(mutation.payload);
                break;
            case 'setUser':
                window.localStorage.user = JSON.stringify(mutation.payload);
                break;
            case 'changeMode':
                window.localStorage.mode = JSON.stringify(mutation.payload);
                break;
        }

    });
}