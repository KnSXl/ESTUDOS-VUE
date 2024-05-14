<template>
    <!-- Introdução ao Ciclo de Vida da Composition API -->

    <!-- Linha horizontal -->
    <hr>
    <!-- Título -->
    <h1>Aula 27 - Composition API Ciclo de Vida</h1>

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

    <br>

    <!-- Título do nome completo -->
    <h5>fullName</h5>
    <!-- Nome completo do administrador -->
    {{ fullName }}
    
    <br>

    <!-- Botão para atualizar o nome do administrador -->
    <button @click="admin.first_name = 'ExemploAdmin'">Atualizar</button>

    <br><br>

    <!-- Componente AppHook -->
    <AppHook v-if="showAppHook" />
    <!-- Botão para alternar visibilidade do componente -->
    <button @click="showAppHook = !showAppHook">Toggle</button>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'
import AppHook from '../components/layout/AppHook.vue'

export default {
    components: {
        AppHook
    },

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

        // Nome completo do administrador (computado)
        const fullName = computed(() => {
            return `${admin.value.first_name} ${admin.value.last_name}`
        });

        // Observador para o objeto admin
        watch(admin, () => {
            console.log('Lógica cabulosa');
        }, {
            deep: true
        });

        /* watch(() => admin.value.first_name,  () => {
            console.log('Lógica cabulosa');
        }, {
            deep: true
        }); */

        // Variável para mostrar ou esconder o componente AppHook
        const showAppHook = ref(true)

        return {
            name,
            user,
            admin,
            changeName,
            fullName,
            showAppHook,
        }
    },
}
</script>

<style scoped></style>
