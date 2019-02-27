import Vue from 'vue'
import App from './App.vue'
import VueSeat from './directive/vue-seat'
import './common/index.less'

Vue.use(VueSeat)

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})