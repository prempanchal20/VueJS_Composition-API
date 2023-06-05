<template>
    <section class="cars-data">
        <ul class="menu">
            <li><button @click="addCarBtn">Add Car</button></li>
        </ul>
        <GalleryCard @editData="editData" />

        <CarForm v-if="openEditCarModel" :openEditCarModel="openEditCarModel" :openAddCarModel="openAddCarModel"
            :editCar="editCar" @onCancel="onCancel" />
    </section>
</template>

<!-- Options API -->
<!-- <script>
import CarForm from "../components/CarForm.vue";
import GalleryCard from "../components/GalleryCard.vue";
import { useCarStore } from "../stores/carStore";
import { mapActions, mapWritableState } from "pinia";

export default {
    name: "Home",

    components:
        GalleryCard,
    CarForm,
},

data() {
    return {
        data: "",
    };
},

computed: {
        ...mapWritableState(useCarStore, ['openEditCarModel', 'openAddCarModel']),
    },

created() {
    this.carsData()
},

methods: {
        ...mapActions(useCarStore, ['carsData']),

        editData(data) {
        this.editCar = data;
        this.openEditCarModel = true;
        this.openAddCarModel = false;
    },

    addCarBtn() {
        this.openEditCarModel = true;
        this.openAddCarModel = true;
        this.editCar = {}
    },

    onCancel() {
        this.openAddCarModel = false;
        this.openEditCarModel = false;
    },
},
};
</script> -->

<!-- Composition API -->
<script setup>
import { reactive } from "vue";
import CarForm from "../components/CarForm.vue";
import GalleryCard from "../components/GalleryCard.vue";
import { storeToRefs } from "pinia";
import { useCarStore } from "../stores/carStore";

const carStore = useCarStore();
const { openAddCarModel, openEditCarModel } = storeToRefs(carStore);
const editCar = reactive({});
const data = "";

const editData = (data) => {
    editCar = data;
    openEditCarModel = true;
    openAddCarModel = false;
};

const addCarBtn = () => {
    openEditCarModel = true;
    openAddCarModel = true;
    editCar.value = {};
};

const onCancel = () => {
    openAddCarModel.value = false;
    openEditCarModel.value = false;
};
</script>
