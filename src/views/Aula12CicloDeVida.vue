<template>
    <!-- Ciclo de vida (life cycle) -->
    
    <hr>
    <h1>Aula 12 - Ciclo de vida</h1>

    <!-- Componente TheHeader condicional -->
    <TheHeader 
        v-if="showHeader"
    />

    <div>
        <!-- Título e input vinculado ao data 'nome' -->
        <h1>Hello World</h1>
        
        <br>

        <input
            v-model="nome"
            type="text"
        >

        <br>

        {{ nome }} <!-- Exibe o valor do 'nome' -->

        <br>

        <!-- Botão para alternar a visibilidade do header -->
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
            nome: 'Kauã', // Dado do nome
            showHeader: true, // Controle de exibição do header
        }
    },

    components: {
        TheHeader
    },

    // Criação do componente
    beforeCreate() {
        console.log('beforeCreate'); // Log antes da criação do componente
        console.log('Estado:', this.nome); // Exibe o estado 'nome' antes da criação
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM (não disponível)
    },
    
    created() {
        console.log('created'); // Log após a criação do componente
        console.log('Estado:', this.nome); // Exibe o estado 'nome' após a criação
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM (ainda não disponível)
    },

    // Montagem do componente
    beforeMount() {
        console.log('beforeMount'); // Log antes da montagem do componente
        console.log('Estado:', this.nome); // Exibe o estado 'nome' antes da montagem
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM (ainda não disponível)
    },
    
    mounted() {
        console.log('mounted'); // Log após a montagem do componente
        console.log('Estado:', this.nome); // Exibe o estado 'nome' após a montagem
        console.log('DOM:', this.$el); // Exibir informações sobre o elemento DOM
        window.addEventListener('resize', this.resize); // Adiciona um listener de redimensionamento de janela
        // Inicializar uma lib externa
        // Acesso ao template(DOM)
    },

    // Atualização do componente
    beforeUpdate() {
        console.log('beforeUpdate'); // Log antes da atualização do componente
    },

    updated() {
        console.log('updated'); // Log após a atualização do componente
        // Debug
        // Update
    },

    // Desmontagem do componente
    beforeUnmount() {
        console.log('beforeUnmount'); // Log antes da desmontagem do componente
        // Destruir as nossas libs
        // Eventos
        // Listeners
    },

    unmounted() {
        console.log('unmounted'); // Log após a desmontagem do componente
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