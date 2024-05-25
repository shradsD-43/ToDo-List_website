<template>
    <div class="about">
       
     <v-list flat>
   
     <v-list-item 
       v-for="(done,index) in donetasks" 
       :key="index"
       @click="restore(index)">
       
       <template v-slot:default>
   
         <v-list-item-content>
           <v-list-item-title>
           {{ done }}
           </v-list-item-title>
         </v-list-item-content>
   
         <v-list-item-action>
           <v-btn
           @click.stop="restore(index)"
           icon>
             <v-icon color="indigo lighten-2">mdi-delete-restore</v-icon>
           </v-btn>
         </v-list-item-action>
   
       </template>
       
     </v-list-item>
     </v-list>
   
    </div>
   </template>
   
   <script>
   
   export default{
     name: 'completed',
   
     computed: {
         donetasks() {
         return this.$store.state.doneList;
         }
     },
   
     methods:{
        restore(id){
         this.$store.dispatch("action_restore", id);
        }
     }
   
   }
   </script>