<template>
    <v-list flat>

      <v-list-item 
        v-for="task in tasks"
        :key="tasks.id" 
        @click="doneTasks(tasks.id)"
        :class="{'blue lighten-4': task.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="tasks.done"
                color="primary">
              </v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ tasks.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
      </v-list-item>

    </v-list>
</template>

<script>
 // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    data() {
      return {
        tasks:[
          {
            id: 1,
            title:'Submit Assignment',
            done: false,
          },
          {
            id: 2,
            title:'Bake a cake',
            done: true,
          },
          {
            id: 3,
            title:'Go for walk',
            done: false,
          },
        ]
      }
    },

    methods: {
      doneTasks(id){
        let task = this.tasks.filter(task => tasks.id === id)[0]
        task.done = !task.done
      }
    }
  }
</script>