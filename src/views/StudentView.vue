<script setup>
import Layaout from '../components/Layaout.vue';

</script>
<script>
export default {
    computed: {
        nombre: {
            get() {
                return this.$store.state.nombre
            },
            set(value) {
                this.$store.commit('setNombre', value)
            }
        },
        dni: {
            get() {
                return this.$store.state.dni
            },
            set(value) {
                this.$store.commit('setDni', value)
            }
        },
        movil: {
            get() {
                return this.$store.state.movil
            },
            set(value) {
                this.$store.commit('setMovil', value)
            }
        }, 
        email: {
            get() {
                return this.$store.state.email
            },
            set(value) {
                this.$store.commit('setEmail', value)
            }
        }
    }
};

</script> 
<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold flex flex-col">Tus datos personales</h1>
        </header>
        <section class="w-full flex flex-col justify-center space-y-28 text-xl">
            <div class="grid grid-cols-1">
                <label class="font-extrabold" for="nombre">Nombre Completo</label>
                <input v-model="nombre" class="border p-3 rounded-lg mt-5" type="text" name="nombre" id="nombre"
                    placeholder="Ej: Camila Perez Sánchez">
            </div>
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-14">
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="dni">DNI-NIE</label>
                    <input v-model="dni" class="border p-3 rounded-lg mt-5" type="text" name="dni" id="dni" placeholder="Y7056119B">
                </span>
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="movil">Móvil</label>
                    <input v-model="movil" class="border p-3 rounded-lg mt-5" type="number" name="movil" id="movil"
                        placeholder="Ej: 654678930">
                </span>
                <span class="grid grid-cols-1">
                    <label class="font-extrabold" for="email">Email</label>
                    <input v-model="email" class="border p-3 rounded-lg mt-5" type="text" name="email" id="email"
                        placeholder="camila.magister@gmail.com">
                </span>
            </div>
        </section>
    </Layaout>
</template>     