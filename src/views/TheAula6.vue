<template>
    <!-- Outro tipo de iteração sobre a lista de objetos 'todos' -->

    <hr>
    <h1>Aula 6</h1>
    <div v-for="objeto in todos" :key="objeto.id">
        <img v-if="objeto.imgSrc" :src="objeto.imgSrc" :alt="objeto.imgAlt">
        {{ objeto.imgAlt }}
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
