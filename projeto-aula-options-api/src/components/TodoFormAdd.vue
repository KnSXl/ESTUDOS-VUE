<template>
    <!-- Formulário para adicionar novos itens -->
    <form @submit.stop.prevent="addTodo"
        class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3">
        <!-- Campo de entrada para o título do item -->
        <input v-model="title" placeholder="Adicione um novo item ..." type="text"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3">

        <!-- Botão para submeter o formulário -->
        <button class="text-green-400 text-xs font-semibold focus:outline-none" type="submit">
            ADICIONAR
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            // Inicializa o campo de título como uma string vazia
            title: ''
        }
    },

    methods: {
        // Método para adicionar um novo item
        addTodo() {
            // Verifica se o campo de título está vazio
            if (!this.title) {
                return;
            }
            // Despacha uma ação para adicionar o item na store
            this.$store.dispatch('addTodo', {
                title: this.title,
                completed: false
            }).finally(() => {
                // Limpa o campo de título após a adição do item
                this.title = ''
            })
        }
    },
}
</script>