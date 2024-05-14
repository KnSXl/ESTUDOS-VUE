<template>
    <!-- Botão com clique ligado para enviar dados -->
    <button @click="sendData()">
        <!-- Renderiza o texto do botão com a variante fornecida -->
        {{ variant }}
        <!-- Renderiza o conteúdo do slot padrão -->
        <slot></slot>
        <!-- Renderiza o conteúdo do slot com nome "icon" -->
        <slot name="icon" />
    </button>
</template>

<script>
export default {
    // Definição das propriedades do componente
    props: {
        // Tipo de variante do botão
        variant: {
            type: String,
            default: 'success' // Valor padrão 'success'
        }
    },

    // Configuração do componente Vue 3
    setup(props, { emit }) {
        // Função para enviar dados
        const sendData = () => {
            emit('update', true); // Emite um evento de atualização
        };

        // Retorna a função para enviar dados
        return {
            sendData
        };
    }
};
</script>
