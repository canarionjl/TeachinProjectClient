import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MenuView from '@/views/MenuView.vue'
import SubjectMasterView from '@/views/SubjectMasterView.vue'
import HighRankAdminView from '@/views/HighRankAdminView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'home',
        component: MenuView
    },

    {
        path:'/subjectList/:specialty_id/:course',
        name: 'subjectList',
        component: SubjectMasterView
    },
    {
        path:'/highRankAdmin/:dataType',
        name: 'highRankAdmin',
        component: HighRankAdminView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router