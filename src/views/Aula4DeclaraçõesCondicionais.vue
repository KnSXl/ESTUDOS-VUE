<template>
    <!-- Declarações condicionais (diretiva v-if v-show) -->
    
    <hr>
    <h1>Aula 4 - Declarações condicionais (diretiva v-if v-show)</h1>
    <TheHeader v-if="showHeader" /> <!-- Renderiza o componente TheHeader se showHeader for verdadeiro -->

    <div v-show="showName">
        Nome: {{ nome }} <!-- Exibe o nome -->
        <br>
        Sobrenome: {{ sobrenome }} <!-- Exibe o sobrenome -->
    </div>


    <div v-if="nivelAcesso === 'admin'">Usuário Admin</div> <!-- Exibe "Usuário Admin" se o nível de acesso for 'admin' -->
    <div v-else-if="nivelAcesso === 'marketing'">Usuário Marketing</div> <!-- Exibe "Usuário Marketing" se o nível de acesso for 'marketing' -->
    <div v-else>Usuário normal</div> <!-- Exibe "Usuário normal" se nenhum dos casos anteriores se aplicar -->
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'

export default {
    components: {
        TheHeader
    },

    data() {
        return {
            showName: true, // Variável para controlar a exibição do nome e sobrenome
            nome: 'Kauã', // Nome do usuário
            sobrenome: 'Nascimento da Silva', // Sobrenome do usuário
            nivelAcesso: 'admin' // Nível de acesso do usuário (pode ser 'admin', 'marketing' ou outro)
        }
    }
}
</script>