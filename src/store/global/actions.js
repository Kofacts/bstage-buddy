import axios from 'axios';

export default {
  getVoices({
    commit
  }) {
    return new Promise((resolve, reject) => {
      let url = `/voices`;
      axios.get(url)
        .then(async ({
          data : {data}
        }) => {
          commit('SET_VOICES', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },

  getLanguages({
    commit
  }) {
    return new Promise((resolve, reject) => {
      let url = `/languages`;
      axios.get(url)
        .then(async ({
          data : {data}
        }) => {
          commit('SET_LANGUAGES', data);
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