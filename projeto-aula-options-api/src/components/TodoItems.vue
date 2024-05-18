<template>
    <!-- Contêiner para itens da lista de tarefas -->
    <div class="space-y-2">
        <!-- Componente de item de tarefa sendo renderizado para cada tarefa na store -->
        <TodoItem
            v-for="todo in $store.state.todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    // Registro do componente TodoItem
    components: {
        TodoItem,
    }    
}
</script>
