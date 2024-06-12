import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Index.vue';
import Scripts from '@/views/Scripts/Index.vue';
import Rehearse from '@/views/Rehearse/Index.vue';
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
      meta: {
        auth: true
      },
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
      path: '/login',
      name: 'login',
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

export default (app) => {
  app.router = router;

  app.use(router);
}
