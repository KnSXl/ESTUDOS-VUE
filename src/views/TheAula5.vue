<template>
    <!-- Iteração sobre a lista de objetos 'todos' -->

    <hr>
    <h1>Aula 5</h1>
    <div v-for="obj in todos" :key="obj.id" class="todos-item">
        <img v-if="obj.imgSrc" :src="obj.imgSrc" :alt="obj.imgAlt">
        {{ obj.title }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Título 1",
                    "completed": false,
                    "imgSrc": 'https://placehold.co/150',
                    "imgAlt": 'placehold1'
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Título 2",
                    "completed": false,
                    "imgSrc": 'https://placehold.co/150',
                    "imgAlt": 'placehold2'
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
    background-color: #000;
    margin: 0 0 5px 0;
    padding: 3px 6px;
    color: white;
}
</style>
