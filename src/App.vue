<template>
  <v-app>
    <app-bar></app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AppBar
  },
  mounted: function() {
    this.getRegionMap()
  },
  methods: {
    ...mapActions(["getRegionMap"])
  }
}
</script>
