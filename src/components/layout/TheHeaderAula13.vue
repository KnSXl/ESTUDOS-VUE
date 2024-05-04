<template>
    <header>
        <h1
            v-if="$slots.title"
            class="titulo"
        >
            <slot name="titulo" />
        </h1>
        <div class="descricao">
            <slot name="descricao" />
        </div>
        <div class="content">
            <slot />
        </div>

        Content do Header - menu...
    </header>
</template>

<script>
export default {
    data() {
        return {
            mounted() {
                console.log(this.$slots);

            }
        }
    },
}
</script>

<style scoped>
    header {
        background-color: black;
        text-align: center;
        color: white;
    }
</style>