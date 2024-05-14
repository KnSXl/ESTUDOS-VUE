<template>
    <!-- Componentes slot -->
    
    <hr>
    <h1>Aula 13 - Componentes slot</h1>

    <!-- Utilização do componente TheHeaderAula13 com slots -->
    <TheHeaderAula13>
        <!-- Slot 'titulo' para o título -->
        <template v-slot:titulo>
            Home
        </template>

        <!-- Slot 'descricao' para a descrição -->
        <template v-slot:descricao>
            <p>Texto</p>
        </template>
    </TheHeaderAula13>
</template>

<script>
import TheHeaderAula13 from '@/components/layout/TheHeaderAula13.vue'

export default {
    // Dados
    data() {
        return {
            // Método 'mounted' que será executado após a montagem do componente
            mounted() {
                console.log(this.$slots); // Exibe informações sobre os slots disponíveis
            }
        }
    },

    // Componentes utilizados no componente
    components: {
        TheHeaderAula13
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

<style scoped></style>