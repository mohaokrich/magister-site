<script setup>
import Layaout from '../components/Layaout.vue';
import { rates } from '../utils/firebase-data'

</script>


<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold flex flex-col">Selecciona tu tarifa</h1>
        </header>
        <section class="full-w flex flex-col justify-center space-y-28">
            <article>
                <div>
                    <h3 class="text-xl font-extrabold">Horario</h3>
                    <h4 class="text-xl font-extralight">(Selecciona una opción)</h4>
                </div>
                <div>
                    <ul class="grid gap-4 grid-cols-1">
                        <li v-for="rate in rates" :key="rate.id" class="mr-8 space-y-6">
                            <input type="radio" :id="rate.titulo" name="options" :value="rate.titulo" class="hidden peer"
                                required>
                            <label :for="rate.titulo"
                                class="inline-flex justify-between items-center p-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="text-lg font-semibold">{{ rate.titulo }}</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    </Layaout>
</template>