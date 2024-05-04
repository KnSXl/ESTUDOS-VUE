<template>
    <!-- Scoped e global CSS -->
    
    <hr>
    <h1>Aula 14</h1>

    <div class="card">
        <p>Texto</p>
    </div>
    <TheCard />
</template>

<script>
import TheCard from "@/components/layout/TheCard.vue";
export default {
    data() {
        return {
            // Dados vazios
        }
    },

    components: {
        TheCard,
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