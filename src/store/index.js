import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {},
  actions: {
    addTask({ commit }, task) {
      console.log(task, "task");
      // if (!this.task) return;
      // if (this.editedTask === null) {
      //   state.tasks.push({
      //     name: this.task,
      //     status: "Todo",
      //     dates: new Date().toLocaleString(),
      //   });
      //   state.task = "";
      // } else {
      //   state.tasks[state.editedTask].name = state.task;
      //   state.editedTask = null;
      //   state.task = "";
      // }
    },
  },
  modules: {},
});
