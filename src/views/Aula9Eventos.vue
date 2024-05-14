<template>
    <!-- Utiliza eventos de clique, mouseover e mouseout -->

    <hr>
    <h1>Aula 9 - Eventos</h1>
    <div>
        <!-- Botão que utiliza evento de clique com modificadores -->
        <button @click.stop="onClick()">
            Enviar (Impede a propagação do evento/Para de propagar o evento)
        </button>
        
        <br><br>

        <!-- Botão que utiliza evento de clique com modificadores -->
        <button @click.prevent="onClick()">
            Enviar (Previne o comportamento padrão/Impede a ação padrão)
        </button>
        
        <br><br>

        <!-- Botão que utiliza evento de clique com modificadores -->
        <button @click.capture="onClick()">
            Enviar (Invoca o manipulador durante a fase de captura/Executa antes nos pais)
        </button>
        
        <br><br>

        <!-- Botão que utiliza evento de clique com modificadores -->
        <button @click.once="onClick()">
            Enviar (Só é invocado uma vez/Só funciona uma vez)
        </button>
        
        <br><br>

        <!-- Botão que utiliza evento de clique com modificadores -->
        <button @click.passive="onClick()">
            Enviar (Otimiza o desempenho/Melhora a resposta)
        </button>

        <br><br>

        <!-- Div que utiliza eventos de mouseover e mouseout -->
        <div @mouseover="onMouseOver()" @mouseout="onMouseOut()">
            Mouse Over
        </div>

        <br><br>

        <!-- Formulário que utiliza evento de submit com modificadores -->
        <form @submit.prevent="onSubmit">
            <!-- Input de texto que utiliza evento de tecla pressionada -->
            <input type="text" @keyup.enter="onKeyUp">
            <!-- Botão de envio do formulário -->
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        // Método chamado ao clicar em um botão
        onClick() {
            console.log('Click');
        },

        // Método chamado ao passar o mouse sobre um elemento
        onMouseOver() {
            console.log("Mouse-over");
        },

        // Método chamado ao remover o mouse de um elemento
        onMouseOut() {
            console.log("Mouse-out");
        },

        // Método chamado ao submeter um formulário
        onSubmit() {
            console.log('Submit');
        },

        // Método chamado ao pressionar uma tecla
        onKeyUp() {
            console.log('onKeyUp');
        }
    }
}
</script>