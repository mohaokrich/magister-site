<script setup>
import Layaout from '../components/Layaout.vue';
import { collection, getDocs } from 'firebase/firestore'
import {modalities, dates} from '../utils/firebase-data'

// const dates = [
//     {
//         id: 1,
//         value: '1 Clase al mes Practicos y Programacion sabados por la mañana. Grupo de 1 de 10 a 14 horas'
//     },
//     {
//         id: 2,
//         value: '1 Clase al mes Practicos y Programacion sabados por la mañana. Grupo de 1 de 10 a 24 horas'
//     },
//     {
//         id: 3,
//         value: '1 Clase al mes Practicos y Programacion sabados por la mañana. Grupo de 1 de 10 a 18 horas'
//     },
// ]
// const modalities = [
//     {
//         id: 1,
//         value: 'Presencial 2020/2021'
//     },
//     {
//         id: 2,
//         value: 'Semipresencial 2020/2021'
//     },
//     {
//         id: 3,
//         value: 'Videoconferencia en directo'
//     },
//     {
//         id: 4,
//         value: 'Adaptacion a la lombse'
//     },
// ]
</script>
<!-- <script>
export default {
    mounted() {
        this.getDates();
        this.getModalities();
    },
    data() {
        return {
            dates: [],
            modalities: [],

        }
    },
    methods: {
        async getDates() {
            const querySnapshot = await getDocs(collection(db, "horarios"))
            querySnapshot.forEach((doc) => {
                const date = {
                    id: doc.id,
                    titulo: doc.data().titulo
                }
                this.dates.push(date);
            });
        },
        async getModalities() {
            const querySnapshot = await getDocs(collection(db, "modalidades"))
            querySnapshot.forEach((doc) => {
                const modality = {
                    id: doc.id,
                    titulo: doc.data().nombre
                }
                this.modalities.push(modality);
            });
        },
    },

}
</script> -->

<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold flex flex-col"><span>Elige el horario y modadalidad</span>que
                mas te acomode</h1>
        </header>
        <section class="w-full flex flex-col justify-center space-y-28">
            <article>
                <div>
                    <h3 class="text-xl font-extrabold">Modalidad</h3>
                    <h4 class="text-xl font-extralight">(Selecciona una opción)</h4>
                </div>
                <div>
                    <ul class="grid gap-4 md:grid-cols-2">
                        <li v-for="modality in modalities" :key="modality.id" class="mr-8 space-y-6">
                            <input type="radio" :id="modality.titulo" name="modalities" :value="modality.titulo"
                                class="hidden peer" required>
                            <label :for="modality.titulo"
                                class="inline-flex justify-between items-center p-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="text-lg font-semibold">{{ modality.titulo }}</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </article>
            <article>
                <div>
                    <h3 class="text-xl font-extrabold">Horario</h3>
                    <h4 class="text-xl font-extralight">(Selecciona una opción)</h4>
                </div>
                <div>
                    <ul class="grid gap-4 grid-cols-1">
                        <li v-for="date in dates" :key="date.id" class="mr-8 space-y-6">
                            <input type="radio" :id="date.titulo" name="dates" :value="date.titulo" class="hidden peer"
                                required>
                            <label :for="date.titulo"
                                class="inline-flex justify-between items-center p-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="text-lg font-semibold">{{ date.titulo }}</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    </Layaout>
</template>