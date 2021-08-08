<template>
  <v-card tile>
    <v-app-bar color="primary" dark>
      <v-row align="center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Smash UK</v-toolbar-title>

        <v-btn text v-if="$route.params.regionCode" @click="showRegionSelect = !showRegionSelect" :class="{active: showRegionSelect}" :ripple="false">
          {{currentRegion}} 
          <v-icon right>
            mdi-menu-down
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
    <v-expand-transition>
      <v-card v-show="showRegionSelect" color="primary">
        <region-select></region-select>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import RegionSelect from './RegionSelect.vue'
export default {
  name: 'app-bar',
  components: {RegionSelect},
  data() { return {
    currentRegion: undefined,
    showRegionSelect: false
  }},
  watch: {
    $route(val) {
      this.currentRegion = this.invertedRegionMap[val.params.regionCode]
      this.showRegionSelect = false;
    },
    invertedRegionMap() {
      this.currentRegion = this.invertedRegionMap[this.$route.params.regionCode]
    }
  },
  computed: {
    ...mapState(["invertedRegionMap", "regionMap"])
  }
}
</script>

<style scoped>
  .v-btn.active .v-icon {
    transform: rotate(-180deg);
  }
</style>
