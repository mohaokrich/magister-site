<script setup>

import { RouterLink } from 'vue-router'
import router from '../router'
import NavItem from '../components/NavItem.vue'


</script>
<script>
export default {
    methods:{
        prevPage(){
            this.$router.push({ name: this.$router.currentRoute.value.meta.prev})
        },
        nextPage(){
            this.$router.push({ name: this.$router.currentRoute.value.meta.next })
        }
    }
};

</script> 

<template>
    <div class="layout-container">
        <aside class="layout-aside">
            <header class="mt-5">
                <img src="../../public/img/magister-logo-extramini.png" alt="magister-logo">
            </header>
            <nav class="font-bold px-5 md:text-xl mt-12 mb-5">
                <div class="vert-line">

                </div>
                <ul>
                    <NavItem :active="$route.name === 'Especialidad'"><span class="text-7xl">•</span>¿En qué te quieres
                        especializar?</NavItem>
                    <NavItem :active="$route.name === 'Horario'"><span class="text-7xl">•</span>Horario y Modalidad
                    </NavItem>
                    <NavItem :active="$route.name === 'Tarifa'"><span class="text-7xl">•</span>Tarifa</NavItem>
                    <NavItem :active="$route.name === 'Datos'"><span class="text-7xl">•</span>Datos personales</NavItem>
                    <NavItem :active="$route.name === 'Direccion'"><span class="text-7xl">•</span>Dirección</NavItem>
                    <NavItem :active="$route.name === 'Pago'"><span class="text-7xl">•</span>Forma de pago</NavItem>
                </ul>
            </nav>
            <footer>
                <img v-if="$route.name === 'Especialidad'" src="../../public/img/layout/lady-pc.png"
                    alt="lady-pc-image">
                <img v-if="$route.name === 'Horario'" src="../../public/img/layout/calendar-people.png"
                    alt="calendar-people-image">
                <img v-if="$route.name === 'Tarifa'" src="../../public/img/layout/man-grafic.png"
                    alt="man-grafic-image">
                <img v-if="$route.name === 'Datos'" src="../../public/img/layout/woman-thinking.png"
                    alt="woman-thinking-image">
                <img v-if="$route.name === 'Direccion'" src="../../public/img/layout/man-walking.png"
                    alt="man-walking-image">
                <img v-if="$route.name === 'Pago'" src="../../public/img/layout/payment.png" alt="payment-image">
            </footer>
        </aside>
        <section class="layout-section">
            <nav class="flex justify-end md:pr-16 pr-2">
                <a href="#">
                    <img src="../../public/img/menu-icon-gray.svg" alt="menu-icon" class="h-10 w-10 md:h-16 md:w-16" />
                </a>
            </nav>
            <main>
                <slot />
            </main>
            <footer>
                <button
                    class="route-button border border-transparent mb-5 text-xl py-2 px-8 sm:px-12 md:px-16 rounded-lg font-bold shadow-xl" @click="nextPage()">
                    Siguiente</button>
                <button class="text-center text-xl font-bold" @click="prevPage()">Volver atrás
                </button>
            </footer>
        </section>
    </div>
</template>