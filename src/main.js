import { createApp } from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import { createRouter, createWebHistory } from 'vue-router'
// import TheHeader from './components/TheHeader.vue'
import Institution from './pages/Institution.vue'
import LandingPage from './pages/LandingPage.vue'
import InstitutionDetails from './pages/InstitutionDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component:LandingPage },
        { path: '/institution', component: Institution },
        {path: '/institution/:instid', component:InstitutionDetails,props:true}
    ]
})

const app = createApp(App)
// app.component('the-header', TheHeader)
app.use(SmartTable)
app.use(router)
app.mount('#app')
