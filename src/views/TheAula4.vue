<template>
    <!-- Imagem com src dinâmico e estilo inline -->

    <hr>
    <h1>Aula 4</h1>
    <img :src="iconSrc" :alt="iconAlt" style="width: 50px; height: 50px;">
</template>

<script>
export default {
    data() {
        return {
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
            iconAlt: 'Icon Vue'
        }
    }
}
</script>
