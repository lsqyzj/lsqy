import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import "bootstrap"

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import neirong from './components/neirong.vue'
import population from './components/echs/population.vue'
import as from './components/qing/as.vue'

const app=createApp(App);

app.component('as', as);
app.component('neirong', neirong);
app.component('population', population);

createApp(App).use(store).use(router).mount('#app')

