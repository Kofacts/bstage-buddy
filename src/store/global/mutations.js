export default {
    SET_CURRENCIES(state, array) {
      state.currencies = array;
    },
    SET_IS_OPEN(state, value) {
      state.is_open = value;
    },
    SET_SERVICES(state, array) {
      state.services = array;
    },
    SET_SERVICE(state, array) {
      state.service = array;
    },
    SET_NOTIFICATIONS(state, array) {
      state.notifications = array;
    },
  }