<template>
    <!-- Scoped e global CSS -->
    
    <hr>
    <h1>Aula 14 - Scoped e global CSS</h1>

    <!-- Elemento div com classe 'card' -->
    <div class="card">
        <p>Texto</p>
    </div>
    
    <!-- Componente TheCard -->
    <TheCard />
</template>

<script>
import TheCard from "@/components/layout/TheCard.vue";
export default {
    // Dados
    data() {
        return {
            // Dados vazios
        }
    },

    // Componentes utilizados no componente
    components: {
        TheCard,
    },

    // Métodos
    methods: {
        // Métodos vazios
    },

    // Observadores (watchers)
    watch: {
        // Watchers vazios
    },

    // Propriedades computadas
    computed: {
        // Computeds vazios
    },

}
</script>

<!-- CSS Scoped -->
<style scoped></style>