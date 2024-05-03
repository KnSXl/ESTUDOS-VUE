<template>
    <!-- Mostra o nome e sobrenome se a variável showName for verdadeira -->
    
    <hr>
    <h1>Aula 2</h1>
    <TheHeader v-if="showHeader" />

    <div v-show="showName">
        Nome: {{ nome }}
        <br>
        Sobrenome: {{ sobrenome }}
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'

export default {
    components: {
        TheHeader
    },

    data() {
        return {
            showName: true,
            nome: 'Kauã',
            sobrenome: 'Nascimento da Silva'
        }
    }
}
</script>