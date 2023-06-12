import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MenuView from '@/views/MenuView.vue'
import SubjectMasterView from '@/views/SubjectMasterView.vue'
import HighRankAdminView from '@/views/HighRankAdminView.vue'
import ProfessorAdminView from '@/views/ProfessorAdminView.vue'
import SubjectDetailView from '@/views/SubjectDetailView.vue'
import CreateProposalView from '@/views/CreateProposalView.vue'

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
    },
    {
        path:'/professorAdmin/:dataType',
        name: 'professorAdmin',
        component: ProfessorAdminView
    },

    {
        path:'/subjectDetail/:id',
        name: 'subjectDetail',
        component: SubjectDetailView
    },

    {
        path:'/createProposal/:subject_id',
        name: 'createProposal',
        component: CreateProposalView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router