<template>
    <!-- Contêiner principal da tarefa -->
    <div class="bg-gray-300 rounded-sm">
        <!-- Linha da tarefa com borda inferior -->
        <div class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0">
            <!-- Botão para marcar a tarefa como completa/incompleta -->
            <div class="flex items-center justify-center mr-2">
                <button 
                    :class="{
                        'text-green-600': isCompleted,
                        'text-gray-400': !isCompleted
                    }"
                    @click="onCheckClick"
                >
                    <!-- Ícone de marcação -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>

            <!-- Campo de entrada para o título da tarefa -->
            <div class="w-full">
                <input
                    v-model="title"
                    type="text"
                    placeholder="Digite a sua tarefa"
                    class="bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
                    @keyup.enter="onTitleChange"
                >
            </div>

            <!-- Botão para deletar a tarefa -->
            <div class="ml-auto flex items-center justify-center">
                <button
                    class="focus:outline-none"
                    @click="onDelete"
                >
                    <!-- Ícone de lixeira -->
                    <svg
                        class="ml-3 h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    props: {
        todo: {
            type: Object,
            default: () => ({})
        }
    },

    setup(props) {
        const title = ref(props.todo.title)
        const isCompleted = ref(props.todo.completed)
        const store = useStore()

        // Método para atualizar a tarefa
        const updateTodo = () => {
            const paylaod = {
                id: props.todo.id,
                data: {
                    title: title.value,
                    completed: isCompleted.value
                }
            }
            store.dispatch('updateTodo', paylaod)
        }

        // Método chamado quando o título é alterado
        const onTitleChange = () => {
            if (!title.value) {
                return
            }
            updateTodo()
        }

        // Método chamado ao clicar no botão de marcação
        const onCheckClick = () => {
            isCompleted.value = !isCompleted.value
            updateTodo()
        }

        // Método chamado ao clicar no botão de deletar
        const onDelete = () => {
            store.dispatch('deleteTodo', props.todo.id)
        }
        
        return {
            title,
            isCompleted,
            onDelete,
            onTitleChange,
            onCheckClick
        }
    },
}
</script>