<script setup>
import Layaout from '../components/Layaout.vue';

</script>
<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold flex flex-col">Tus datos personales</h1>
        </header>
        <section class="w-full flex flex-col justify-center space-y-28 text-xl">
            <div class="grid grid-cols-1">
                <label class="font-extrabold" for="nombre">Nombre Completo</label>
                <input class="border p-3 rounded-lg mt-5" type="text" name="nombre" id="nombre" placeholder="Ej: Camila Perez Sánchez">
            </div>
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-14">
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="dni">DNI-NIE</label>
                    <input class="border p-3 rounded-lg mt-5" type="text" name="dni" id="dni" placeholder="Y7056119B">
                </span>
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="movil">Móvil</label>
                    <input class="border p-3 rounded-lg mt-5" type="number" name="movil" id="movil" placeholder="Ej: 654678930">
                </span>
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="email">Email</label>
                    <input class="border p-3 rounded-lg mt-5" type="text" name="email" id="email" placeholder="camila.magister@gmail.com">
                </span>
            </div>
        </section>
    </Layaout>
</template>     