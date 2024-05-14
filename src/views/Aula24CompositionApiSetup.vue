<template>
    <!-- Introdução ao setup na Composition API -->

    <!-- Linha horizontal -->
    <hr>
    <!-- Título -->
    <h1>Aula 24 - Composition API setup</h1>

    <!-- Exibe o nome -->
    {{ name }}
    <br>
    <!-- Botão para mudar o nome -->
    <button @click="changeName()">Clique</button>
</template>

<script>
export default {
    setup() {
        // Variável para armazenar o nome
        let name = 'Kauã'

        // Função para mudar o nome
        const changeName = () => {
            alert('chegou')
            // Alterando o valor do nome
            name = 'Teste'
        }

        return {
            name,
            changeName
        }
    },
}
</script>

<style scoped></style>