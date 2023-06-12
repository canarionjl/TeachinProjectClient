<template>
    <div v-if="isLoading" id="loading">

        <h3>Cargando...</h3>

    </div>

    <div v-if="!isLoading">

        <div v-if="!error">

            <div class="d-flex flex-row justify-content-between align-items-center px-5 py-2">

                <h4>{{nameRef}}</h4>
                <button class="btn btn-primary">Ver propuesta</button>
            </div>

            <hr class="hr">

        </div>

    </div>

</template>

<script lang="ts" setup>

import { defineProps, Ref, ref, onBeforeMount } from 'vue';

const nameRef: Ref = ref(null)
const idRef: Ref = ref(null)

const isLoading: Ref = ref(true)
const errorMessage: Ref = ref("")
const error: Ref = ref(false)

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

onBeforeMount( () => {

    try {
        const id = Number(props.id).valueOf()
        idRef.value = id
        const name = String(props.name).valueOf()
        nameRef.value = name

        isLoading.value = false;
    } catch {
        errorMessage.value = "No se ha podido recuperar la información de la asignatura"
        isLoading.value = false;
        error.value = true;
    }

})

</script>

<style lang="scss">
.btn-primary {
    background-color: $primary !important;
    border: $primary !important;
}

#loading {
    h3 {
        color: $complementary;
    }

    text-align:center;
}
</style>