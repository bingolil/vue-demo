import Vue from 'vue';
import VueX from 'vuex';

import person from './modules/person';
import admin from './modules/admin';

Vue.use(VueX);

const store = new VueX.Store({
    modules: {
        person: person,
        admin: admin
    }
})

export default store;