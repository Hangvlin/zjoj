import { CHANGE_ID, CHANGE_USERNAME, SHOW_EXIT, CHANGE_QUESTIONARR, CHANGE_COMPETITION } from "./mutations_type";

export const mutations = {
  [CHANGE_ID] (state, payload) {
    state.title = payload;
  },
  [CHANGE_USERNAME] (state, payload) {
    state.username = payload;
  },
  [SHOW_EXIT] (state, payload) {
    state.isShow = payload;
  },
  [CHANGE_QUESTIONARR] (state, payload) {
    state.questionArr = payload;
  },
  [CHANGE_COMPETITION] (state, payload) {
    state.competitonArr = payload
  }
}