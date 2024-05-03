<template>
    <!-- Utiliza class binding e style binding para modificar a aparência dos elementos -->

    <hr>
    <h1>Aula 7</h1>
    <h1 :class="{ 'title': true, 'title-home': isHome }">
        Curso Vue 3
    </h1>
    <p :class="pClass">
        PRIMEIRO TEXTO EXEMPLO
    </p>
    <p :style="styleClass">
        SEGUNDO TEXTO EXEMPLO
    </p>
</template>

<script>
export default {
    data() {
        return {
            isHome: true,
            pClass: ['text', 'text-home'],
            styleClass: { 'color': 'aqua', 'backgroundColor': 'black' }
        }
    }
}
</script>
