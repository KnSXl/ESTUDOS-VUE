<template>
    <!-- Atributos Class e Style dinâmicos -->

    <hr>
    <h1>Aula 7 - Atributos Class e Style dinâmicos</h1>
    <!-- Utilização de atributos class dinâmicos -->
    <h1 :class="{ 'title': true, 'title-home': isHome }">
        Curso Vue 3
    </h1>
    <!-- Utilização de atributos class dinâmicos através de um array -->
    <p :class="pClass">
        PRIMEIRO TEXTO EXEMPLO
    </p>
    <!-- Utilização de atributos style dinâmicos -->
    <p :style="styleClass">
        SEGUNDO TEXTO EXEMPLO
    </p>
</template>

<script>
export default {
    data() {
        return {
            isHome: true, // Variável para controlar a classe 'title-home'
            pClass: ['text', 'text-home'], // Array de classes para aplicar ao parágrafo
            styleClass: { 'color': 'aqua', 'backgroundColor': 'black' } // Objeto de estilos para aplicar ao parágrafo
        }
    }
}
</script>