<script setup>
import Layaout from '../components/Layaout.vue';
import { communities, provinces } from '../utils/firebase-data'
</script>
<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold flex flex-col">Tu dirección</h1>
        </header>
        <section class="w-full flex flex-col justify-center space-y-28 text-xl">
            <div>
                <h3 class="font-extrabold">Comunidad del examen</h3>
                <h4 class="font-extralight">(Selecciona una opción)</h4>
                <select name="ramas" id="" class="border p-4 w-full rounded-lg border-gray-400 mt-5">
                    <option v-for="communitie in communities" :key="communitie.id" :value="communitie.titulo">{{
                            communitie.titulo
                    }}</option>
                </select>
            </div>
            <div class="grid grid-cols-1">
                <label class="font-extrabold" for="nombre">Dirección</label>
                <input class="border p-3 rounded-lg mt-5" type="text" name="nombre" id="nombre"
                    placeholder="Ej: Glorieta Cuatro Caminos, 6, 8">
            </div>
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-14">
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="localidad">Localidad</label>
                    <input class="border p-3 rounded-lg mt-5" type="text" name="localidad" id="localidad"
                        placeholder="Ej: Madrid">
                </span>
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="provincia">Provincia</label>
                    <input class="border p-3 rounded-lg mt-5" type="text" name="provincia" id="provincia"
                        placeholder="Ej: Madrid">
                </span>
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="cp">Código Postal</label>
                    <input class="border p-3 rounded-lg mt-5" type="number" min="6" max="6" name="cp" id="cp"
                        placeholder="Ej: 28020">
                </span>
            </div>
            <div class="grid lg:grid-cols-2 gap-24 text-center">
                <span>
                    <input class="mr-5 h-5 w-5" type="checkbox" name="legaly" id="legaly">
                    <label class="font-extrabold" for="legaly">Acepto la <a href="#" class="text-[#0BC6FE]">información legal</a></label>
                </span>
                <span>
                    <input class="mr-5 h-5 w-5" type="checkbox" name="data" id="data">
                    <label class="font-extrabold" for="data">Acepto la <a href="#" class="text-[#0BC6FE]">protección de datos</a></label>
                </span>
            </div>
        </section>
    </Layaout>
</template>