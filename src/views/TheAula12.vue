<template>
    <!-- Ciclo de vida (life cycle) -->
    
    <hr>
    <h1>Aula 12</h1>

    <TheHeader 
        v-if="showHeader"
    />

    <div>
        <h1>Hello World</h1>
        
        <br>

        <input
            v-model="nome"
            type="text"
        >

        <br>

        {{ nome }}
        
        <br>

        <button @click="showHeader = !showHeader">
            Ativar e desativar header
        </button>
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    data() {
        return {
            nome: 'Kauã',
            showHeader: true,
        }
    },

    components: {
        TheHeader
    },

    // Criação
    beforeCreate() {
        console.log('beforeCreate');
        console.log('Estado:', this.nome);
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM
    },
    
    created() {
        console.log('created');
        console.log('Estado:', this.nome);
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM
    },

    // Montagem
    beforeMount() {
        console.log('beforeMount');
        console.log('Estado:', this.nome);
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM
    },
    
    mounted() {
        console.log('mounted');
        console.log('Estado:', this.nome);
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM
        window.addEventListener('resize', this.resize);
        // Inicializar uma lib externa
        // Acesso ao template(DOM)
    },

    // Atualização
    beforeUpdate() {
        console.log('beforeUpdate');
    },

    updated() {
        console.log('updated');
        // Debug
        // Update
    },

    // Desmontagem
    beforeUnmount() {
        console.log('beforeUnmount');
        // Destruir as nossas libs
        // Eventos
        // Listeners
    },

    unmounted() {
        console.log('unmounted');
    },

    methods: {
        // Métodos
    },

    watch: {
        // Watchers
    },

    computed: {
        // Computeds
    }
}
</script>

<style scoped></style>