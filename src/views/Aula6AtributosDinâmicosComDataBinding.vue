<template>
    <!-- Atributos dinâmicos com data binding (diretiva v-bind) -->

    <hr>
    <h1>Aula 6 - Atributos dinâmicos com data binding (diretiva v-bind)</h1>
    <!-- Loop através do array 'todos' e renderização de cada item -->
    <div v-for="objeto in todos" :key="objeto.id">
        <!-- Exibe uma imagem se houver 'imgSrc', caso contrário, não exibe -->
        <img v-if="objeto.imgSrc" :src="objeto.imgSrc" :alt="objeto.imgAlt">
        {{ objeto.imgAlt }} <!-- Exibe o texto alternativo da imagem -->
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