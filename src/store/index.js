import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Tasks: [],
    // Tasks:[
    //   {id:0,
    //   title:'',
    //   checked: false}
    // ]
    doneList: [],
    DelTasks:[]
  },
  getters: {
    // getter_Tasks: (state) => state, //state.Tasks
    // getter_doneTasks: (state) => state.doneList,
  },
  mutations: {
    commit_addTask(state, data){
      state.Tasks.push(data);//state.Tasks.
    },
    commit_deleteTask(state, id) {
      state.DelTasks.push(state.Tasks[id]);
      state.Tasks.splice(id,1);
    },
    commit_doneTask(state, id){
      state.doneList.push(state.Tasks[id]);
      state.Tasks.splice(id,1);
      //state.Tasks.checked = !state.Tasks.checked;
    },
    commit_restore(state, id){
      state.Tasks.push(state.DelTasks[id]);
      state.DelTasks.splice(id,1);
    }
  },
  actions: {
    action_addTask({commit}, data) {
      commit('commit_addTask', data);
      return;
    },
    action_deleteTask({commit}, id) {
      commit('commit_deleteTask', id);
      return;
    },
    action_doneTask({commit}, id){
      commit('commit_doneTask',id);
      return;
    },
    action_restore({commit}, id){
      commit('commit_restore', id);
      return;
    }
  },
  modules: {
  }
})
