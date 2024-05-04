<template>
    <!-- Enviando dados do filho para o pai (emit) -->
    
    <hr>
    <h1>Aula 16</h1>

    <div>
        <BaseAlertAula16
            v-if="showAlert"
            :variant="variant"
            @close="onClose()"
        >
            {{ text }}
        </BaseAlertAula16>
    </div>
</template>

<script>
import BaseAlertAula16 from '@/components/common/BaseAlertAula16.vue';

export default {
    data() {
        return {
            showAlert: true,
            variant: 'success',
            text: 'Seu formulário foi enviado'
        }
    },

    components: {
        BaseAlertAula16
    },

    methods: {
        onClose() {
            this.showAlert = false
            console.log("onClose");
        }
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