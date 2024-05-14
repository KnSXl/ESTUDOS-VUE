import { createStore } from 'vuex'

export default createStore({
    state: {
        // Informações do usuário
        user: {
            first_name: 'Kauã',
            last_name: 'Nascimento da Silva',
            email: 'kauasilva2861@gmail.com'
        },
        // Lista de produtos disponíveis
        products: [
            {
                id: 1,
                name: 'Bola',
                price: 100
            },
            {
                id: 2,
                name: 'Chuteira',
                price: 200
            },
            {
                id: 3,
                name: 'Meião',
                price: 50
            }
        ],
        // Carrinho de compras
        cart: [],
    },

    mutations: {
        // Mutação para armazenar informações do usuário
        storeUser(state, data) {
            state.user = data
        },

        // Mutação para adicionar produto ao carrinho
        addProduct(state, data) {
            state.cart.push(data)
        },

        // Mutação para remover produto do carrinho
        removeProduct(state, id) {
            const index = state.cart.findIndex(objeto => objeto.id === id)
            state.cart.splice(index, 1)
        },
    },

    getters: {
        // Getter para calcular o valor total do carrinho
        total(state) {
            return state.cart.reduce((total, item) => total += item.price, 0)
        }
    
    },

    actions: {
        // Ação para armazenar informações do usuário (simulando uma requisição assíncrona)
        storeUser({ commit }, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('storeUser', data)
                    resolve();
                }, 3000);
            });
        }
    },    
});