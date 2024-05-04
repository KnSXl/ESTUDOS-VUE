<template>
    <!-- Introdução ao Vue Router parte 1 e parte 2-->
    <!-- modo de instalar: vue add router -->
    <hr>
    <h1>Aula 17 e 18</h1>
    
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/servicos">Serviços</router-link> |
        <router-link to="/usuarios/10">Usuários</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
</template>

<script>
export default {
    data() {
        return {
            // Dados vazios
        }
    },

    components: {
        // Componentes
    },

    methods: {
        // Métodos vazios
    },

    watch: {
        // Watchers vazios
    },

    computed: {
        // Computeds vazios
    },

}
</script>

<style scoped></style>