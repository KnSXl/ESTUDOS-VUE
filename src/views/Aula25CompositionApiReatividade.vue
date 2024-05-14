<template>
    <!-- Introdução à Reatividade na Composition API -->

    <!-- Linha horizontal -->
    <hr>
    <!-- Título -->
    <h1>Aula 25 - Composition API Reatividade</h1>

    <!-- Exibe o nome -->
    {{ name }}
    <br>
    <!-- Botão para mudar o nome -->
    <button @click="changeName()">Clique</button>

    <br>

    <!-- Título do usuário -->
    <h5>User</h5>
    <br>
    <!-- Primeiro nome do usuário -->
    {{ user.first_name }}
    <!-- Sobrenome do usuário -->
    {{ user.last_name }}

    <br>

    <!-- Título do administrador -->
    <h5>Admin</h5>
    <br>
    <!-- Primeiro nome do administrador -->
    {{ admin.first_name }}
    <!-- Sobrenome do administrador -->
    {{ admin.last_name }}
</template>

<script>
import { reactive, ref } from 'vue'

export default {
    setup() {
        // Variável para armazenar o nome
        let name = 'Exemplo'

        // Usuário reativo
        const user = reactive({
            first_name: 'Kauã',
            last_name: 'Nascimento da Silva'
        })

        // Administrador com referência
        const admin = ref({
            first_name: 'Admin',
            last_name: 'Master'
        })

        // Função para mudar o nome
        const changeName = () => {
            alert('chegou')
            // Alterando os valores dos nomes
            name = 'Teste'
            user.first_name = 'Exemplo'
            user.last_name = 'Novoexemplo'
            admin.value.first_name = 'NovoAdmin'
            admin.value.last_name = 'NovoMaster'
        }

        return {
            name,
            user,
            admin,
            changeName
        }
    },
}
</script>

<style scoped></style>
