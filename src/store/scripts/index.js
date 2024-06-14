import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const scripts = {
  namespaced: true,
  state: {
    scripts: [],
  },
  actions,
  getters,
  mutations
}