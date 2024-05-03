<template>
    <!-- Condicional que exibe diferentes mensagens dependendo do valor da variável nivelAcesso -->

    <hr>
    <h1>Aula 3</h1>
    <div v-if="nivelAcesso === 'admin'">Usuário Admin</div>
    <div v-else-if="nivelAcesso === 'marketing'">Usuário Marketing</div>
    <div v-else>Usuário normal</div>
</template>

<script>
export default {
    data() {
        return {
            nivelAcesso: 'admin'
        }
    }
}
</script>
