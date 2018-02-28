import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    name: "张三",
    age: 20,
    todos: [
      {
        id: 1,
        text: "哈哈",
        done: true
      },
      {
        id: 2,
        text: "嘿嘿",
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      let a = state.todos.filter(todo => todo.done);
      console.log(a);
      return a;
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    }
  },
  mutiations: {
    increment(state, payload) {
      state.count += payload.amount;
      console.log(state.count);
    }
  }
});
