import { createRouter, createWebHistory } from 'vue-router'
import ListOfRespondents from '../pages/ListOfRespondents.vue'
import Interview from '../pages/Interview.vue'

const routes = [
    {
        path: '/',
        component: ListOfRespondents,
        props: { pageName: 'List of Respondents' }
    },
    {
        path: '/interview',
        component: Interview,
        children: [
            {
              path: 'step-one',
            //   component: StepOne
            },
        ]    
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;