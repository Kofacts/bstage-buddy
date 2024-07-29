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
  fetchScript({ commit }, reference) {
    return new Promise((resolve, reject) => {
      let url = `/scripts/${reference}`;
      axios.get(url)
        .then(async ({
          data : { data }
        }) => {
          commit('SET_SCRIPT', data);
          resolve(data);
        })
        .catch((error) => {
          reject(error.response)
        });
    });
  },
  update({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let url = `/scripts/${payload.reference}`;
      axios.patch(url, payload)
        .then(async ({
          data
        }) => {
          commit('SET_SCRIPT', data.data);
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
  savePractice({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let url = `/script_lines/${payload.reference}/practice`;
      axios.patch(url, payload)
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
  addLine({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let url = `/scripts/${payload.reference}/lines`;
      axios.postForm(url, payload)
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