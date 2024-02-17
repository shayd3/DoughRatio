import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'
import HelloWorldView from '../views/HelloWorldView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'CalculatorView',
            component: CalculatorView
        },
        {
            path: '/hello',
            name: 'HelloWorldView',
            component: HelloWorldView
        }
    ]
})

export default router
