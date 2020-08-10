import { v4 as uuid } from "uuid";
import _ from "lodash";
export default {
  namespaced: true,
  state: {
    tasks: [
      {
        id: "1234567890",
        title: "First Task",
        complete: false,
        completedBy: ""
      }
    ]
  },
  mutations: {
    addTask(state, task) {
      let id = uuid();
      task = {
        title: task,
        complete: false,
        id,
        completedBy: ""
      };
      state.tasks.push(task);
    },
    setTaskStatus(state, payload) {
      let updatedTasks = _.map(state.tasks, task => {
        if (task.id === payload.id) {
          task.complete = payload.status;
          fetch(
            `https://swapi.dev/api/people/${parseInt(Math.random() * 11 + 1)}`
          )
            .then(response => response.json())
            .then(data => (task.completedBy = data.name));
        }
        return task;
      });
      state.tasks = updatedTasks;
    },
    deleteTask(state, id) {
      let updatedTasks = _.filter(state.tasks, task => {
        return task.id !== id;
      });
      state.tasks = updatedTasks;
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit("addTask", task);
    },
    setTaskStatus({ commit }, payload) {
      commit("setTaskStatus", payload);
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
    }
  }
};
