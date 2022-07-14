<script setup>
import { RouterLink } from 'vue-router'


</script>
<template>
    <main class="main-splash p-2 sm:p-5 md:p-0">
        <nav class="nav-splash justify-self-end md:pr-16 pr-2">
            <a href="#">
                <img src="../../public/img/menu-icon.svg" alt="menu-icon" class="h-10 w-10 md:h-16 md:w-16" />
            </a>
        </nav>
        <header class="header-splash">
            <img src="../../public/img/magister-logo-mini.png" alt="magister-logo">
        </header>
        <section class="body-splash text-blue">
            <h1 class="font-extrabold text-3xl sm:text-5xl md:text-7xl text-center">¡Comencemos con tu matrícula!</h1>
            <h2 class="text-center mt-20 text-xl sm:text-2xl md:text-3xl flex flex-col"><span>Para comenzar a</span><span>especializarte, vamos a</span><span>realizarte unas preguntas
                    para</span> <span>darte el mejor servicio.</span></h2>
        </section>
        <footer class="footer-splash mb-28 mt-28 flex flex-col">
            <RouterLink to="/home" class="route-button border border-transparent mb-5 text-xl py-2 px-8 sm:px-12 md:px-16 rounded-lg font-bold shadow-xl">Comenzar</RouterLink>
            <a class="text-center text-xl font-bold" href="#">Volver atrás</a>
        </footer>
    </main>
</template>