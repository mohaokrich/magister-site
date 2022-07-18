<script setup>

import { RouterLink } from 'vue-router'
import router from '../router'
import NavItem from '../components/NavItem.vue'
import { collection, addDoc } from '@firebase/firestore';
import { db } from '../utils/firebase-config'

</script>
<script>
export default {
    methods: {
        prevPage() {
            this.$router.push({ name: this.$router.currentRoute.value.meta.prev })
        },
        nextPage() {
            if (this.$route.name == 'Pago') {
                this.post();
                this.$router.push({ name: this.$router.currentRoute.value.meta.next })
            } else {
                this.$router.push({ name: this.$router.currentRoute.value.meta.next })
            }
        },
        async post() {
             var currentdate = new Date(); 
             var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

             addDoc(collection(db, "matricula"), {
                especializacion: {
                    rama: this.$store.state.rama,
                    provincia: this.$store.state.provincia,
                    es_alumno: this.$store.state.provincia
                },
                modalidad: this.$store.state.modalidad,
                horario: this.$store.state.horario,
                tarifa: this.$store.state.tarifa,
                datos_personales: {
                    nombre: this.$store.state.nombre,
                    dni: this.$store.state.dni,
                    movil: this.$store.state.movil,
                    email: this.$store.state.email,
                },
                direccion:{
                    comunidad: this.$store.state.comunidad,
                    via: this.$store.state.direccion,
                    localidad: this.$store.state.localidad,
                    provincia: this.$store.state.provincia,
                    cp: this.$store.state.cp
                },
                pago:{
                    forma: this.$store.state.tarjeta,
                    recomendado: this.$store.state.recomendado
                },
                fecha:datetime
            });
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
            <main class="p-10">
                <form action="">
                    <slot />
                </form>
            </main>
            <footer class="mb-20">
                <button
                    class="route-button border border-transparent mb-5 text-xl py-2 px-8 sm:px-12 md:px-16 rounded-lg font-bold shadow-xl"
                    @click="nextPage()">
                    Siguiente</button>
                <button class="text-center text-xl font-bold" @click="prevPage()">Volver atrás
                </button>
            </footer>
        </section>
    </div>
</template>