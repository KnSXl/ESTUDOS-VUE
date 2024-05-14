<template>
    <!-- Propriedade computada (computed) -->
    
    <hr>
    <h1>Aula 10 - Propriedade computada (computed)</h1>

    <!-- Exibe o nome completo do usuário -->
    {{ nomeCompleto }} 

    <br><br>

    <!-- Lista de todos incompletos -->
    <h2>Todos em aberto</h2>
    <div
        v-for="todo in incompletoTodos"
        :key="todo.id"
    >
        {{ todo.title }}
    </div>
    
    <br><br>

    <!-- Lista de todos completos -->
    <h2>Todos completos</h2>
    <div
        v-for="todo in completoTodos"
        :key="todo.id"
    >
        {{ todo.title }}
    </div>

    <br><br>

    <!-- Lista de todos com opção de marcação de completude -->
    <h2>Todos</h2>
    <div
        v-for="todo in todos"
        :key="todo.id"
    >
        <!-- Checkbox para marcar completude -->
        <input
            type="checkbox"
            v-model="todo.completed"    
        >
        {{ todo.title }}
    </div>

    <!-- Lista de todos completos (repetida para fins de demonstração) -->
    <h2>Todos completos</h2>
    <div
        v-for="todo in completoTodos"
        :key="todo.id"
    >
        {{ todo.title }}
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            // Dados do usuário
            usuario: {
                primeiro_nome: 'Kauã',
                segundo_nome: 'Nascimento da Silva'
            },
            // Lista de todos
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                }
            ]
        }
    },
    computed: {
        // Propriedade computada que retorna o nome completo do usuário
        nomeCompleto() {
            return `${this.usuario.primeiro_nome} ${this.usuario.segundo_nome}`
        },
        // Propriedade computada que retorna a lista de todos incompletos
        incompletoTodos() {
            return this.todos.filter(todo => !todo.completed);
        },
        // Propriedade computada que retorna a lista de todos completos
        completoTodos() {
            return this.todos.filter(todo => todo.completed);
        }
    }
}
</script>

<style scoped></style>