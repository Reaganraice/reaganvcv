<template>
    <v-footer dark
            height="auto">
        <v-card class="flex">
            <v-card-actions class="justify-center" :class="color">
                &copy; 2020 — <strong class="pl-1">Reagan Matunga Raice</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        props: ['color'],
        name: "Footer"
    }
</script>

<style scoped>

</style>
