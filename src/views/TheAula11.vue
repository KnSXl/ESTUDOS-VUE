<template>
    <!-- Utiliza observadores (watch) -->

    <hr>
    <h1>Aula 11</h1>
    <div>
        <input
            type="text"
            v-model="nome"
        > <br>
        {{ nome }}

        <br><br>

        <select v-model="contagemPagina">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <br>
        {{ contagemPagina }}

        <br><br>

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
        {{ usuario.primeiro_nome }}
        <br>
        {{ usuario.segundo_nome }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: '',
            contagemPagina: 5,
            usuario: {
                primeiro_nome: "Kauã",
                segundo_nome: "Nascimento da Silva"
            }
        }
    },

    watch: {
        nome(newValue) {
            if (newValue.length >= 3) {
                this.salvarNomeUsuario()
            }
        },

        contagemPagina() {
            this.mudarPagina()
        },

        usuario: {
            handler() {
                console.log('Usuário Alterado');
            },
            deep: true
        }
    },

    methods: {
        salvarNomeUsuario() {
            console.log('Ajax');
            console.log(this.nome);
        },

        mudarPagina() {
            console.log('Ajax mudar de paginas');
        }
    }
}
</script>
