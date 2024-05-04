<template>
    <!-- Enviando dados para o componente filho (props) -->
    
    <hr>
    <h1>Aula 15</h1>

    <div>
        <BaseAlertAula15
            :variant="variant"
        >
        {{ text }}
        </BaseAlertAula15>
    </div>
</template>

<script>
import BaseAlertAula15 from '@/components/common/BaseAlertAula15.vue';

export default {
    data() {
        return {
            variant: 'success',
            text: 'Seu formulário foi enviado'
        }
    },

    components: {
        BaseAlertAula15
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