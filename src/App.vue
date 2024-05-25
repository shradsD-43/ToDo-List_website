<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vue Project </v-list-item-title>
          <v-list-item-subtitle>Best to-dos</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" 
        :key="item.title" 
        :to="item.to" 
        link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My TO-DO LIST</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default { 
  data: () => ({ 
    drawer: null,
    items: [
          { title: 'To-do List', icon: 'mdi-list-box', to:'/' },
          { title: 'Recycle Bin', icon: 'mdi-history', to:'/about' },
          { title: 'Completed Tasks', icon: 'mdi-check-circle', to:'/completed' },
          { title: 'Customer Users', icon: 'mdi-check-circle', to:'/temp' }
        ], 
    }) 
  };
</script>
