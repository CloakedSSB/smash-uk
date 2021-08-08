<template>
    <v-container>
        <v-row justify="space-around">
            <v-col v-for="region in Object.keys(regionMap)" :key="region" cols=1>
                <v-btn color="secondary" @click="$router.push({path: `/region/${regionMap[region]}`})">{{region}}</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: "region-select",
    computed: {
        ...mapState(["regionMap"])
    }
}
</script>