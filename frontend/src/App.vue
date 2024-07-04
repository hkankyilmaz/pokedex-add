<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import logo from './assets/pngegg.png'
import './index.css'












</script>

<template lang="pug">


header(class="bg-gray-800 text-white  flex justify-between items-center px-10")
    .logo
        img(:src="logo" alt="Vue logo" width="70" height="50")
    nav(class="flex space-x-5") 
        RouterLink(to="/") Home
        RouterLink(to="/contact") Login
main(class="text-red-400") Hakan
RouterView
footer This is the footer






</template>
