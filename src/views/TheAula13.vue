<template>
    <!-- Componentes slot -->
    
    <hr>
    <h1>Aula 13</h1>

    <TheHeaderAula13>
        <template v-slot:titulo>
            Home
        </template>

        <template v-slot:descricao>
            <p>Texto</p>
        </template>
    </TheHeaderAula13>
</template>

<script>
import TheHeaderAula13 from '@/components/layout/TheHeaderAula13.vue'

export default {
    data() {
        return {
            mounted() {
                console.log(this.$slots);

            }
        }
    },

    components: {
        TheHeaderAula13
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