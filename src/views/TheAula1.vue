<template>
    <!-- Renderiza o cabeçalho por components -->

    <h1>Aula 1</h1>
    <TheHeader />
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader
    },
}
</script>