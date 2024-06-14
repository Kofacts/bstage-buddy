import axios from 'axios';

export default {
  create(_state, data) {
    return new Promise((resolve, reject) => {
      let url = `/scripts`;
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
  fetchScripts({ commit }) {
    return new Promise((resolve, reject) => {
      let url = `/scripts`;
      axios.get(url)
        .then(async ({
          data : { data }
        }) => {
          commit('SET_SCRIPTS', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  deleteScript(_state, reference) {
    return new Promise((resolve, reject) => {
      let url = `/scripts/${reference}`;
      axios.delete(url)
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