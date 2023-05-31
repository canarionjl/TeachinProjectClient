<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light main-navbar">

      <div class="container-fluid p-2">

        <div class="d-flex flex-row justify-content-lg-start flex-wrap">

          <a href="/">
            <img src="@/assets/logo.png" id="logo" alt="Logo de la Universidad de Las Palmas de Gran Canaria">
          </a>

        </div>

        <div class="d-flex flex-row justify-content-lg-end flex-wrap pe-4">

          <button type="button" id="registerButton" class="btn btn-primary px-3 py-2 me-4">

            <i class="bi bi-person-add pe-2"> </i> Registrarse

          </button>

          <button type="button" id="loginButton" class="btn btn-primary px-3 py-2 me-4">

            <i class="bi bi-person-fill pe-2"> </i> Iniciar sesión

          </button>

          <wallet-multi-button> </wallet-multi-button>

        </div>

      </div>

    </nav>

  </div>

  <div class="container-fluid">

    <div id="title" class="d-flex flex-column justify-content-center">

      <h1>¡Bienvenido al sistema de proyectos docentes interactivos de la Universidad de Las Palmas de Gran Canaria!</h1>

    </div>

  </div>


  <div class="container-fluid">

    <div class="d-flex flex-column align-items-center justify-content-center">

      <div class="container-fluid">

        <div class="d-flex flex-row justify-content-lg-around flex-wrap">

          <div>
            <div class="d-flex flex-row justify-content-start align-items-center">
              <i>
                <h5 class="m-3 selectHint"> Facultad: </h5>
              </i>
              <select class="form-select m-2" v-model="selectedFacultyId" @change="onFacultyChanged">
                <option disabled selected class="defaultOption" value="0">Seleccionar Facultad</option>
                <option v-for="faculty in faculty_list" :value="faculty.id" :key=faculty.id> {{ faculty.name }} </option>
              </select>
            </div>
          </div>

          <div>
            <div class="d-flex flex-row justify-content-start align-items-center">
              <i>
                <h5 class="m-3 selectHint"> Grado: </h5>
              </i>
              <select class="form-select m-2" v-model="selectedDegreeId" @change="onDegreeChanged">
                <option disabled selected class="defaultOption" value="0">Seleccionar Grado</option>
                <option v-for="degree in degree_list" :value="degree.id" :key=degree.id> {{ degree.name }} </option>
              </select>
            </div>
          </div>

          <div>
            <div class="d-flex flex-row justify-content-start align-items-center">
              <i>
                <h5 class="m-3 selectHint"> Especialidad: </h5>
              </i>
              <select class="form-select m-2" v-model="selectedSpecialtyId" @change="onSpecialtyChanged">
                <option disabled selected class="defaultOption" value="0">Seleccionar Especialidad</option>
                <option v-for="specialty in specialty_list" :value="specialty.id" :key=specialty.id> {{ specialty.name }} </option>
              </select>
            </div>
          </div>

          <div>
            <div class="d-flex flex-row justify-content-start align-items-center">
              <i>
                <h5 class="m-3 selectHint"> Curso: </h5>
              </i>
              <select class="form-select m-2" v-model="selectedCourseId" @change="onCourseChanged">
                <option disabled selected class="defaultOption" value="0">Seleccionar Curso</option>
                <option v-for="course in course_list" :value="course" :key=course> {{ course }} </option>
              </select>
            </div>
          </div>
        </div>

      </div>

      <div>

        <button type="submit" class="btn btn-primary btn-lg m-5 p-3">Buscar asignaturas</button>

      </div>

    </div>

  </div>
</template>



<script lang="ts" setup>

import { WalletMultiButton } from "solana-wallets-vue";
import { useWorkspace } from "@/composables/useWallet"
import { onMounted, Ref, ref } from "vue";
import FacultyService from "@/services/FacultyService"
import DegreeService from "@/services/DegreeService"

const faculty_service = new FacultyService()
const degree_service = new DegreeService()

const { program } = useWorkspace()

const faculty_list: Ref = ref(null);
const degree_list: Ref = ref(null);
const specialty_list: Ref = ref(null);
const course_list: Ref = ref(null);

let selectedFacultyId: Ref = ref(0)
let selectedDegreeId: Ref = ref(0)
let selectedSpecialtyId: Ref = ref(0)
let selectedCourseId: Ref = ref(0)

onMounted(async () => {
  faculty_list.value = await faculty_service.getAllFaculties()
});

const onFacultyChanged = async () => {
  degree_list.value = await degree_service.getAllDegreesForFaculty (selectedFacultyId.value)
};

const onDegreeChanged = () => {
  console.log(selectedFacultyId.value)
};

const onSpecialtyChanged = () => {
  console.log(selectedFacultyId.value)
};

const onCourseChanged = () => {
  console.log(selectedFacultyId.value)
};

</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

#title {
  background-color: $primary;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 30px;

  h1 {
    font-size: xxx-large;
    color: $complementary;
    font-style: italic;
    padding: 15px;
  }

}

.defaultOption {
  display: none;
}

.selectHint {
  font-size: 16px;
  font-weight: bold;
}

#logo {
  height: 125px;
  width: auto;
  object-fit: contain;
  padding-inline: 5%;
}

#loginButton,
#registerButton {
  background-color: $complementary !important;
  border: $complementary !important;
  font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  font-size: 17px;
  font-weight: 600;
}




// Overriding Bootstrap classes

.btn-primary {
  background-color: $primary !important
}

.navbar {
  background-color: $primary !important;
  margin-bottom: 15px !important;
}

.navbar-brand {
  color: white !important;
}

// Overriding Phantom Button Style

.swv-button-trigger {
  background-color: $complementary !important;
}
</style>
