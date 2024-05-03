<template>
    <!-- Propriedade computada (computed) -->
    
    <hr>
    <h1>Aula 10</h1>

    {{ nomeCompleto }} 



    <br><br>



    <h2>Todos em aberto</h2>
    <div
        v-for="todo in incompletoTodos"
        :key="todo.id"
    >
        {{ todo.title }}
    </div>


    
    <br><br>

    

    <h2>Todos completas</h2>
    <div
        v-for="todo in completoTodos"
        :key="todo.id"
    >
    {{ todo.title }}
    </div>



    <br><br>



    <h2>Todos</h2>
    <div
        v-for="todo in todos"
        :key="todo.id"
    >
        <input
            type="checkbox"
            v-model="todo.completed"    
        >
        {{ todo.title }}
    </div>

    <h2>Todos completas</h2>
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
            usuario: {
                primeiro_nome: 'Kauã',
                segundo_nome: 'Nascimento da Silva'
            },

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
        nomeCompleto() {
            return `${this.usuario.primeiro_nome} ${this.usuario.segundo_nome}`
        },

        incompletoTodos() {
            return this.todos.filter(todo => !todo.completed);
        },
        
        completoTodos() {
            return this.todos.filter(todo => todo.completed);
        }
    }
}
</script>

<style scoped></style>