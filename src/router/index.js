import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Index.vue';
import Scripts from '@/views/Scripts/Index.vue';
import Rehearse from '@/views/Rehearse/Index.vue';
import RehearsePractice from '@/views/Rehearse/Practice.vue';
import Stats from '@/views/Stats/Index.vue';
import ScanScript from '@/views/Scripts/Scan.vue';
import ScriptEdit from '@/views/Scripts/Edit.vue';
import AuthIndex from '@/views/Auth/Index.vue';
// import About from '@/views/About.vue';

const routes = [
    { 
      path: '/', 
      name: 'home',
      component: Home,
    },
    {
        path: '/scripts',
        name: 'scripts',
        component: Scripts
    },
    {
        path: '/rehearse',
        name: 'rehearse',
        component: Rehearse
    },
    {
        path: '/rehearse/:id',
        name: 'rehearse-practice',
        component: RehearsePractice,
        meta: {
          name: 'lockedin'
        }
    },
    {
        path: '/stats',
        name: 'stats',
        component: Stats
    },
    {
      path: '/scan',
      name: 'scan',
      component: ScanScript
    },
    {
      path: '/scan/:id',
      name: 'scan-edit',
      component: ScriptEdit
    },
    {
      path: '/auth',
      name: 'auth-index',
      component: AuthIndex,
      meta: {
        name: 'lockedin'
      }
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
