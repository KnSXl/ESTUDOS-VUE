<template>
    <header>
        Header
    </header>
</template>

<script>
export default {
    name: 'TheHeader',

    /* mounted() {
        console.log('mounted');
        console.log('Estado:', this.nome);
        console.log('DOM:', this.$el);
        window.addEventListener('resize', this.resize)
        window.removeEventListener('resize', this.resize)
    },

    methods: {
        resize($evt) {
            console.log($evt);
        }
    } */
}
</script>

<style scoped>
    header {
        background-color: black;
        text-align: center;
        color: white;
    }
</style>