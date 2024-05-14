<template>
    <!-- Enviando dados para o componente filho (props) -->
    
    <hr>
    <h1>Aula 15 - Enviando dados para o componente filho (props)</h1>

    <!-- Utilização do componente BaseAlertAula15 com propriedades -->
    <div>
        <BaseAlertAula15
            :variant="variant"
        >
        <!-- Propriedade 'variant' -->
            {{ text }} <!-- Texto interno do componente -->
        </BaseAlertAula15>
    </div>
</template>

<script>
import BaseAlertAula15 from '@/components/common/BaseAlertAula15.vue';

export default {
    // Dados
    data() {
        return {
            variant: 'success', // Valor da propriedade 'variant'
            text: 'Seu formulário foi enviado' // Texto a ser exibido no componente
        }
    },

    // Componentes utilizados no componente
    components: {
        BaseAlertAula15
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