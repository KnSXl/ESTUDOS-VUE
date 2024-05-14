<template>
    <!-- Instruções de loops (diretiva v-for) -->

    <hr>
    <h1>Aula 5 - Instruções de loops (diretiva v-for)</h1>
    <!-- Loop através do array 'todos' e renderização de cada item -->
    <div v-for="obj in todos" :key="obj.id" class="todos-item">
        <!-- Exibe uma imagem se houver 'imgSrc', caso contrário, exibe apenas o título -->
        <img v-if="obj.imgSrc" :src="obj.imgSrc" :alt="obj.imgAlt">
        {{ obj.title }} <!-- Exibe o título do item -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Array de objetos representando 'todos'
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Título 1",
                    "completed": false,
                    "imgSrc": 'https://placehold.co/150', // URL da imagem para o primeiro item
                    "imgAlt": 'placehold1' // Texto alternativo para a imagem do primeiro item
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Título 2",
                    "completed": false,
                    "imgSrc": 'https://placehold.co/150', // URL da imagem para o segundo item
                    "imgAlt": 'placehold2' // Texto alternativo para a imagem do segundo item
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "Título 3",
                    "completed": false,
                },
            ]
        }
    }
}
</script>

<style scoped>
.todos-item {
    background-color: #000; /* Cor de fundo */
    margin: 0 0 5px 0; /* Margens */
    padding: 3px 6px; /* Preenchimento */
    color: white; /* Cor do texto */
}
</style>