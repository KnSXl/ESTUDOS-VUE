<template>
    <TheHeader
        v-if="showHeader"
    />

    <div v-show="showName">
        Nome: {{ nome }}
        <br>
        Sobrenome: {{ sobrenome }}
    </div>

    <div v-if="nivelAcesso === 'admin'">Usuário Admin</div>
    <div v-else-if="nivelAcesso === 'marketing'">Usuário Marketing</div>
    <div v-else>Usuário normal</div>

    <img
        src="@/assets/img/icon.png"
        alt="Vue icon"
        style="width: 50px; height: 50px;"
    >
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    name: 'App',

    components: {
        TheHeader
    },

    data() {
        return {
            showName: true,
            nome: 'Kauã',
            sobrenome: 'Nascimento da Silva',

            showHeader: true,
            
            nivelAcesso: 'admin'
        }
    }

    
}
</script>

<style scoped></style>
