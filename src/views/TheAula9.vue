<template>
    <!-- Utiliza eventos de clique, mouseover e mouseout -->

    <hr>
    <h1>Aula 9</h1>
    <div>
        <button @click.stop="onClick()">
            Enviar (Impede a propagação do evento/Para de propagar o evento)
        </button>
        
        <br><br>

        <button @click.prevent="onClick()">
            Enviar (Previne o comportamento padrão/Impede a ação padrão)
        </button>
        
        <br><br>

        <button @click.capture="onClick()">
            Enviar (Invoca o manipulador durante a fase de captura/Executa antes nos pais)
        </button>
        
        <br><br>

        <button @click.once="onClick()">
            Enviar (Só é invocado uma vez/Só funciona uma vez)
        </button>
        
        <br><br>

        <button @click.passive="onClick()">
            Enviar (Otimiza o desempenho/Melhora a resposta)
        </button>

        <br><br>

        <div @mouseover="onMouseOver()" @mouseout="onMouseOut()">
            Mouse Over
        </div>

        <br><br>

        <form @submit.prevent="onSubmit">
            <input type="text" @keyup.enter="onKeyUp">
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        onClick() {
            console.log('Click');
        },

        onMouseOver() {
            console.log("Mouse-over");
        },

        onMouseOut() {
            console.log("Mouse-out");
        },

        onSubmit() {
            console.log('Submit');
        },

        onKeyUp() {
            console.log('onKeyUp');
        }
    }
}
</script>
