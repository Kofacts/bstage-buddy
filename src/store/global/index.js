import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const global = {
  namespaced: true,
  state: {
    voices: [],
    languages: [],
  },
  actions,
  getters,
  mutations
}