<template>
    <div class="app">

        <h1>Aula 19, 20, 21, 22 e 23</h1>
        
        <!-- Componente HomeView -->
        <HomeView />

        <br>

        <!-- Botão para atualizar o perfil -->
        <button @click="updateUser()">
            Atualizar Perfil
        </button>

        <br><br>

        <!-- Componente AppProducts -->
        <AppProducts />

        <br>

        <!-- Quantidade de itens no carrinho -->
        Quantidade: {{ $store.state.cart.length }}

        <br><br>

        <!-- Valor total do carrinho -->
        Valor: R$ {{ $store.getters.total }}
    </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import AppProducts from './views/Products/AppProducts.vue'

export default {
    data() {
        return {

        }
    },

    components: {
        HomeView,
        AppProducts
    },

    methods: {
        // Método para atualizar o usuário
        updateUser() {
            const newUser = {
                first_name: 'Usuário',
                last_name: 'Exemplo',
                email: 'usuarioexemplo@exemplo.com'
            }
            // Chamada assíncrona para armazenar o usuário
            this.$store.dispatch('storeUser', newUser).then(() => {
                console.log('Terminou com sucesso');
            });
        }
    },
}
</script>

<style scoped>
.app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    text-align: center;
    margin-top: 60px;
}
</style>