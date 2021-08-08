<template>
    <v-card class="my-5 mx-5">
        <v-card-title>Region Information</v-card-title>
        <region-select></region-select>
    </v-card>
</template>
<script>
import RegionSelect from '../components/RegionSelect.vue'
export default {
    components: { RegionSelect },
    name: "home"
}
</script>