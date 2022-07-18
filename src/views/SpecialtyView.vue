<script setup>
import Layaout from '../components/Layaout.vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import {ramas, provinces} from '../utils/firebase-data'


const options = [
    {
        id: 1,
        value: 'No'
    },
    {
        id: 2,
        value: 'Sí'
    },
    {
        id: 3,
        value: 'Sí, después de 2017'
    }
]


</script>
<script>
    export default {
        computed: {
            rama: {
                get() {
                    return this.$store.state.rama
                },
                set(value) {
                    this.$store.commit('setRama', value)
                }
            },
            provincia: {
                get() {
                    return this.$store.state.provincia
                },
                set(value) {
                    this.$store.commit('setProvincia', value)
                }
            },
            alumno: {
                get() {
                    return this.$store.state.alumno
                },
                set(value) {
                    this.$store.commit('setAlumno', value)
                }
            }
        }
    };
    
</script> 

<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold">¿En qué te quieres especializar?</h1>
        </header>
        <section class="space-y-28 w-full flex flex-col px-0 md:px-20 items-center md:items-start">
            <article class="flex flex-col w-full lg:flex-row lg:space-x-48">
                <div>
                    <h3 class="text-xl font-extrabold">Rama</h3>
                    <h4 class="text-xl font-extralight">(Selecciona una opción)</h4>
                    <select name="ramas" v-model="rama" id=""  class="border p-4 w-full rounded-lg border-gray-400 mt-5">
                          <option  v-for="rama in ramas" :key="rama.id" :value="rama.titulo">{{ rama.titulo }}</option>
                    </select>
                </div>
                <div class="pr-0">
                    <h3 class="text-xl font-extrabold">Provincia</h3>
                    <h4 class="text-xl font-extralight">(Selecciona una opción)</h4>
                    <select name="provincias" v-model="provincia" id="" class="border p-4 w-full rounded-lg border-gray-400 mt-5">
                          <option v-for="province in provinces" :key="province.id" :value="province.titulo">{{ province.titulo }}</option>
                    </select>
                </div>
            </article>
            <article class="antiguedad">
                    <h3 class="text-xl font-extrabold">¿Has sido alumn@ de Magister?</h3>
                    <a class="text-xl text-[#0BC6FE] font-semibold" href="#">Consulta condiciones ></a>
                    <ul class="flex md:grid-cols-3 lg:flex-row flex-col gap-4">
                        <li v-for= "option in options" :key = "option.id" class="space-y-6">
                            <input type="radio" v-model="alumno" :id="option.value" name="hosting" :value="option.value" class="hidden peer"
                                required>
                            <label :for="option.value"
                                class="inline-flex justify-between items-center p-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="text-lg font-semibold">{{ option.value }}</div>
                                </div>
                            </label>
                        </li>
                    </ul>
            </article>
            <article class="material flex flex-col">
                    <h3 class="text-xl font-extrabold">Entrega de material</h3>
                    <a class="text-xl text-[#0BC6FE] font-semibold" href="#">Consulta condiciones ></a>
                    <span class="text-[#0A3868] font-semibold py-2 px-8 sm:px-8 md:px-10 bg-[#A9D4EA] rounded-lg mt-5">Material mes a mes</span>
            </article>
        </section>
    </Layaout>
</template>