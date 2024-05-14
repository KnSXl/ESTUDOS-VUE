<template>
    <!-- Utiliza observadores (watch) -->

    <hr>
    <h1>Aula 11 - Utiliza observadores (watch)</h1>
    <div>
        <!-- Input de texto vinculado ao data 'nome' -->
        <input
            type="text"
            v-model="nome"
        > <br>
        {{ nome }} <!-- Exibe o valor de 'nome' -->

        <br><br>

        <!-- Select vinculado ao data 'contagemPagina' -->
        <select v-model="contagemPagina">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <br>
        {{ contagemPagina }} <!-- Exibe o valor de 'contagemPagina' -->

        <br><br>

        <!-- Inputs de texto vinculados ao objeto 'usuario' -->
        <input
            v-model="usuario.primeiro_nome"
            type="text"
        >
        <br>
        <input
            v-model="usuario.segundo_nome"
            type="text"
        >
        <br>
        {{ usuario.primeiro_nome }} <!-- Exibe o primeiro nome do usuário -->
        <br>
        {{ usuario.segundo_nome }} <!-- Exibe o segundo nome do usuário -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: '', // Nome digitado no input de texto
            contagemPagina: 5, // Valor selecionado no select
            usuario: {
                primeiro_nome: "Kauã", // Primeiro nome do usuário
                segundo_nome: "Nascimento da Silva" // Segundo nome do usuário
            }
        }
    },

    watch: {
        // Observador para o data 'nome'
        nome(newValue) {
            // Se o comprimento do nome for maior ou igual a 3, chama o método salvarNomeUsuario()
            if (newValue.length >= 3) {
                this.salvarNomeUsuario()
            }
        },

        // Observador para o data 'contagemPagina'
        contagemPagina() {
            // Chama o método mudarPagina() sempre que 'contagemPagina' for alterado
            this.mudarPagina()
        },

        // Observador profundo para o objeto 'usuario'
        usuario: {
            handler() {
                console.log('Usuário Alterado'); // Exibe mensagem no console quando o objeto 'usuario' for alterado
            },
            deep: true // Habilita a observação profunda para o objeto 'usuario'
        }
    },

    methods: {
        // Método para simular uma operação Ajax ao salvar o nome do usuário
        salvarNomeUsuario() {
            console.log('Ajax'); // Simula uma requisição Ajax
            console.log(this.nome); // Exibe o nome no console
        },

        // Método para simular uma operação Ajax ao mudar de página
        mudarPagina() {
            console.log('Ajax mudar de paginas'); // Simula uma requisição Ajax
        }
    }
}
</script>