import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import LandingPage from './pages/LandingPage.vue'
import Institution from './pages/Institution.vue'
import InstitutionDetails from './pages/InstitutionDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage },
        { path: '/institution', component: Institution },
        { path: '/institution/:inst', component: InstitutionDetails},
        
    ]
})
app.use(router)
app.use(vuetify)

app.mount('#app')
