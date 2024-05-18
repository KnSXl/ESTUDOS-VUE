import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        // Estado inicial com lista de tarefas vazia
        todos: []
    },
    mutations: {
        // Mutação para armazenar todos os itens da lista
        storeTodos(state, payload) {
            state.todos = payload;
        },
        // Mutação para armazenar um único item da lista
        storeTodo(state, payload) {
            const index = state.todos.findIndex(todo => todo.id === payload.id)
            if (index >= 0) {
                // Atualiza o item existente na lista
                state.todos.splice(index, 1, payload)
            } else {
                // Adiciona um novo item à lista
                state.todos.push(payload)
            }
            // state.todos.unshift(payload); // Alternativa para adicionar no início
        },
        // Mutação para deletar um item da lista
        deleteTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id)
            if (index >= 0) {
                state.todos.splice(index, 1)
            }
        }
    },
    actions: {
        // Ação para buscar todos os itens da lista do servidor
        getTodos({ commit }) {
            return axios.get('http://localhost:3000/todos')
                .then((response) => {
                    commit('storeTodos', response.data)
                })
        },

        // Ação para adicionar um novo item à lista
        addTodo({ commit }, data) {
            return axios.post('http://localhost:3000/todos', data).then((response) => {
                commit('storeTodo', response.data)
            })
        },

        // Ação para atualizar um item existente na lista
        updateTodo({ commit }, { id, data }) {
            return axios.put(`http://localhost:3000/todos/${id}`, data).then((response) => {
                commit('storeTodo', response.data)
            })
        },

        // Ação para deletar um item da lista
        deleteTodo({ commit }, id) {
            return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
                commit('deleteTodo', id)
            })
        }
    },
    getters: {
        // Getters podem ser adicionados aqui para obter informações derivadas do estado
    },
    modules: {
        // Módulos podem ser adicionados aqui para dividir o store em partes menores
    }
})