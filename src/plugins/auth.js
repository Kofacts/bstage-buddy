import { createAuth } from '@websanova/vue-auth/src/v3.js';
import driverHttpAxios from '@websanova/vue-auth/src/drivers/http/axios.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/src/drivers/router/vue-router.2.x.js';
import { localStore } from '@/helpers/global';

export default (app) => {
  app.use(createAuth({
    plugins: {
      http: app.axios,
      router: app.router,
    },
    drivers: {
      http: driverHttpAxios,
      auth: {

        request: function (req, token) {
          token = token || localStore.get('default_auth_token')
          this.drivers.http.setHeaders.call(this, req, {
            Authorization: `Basic ${token}`
          });
        },

        response: function (res) {
          var headers = this.drivers.http.getHeaders.call(this, res),
            token = `${headers.Authorization || headers.authorization || ''}`.split(' ')[0].trim();

          return token;
        }
      },
      router: driverRouterVueRouter,
    },
    options: {
      tokenDefaultKey: 'auth_token_default',
      registerData: {
        url: '/auth/register',
        fetchUser: false,
        method: "POST"
      },
      refreshData: {
        url: '/auth/profile',
        method: "GET",
        enabled: true,
      },
      fetchData: {
        url: '/auth/profile',
        method: "GET",
        enabled: true,
      },
      forbiddenRedirect: '/403',
      authRedirect: { path: '/auth/login', name: 'login' }
    }
  }));
}