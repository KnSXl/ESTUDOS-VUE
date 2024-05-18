<template>
    <!-- Conteúdo principal -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <!-- Exibe o spinner de carregamento se loading for true -->
            <TodoSpinner v-if="loading" />

            <template v-else>
                <!-- Formulário para adicionar novas tarefas -->
                <TodoFormAdd />

                <!-- Lista de itens de tarefas -->
                <TodoItems v-if="$store.state.todos.length" />

                <!-- Mensagem de lista vazia -->
                <TodoEmpty v-else />
            </template>
        </div>
    </div>
    <!--/ Conteúdo principal -->
</template>

<script>
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoEmpty from './components/TodoEmpty.vue';

export default {
    components: {
        // Registro dos componentes usados na template
        TodoSpinner,
        TodoFormAdd,
        TodoItems,
        TodoEmpty
    },

    data() {
        return {
            // Estado de carregamento inicializado como falso
            loading: false,
        }
    },

    created() {
        // Define o estado de carregamento como verdadeiro ao criar o componente
        this.loading = true
        // Despacha a ação para buscar as tarefas e define o estado de carregamento como falso ao terminar
        this.$store.dispatch('getTodos').finally(() => {
            this.loading = false
        })
    },
}
</script>

<style scoped></style>