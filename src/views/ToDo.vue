<template>
  <div>
    <v-text-field
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus-box"
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      clearable>
    </v-text-field>

    <v-list flat>

      <v-list-item 
        v-for="(work,index) in tasks" 
        :key="index"
        @click="doneTask(index)">
        <!-- :class="{'blue lighten-4': task.doneList}"
        > -->
          <template v-slot:default>

            <v-list-item-action>
              <v-checkbox
                :input-value="checked"
                @change="doneTask(index)"
                color="primary">
              </v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
              <!-- :class="{'text-decoration-line-through': task.doneList }"> -->
              {{ work }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
              @click.stop="deleteTask(index)"
              icon>
                <v-icon color="indigo lighten-2">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

          </template>
      </v-list-item>

    </v-list>

    
  </div>
</template>

<script>
 // import HelloWorld from '../components/HelloWorld'
import { mapActions, mapGetters } from 'vuex';
  
export default {
    name: 'Home',
    data() {
      return {
        newTaskTitle:'',
        //checked: false,
      }
    },
    computed: {
      // ...mapGetters(['getter_']),
      tasks() {
      return this.$store.state.Tasks;
      },
      // donetasks() {
      // return this.$store.state.doneList;
      // },
      // deltasks() {
      // return this.$store.state.delTasks;
      // }
    },
    methods: {
      // ...mapActions(['action_addTask','action_deleteTask','action_doneTask']),

      addTask(){
        this.$store.dispatch('action_addTask', this.newTaskTitle)
        .then(()=>{
          this.newTaskTitle = '';
        })
      },
      doneTask(id){
        this.$store.dispatch('action_doneTask',id)
      },
      // handleCheckbox(){
      //   if (this.checked) {
      //     this.$store.dispatch('action_doneTask',id);
      //   } 
      // },
      deleteTask(id){
        this.$store.dispatch("action_deleteTask", id)
      }
    }
  }
</script>
