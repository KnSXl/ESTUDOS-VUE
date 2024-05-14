<template>
    <!-- Enviando dados do filho para o pai (emit) -->
    
    <hr>
    <h1>Aula 16 - Enviando dados do filho para o pai (emit)</h1>

    <!-- Utilização do componente BaseAlertAula16 com propriedades e evento -->
    <div>
        <!-- Condicional para mostrar o componente -->
        <!-- Propriedade 'variant' -->
        <!-- Evento 'close' -->
        <BaseAlertAula16
            v-if="showAlert" 
            :variant="variant"
            @close="onClose()" 
        >
            {{ text }} <!-- Texto interno do componente -->
        </BaseAlertAula16>
    </div>
</template>

<script>
import BaseAlertAula16 from '@/components/common/BaseAlertAula16.vue';

export default {
    // Dados
    data() {
        return {
            showAlert: true, // Controla a exibição do alerta
            variant: 'success', // Valor da propriedade 'variant'
            text: 'Seu formulário foi enviado' // Texto a ser exibido no componente
        }
    },

    // Componentes utilizados no componente
    components: {
        BaseAlertAula16
    },

    // Métodos
    methods: {
        // Método chamado quando o evento 'close' é emitido pelo componente filho
        onClose() {
            this.showAlert = false; // Oculta o alerta
            console.log("onClose"); // Log indicando que o método foi chamado
        }
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