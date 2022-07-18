<script setup>
import Layaout from '../components/Layaout.vue';

const pagos = [
    {
        id: 1,
        titulo: 'Tarjeta de crédito/débito (recomendado)'
    },
    {
        id: 2,
        titulo: 'Transferencia bancaria'
    }
]
</script>
<script>
export default {
    computed: {
        tarjeta: {
            get() {
                return this.$store.state.tarjeta
            },
            set(value) {
                this.$store.commit('setTarjeta', value)
            }
        },
        recomendado: {
            get() {
                return this.$store.state.recomendado
            },
            set(value) {
                this.$store.commit('setRecomendado', value)
            }
        }
    }
};

</script>
<template>
    <Layaout>
        <header class="mb-28 text-center w-full">
            <h1 class="text-2xl sm:text-4xl font-extrabold flex flex-col">Forma de pago</h1>
        </header>
        <section class="w-full flex flex-col justify-center space-y-28 text-xl">
            <article>
                <h1>¿Como prefieres abonar tu primer pago?</h1>
                <ul class="grid gap-20 md:grid-cols-2 mb-5">
                    <li v-for="pago in pagos" :key="pago.id" class="space-y-6">
                        <input v-model="tarjeta" type="radio" :id="pago.titulo" name="payment" :value="pago.titulo" class="hidden peer"
                            required>
                        <label :for="pago.titulo"
                            class="inline-flex justify-between items-center p-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="text-lg font-light">{{ pago.titulo }}</div>
                            </div>
                        </label>
                    </li>
                </ul>
                <a class="text-xl text-[#0BC6FE] font-semibold" href="#">Detalles sobre forma de pago y proceso post
                    pago ></a>
            </article>
            <article>
                <h1>¿Vienes recomendado por alguien?</h1>
                <ul class="grid gap-10 w-2/6 md:grid-cols-2 mb-5">
                    <li class="space-y-6">
                        <input v-model="recomendado" type="radio" id="si" name="options" value="si" class="hidden peer" required>
                        <label for="si"
                            class="inline-flex justify-center items-center py-3 px-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="text-lg font-light">Sí</div>
                            </div>
                        </label>
                    </li>
                    <li class="space-y-6">
                        <input v-model="recomendado" type="radio" id="no" name="options" value="no" class="hidden peer" required>
                        <label for="no"
                            class="inline-flex justify-center items-center py-3 px-5 sm:px-8 w-full text-gray-500 bg-white rounded-lg border border-blue-900 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#0A3868] peer-checked:bg-[#0A3868]  peer-checked:text-white  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="text-lg font-light">No</div>
                            </div>
                        </label>
                    </li>
                </ul>
                <a class="text-xl text-[#0BC6FE] font-semibold" href="#">Ver información legal ></a>
                <h2></h2>
            </article>
        </section>
    </Layaout>
</template>