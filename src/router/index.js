import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Index.vue';
import Scripts from '@/views/Scripts/Index.vue';
import Rehearse from '@/views/Rehearse/Index.vue';
import RehearsePractice from '@/views/Rehearse/Practice.vue';
import RehearseResults from '@/views/Rehearse/Results.vue';
import RehearseReview from '@/views/Rehearse/Review.vue';
import Stats from '@/views/Stats/Index.vue';
import StatsShow from '@/views/Stats/Show.vue';
import ScanScript from '@/views/Scripts/Scan.vue';
import ScriptEdit from '@/views/Scripts/Edit.vue';
import AuthIndex from '@/views/Auth/Index.vue';
import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';
import ForgotPassword from '@/views/Auth/ForgotPassword.vue';
import ResetPassword from '@/views/Auth/ResetPassword.vue';
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
    path: '/rehearse/:reference/results',
    name: 'rehearse-results',
    component: RehearseResults
  },
  {
    path: '/rehearse/:reference/results/review',
    name: 'rehearse-results-review',
    component: RehearseReview
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
    meta: {
      hideMenu: true,
    }
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
  {
    path: '/auth/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/auth/reset-password',
    name: 'reset-password',
    component: ResetPassword,
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
