import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Index.vue';
import Scripts from '@/views/Scripts/Index.vue';
import Rehearse from '@/views/Rehearse/Index.vue';
import RehearsePractice from '@/views/Rehearse/Practice.vue';
import Stats from '@/views/Stats/Index.vue';
import StatsShow from '@/views/Stats/Show.vue';
import ScanScript from '@/views/Scripts/Scan.vue';
import ScriptEdit from '@/views/Scripts/Edit.vue';
import AuthIndex from '@/views/Auth/Index.vue';
import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';
// import About from '@/views/About.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,

  },
  {
    path: '/scripts',
    name: 'scripts',
    component: Scripts,
    meta: {
      auth: true
    },
  },
  {
    path: '/rehearse',
    name: 'rehearse',
    component: Rehearse,
    meta: {
      auth: true
    },
  },
  {
    path: '/rehearse/:reference',
    name: 'rehearse-practice',
    component: RehearsePractice,
    meta: {
      auth: true,
      hideMenu: true,
    }
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats,
    meta: {
      auth: true
    },
  },
  {
    path: '/stats/:reference',
    name: 'stats-show',
    component: StatsShow,
    meta: {
      auth: true
    },
  },
  {
    path: '/scan',
    name: 'scan',
    component: ScanScript,
    meta: {
      auth: true
    },
  },
  {
    path: '/scan/:reference',
    name: 'scan-edit',
    component: ScriptEdit,
    meta: {
      auth: true
    },
  },
  {
    path: '/',
    name: 'auth',
    component: AuthIndex,
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default (app) => {
  app.router = router;

  app.use(router);
}
