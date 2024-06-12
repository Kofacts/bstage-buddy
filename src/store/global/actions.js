import axios from 'axios';

export default {
  getServices({
    commit
  }, obj = {}) {
    return new Promise((resolve, reject) => {
      let url = `/services?${new URLSearchParams(Object.fromEntries(Object.entries(obj || {}).filter(([_, v]) => _ && v != null))).toString()}`;
      axios.get(url)
        .then(async ({
          data : {data}
        }) => {
          commit('SET_SERVICES', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  getNotifications({
    commit
  }, obj = {}) {
    return new Promise((resolve, reject) => {
      let url = `/customer/notifications?${new URLSearchParams(Object.fromEntries(Object.entries(obj || {}).filter(([_, v]) => _ && v != null))).toString()}`;
      axios.get(url)
        .then(async ({
          data : {data}
        }) => {
          commit('SET_NOTIFICATIONS', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  getService({
    commit
  }, id) {
    return new Promise((resolve, reject) => {
      let url = `/services/${id}`;
      axios.get(url)
        .then(async ({
          data : {data}
        }) => {
          commit('SET_SERVICE', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  getCurrencies({
    commit
  }) {
    return new Promise((resolve, reject) => {
      let url = `/currencies`;
      axios.get(url)
        .then(async ({
          data : {data}
        }) => {
          commit('SET_CURRENCIES', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },

  updateProfile(_state, data) {
    return new Promise((resolve, reject) => {
      let url = `/auth/complete`;
      axios.patch(url, data)
        .then(async ({
          data
        }) => {

          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  updatePassword(_state, data) {
    return new Promise((resolve, reject) => {
      let url = `/auth/password`;
      axios.patch(url, data)
        .then(async ({
          data
        }) => {

          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  forgotPassword(_state, data) {
    return new Promise((resolve, reject) => {
      let url = `/auth/password/reset`;
      axios.post(url, data)
        .then( ({
          data
        }) => {
        resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  resetPassword(_state, data) {
    return new Promise((resolve, reject) => {
      let url = `/auth/password/reset`;
      axios.patch(url, data)
        .then( ({
          data
        }) => {
        resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  register(_state, data) {
    return new Promise((resolve, reject) => {
      let url = `/auth/register`;
      axios.post(url, data)
        .then(async ({
          data
        }) => {

          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
}