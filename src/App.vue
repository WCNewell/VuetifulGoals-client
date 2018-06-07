<template>
  <div id="app">
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>

        <v-list-tile :to="{ name: 'Goals' }">
          <v-list-tile-action>
            <v-icon x-large color='orange'>control_point</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Goals
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'AddDaily' }">
          <v-list-tile-action>
            <v-icon x-large color='yellow'>tag_faces</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Add Daily Goal
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-tile :to="{ name: 'AddWeekly' }">
          <v-list-tile-action>
            <v-icon x-large color='blue'>flash_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Add Weekly Goal
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="orange" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vuetiful Goals</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
            <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        drawer: false,
      }
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
