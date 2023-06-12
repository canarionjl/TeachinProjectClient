<template>
    <div v-if="page == 0">
        <WatchProfessorSubjects/>
    </div>
</template>

<script lang="ts" setup>

import WatchProfessorSubjects from "@/components/admin/professor/WatchProfessorSubjects.vue"

import { useRoute } from "vue-router";
import { ref, Ref, onMounted } from 'vue'

let page: Ref = ref(null)

onMounted( () => {
    const route = useRoute()
    page.value = route.params.dataType
})


</script>

<style lang="scss" scoped></style>