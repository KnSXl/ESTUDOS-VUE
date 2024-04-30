<template>
    <!-- Aula 1 -->
    <!-- Renderiza o cabeçalho se a variável showHeader for verdadeira -->
    <TheHeader v-if="showHeader" />



    <br><br>



    <!-- Aula 2 -->
    <!-- Mostra o nome e sobrenome se a variável showName for verdadeira -->
    <div v-show="showName">
        Nome: {{ nome }}
        <br>
        Sobrenome: {{ sobrenome }}
    </div>



    <br><br>



    <!-- Aula 3 -->
    <!-- Condicional que exibe diferentes mensagens dependendo do valor da variável nivelAcesso -->
    <div v-if="nivelAcesso === 'admin'">Usuário Admin</div>
    <div v-else-if="nivelAcesso === 'marketing'">Usuário Marketing</div>
    <div v-else>Usuário normal</div>



    <br><br>



    <!-- Aula 4 -->
    <!-- Imagem com src dinâmico e estilo inline -->
    <img :src="iconSrc" :alt="iconAlt" style="width: 50px; height: 50px;">



    <br><br>



    <!-- Aula 5 -->
    <!-- Iteração sobre a lista de objetos 'todos' -->
    <div
        v-for="obj in todos"
        :key="obj.id"
        class="todos-item"
    >
        <img
            v-if="obj.imgSrc"
            :src="obj.imgSrc"
            :alt="obj.imgAlt"
        >
        {{ obj.title }}
    </div>
    <!-- Modo "v-for" que gera o index de um array -->
    <!-- <div v-for="(obj, index) in todos" :key="obj.id" class="todos-item">
        {{ index }} - {{ obj.title }} 
    </div> -->


    
    <br><br>



    <!-- Aula 7 -->
    <!-- Outro tipo de iteração sobre a lista de objetos 'todos' -->
    <div
        v-for="objeto in todos"
        :key="objeto.id"
    >
        <img
            v-if="objeto.imgSrc"
            :src="objeto.imgSrc"
            :alt="objeto.imgAlt"
        >
        {{ objeto.imgAlt }}
    </div>
    


    <br><br>



    <!-- Aula 8 -->
    <!-- Utiliza class binding e style binding para modificar a aparência dos elementos -->
    <h1 :class="{ 'title': true, 'title-home': isHome }">
        Curso Vue 3
    </h1>
    <p :class="pClass">
        PRIMEIRO TEXTO EXEMPLO
    </p>
    <p :style="styleClass">
        SEGUNDO TEXTO EXEMPLO
    </p>



    <br><br>



    <!-- Aula 9 -->
    <!-- Utiliza v-model para vincular os valores dos campos de entrada e seleção às variáveis do Vue.js e exibe esses valores -->
    <div>
        <label>Nome</label>
        <br>
        <input
            type="text"
            v-model="nome"
        >
        <br>
        {{ nome }}
    </div>

    <br>

    <div>
        <label>Esportes</label>
        <br>
        <select v-model="esportes">
            <option value="">Escolha</option>
            <option value="Futebol">Futebol</option>
            <option value="Skate">Skate</option>
            <option value="Tenis">Tenis</option>
        </select>
        <br>
        {{ esportes }}
    </div>

    <br>

    <div>
        <label>Escolha</label>
        <br>
        <input
            v-model="escolha"
            type="radio"
            value="Sim"
        >Sim
        <input
            v-model="escolha"
            type="radio"
            value="Não"
        >Não
        <br>
        {{ escolha }}
    </div>

    <br>

    <div>
        <label>Contrato</label>
        <br>
        <input
            v-model="contrato"
            type="checkbox"
        > Aceita nossos termos...
        <br>
        {{ contrato }}
    </div>

    <br>

    <div>
        <label>Cores que você mais gosta</label>
        <br>
        <input
            v-model="cores"
            type="checkbox"
            value="Azul"
        > Azul
        <input
            v-model="cores"
            type="checkbox"
            value="Amarelo"
        > Amarelo
        <br>
        {{ cores }}
    </div>



    <br><br>



    <!-- Aula 10 -->
    <!-- Utiliza eventos de clique, mouseover e mouseout -->
    <div>
        <button @click.once="onClick()">
            Enviar
        </button>
        <br>
        <div
            @mouseover="onMouseOver()"
            @mouseout="onMouseOut()"    
        >
            Mouse Over
        </div>

        <br>

        <form
            action="https://www.google.com.br/"
            @submit.prevent="onSubmit"
        >
            <input
                type="text"
                @keyup.enter="onKeyUp"    
            >
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    name: 'App',

    components: {
        TheHeader
    },

    data() {
        return {
            // Aula 1
            showHeader: true,



            // Aula 2
            showName: true,
            nome: 'Kauã',
            sobrenome: 'Nascimento da Silva',



            // Aula 3
            nivelAcesso: 'admin',



            // Aula 4
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
            iconAlt: 'Icon Vue',



            // Aula 5
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Título 1",
                    "completed": false,
                    "imgSrc": 'https://placehold.co/150',
                    "imgAlt": 'placehold1'
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Título 2",
                    "completed": false,
                    "imgSrc": 'https://placehold.co/150',
                    "imgAlt": 'placehold2'
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "Título 3",
                    "completed": false,
                },
            ],



            // Aula 8
            classVar: 'title',
            isHome: true,
            pClass: ['text', 'text-home'],
            styleClass: { 'color': 'aqua', 'backgroundColor': 'black' },



            // Aula 9
            esportes: '',
            escolha: '',
            contrato: true,
            cores: []
        }
    },

    methods: {
        // Aula 10
        onClick($evento) {
            console.log('Click'), $evento;
        },

        onMouseOver(evento) {
            console.log("Mouse-over", evento)
        },

        onMouseOut(evento) {
            console.log("Mouse-out"), evento;
        },

        onSubmit(evento) {
            console.log('Submit'), evento;
        },

        onKeyUp(evento) {
            console.log('onKeyUp'), evento;
        }
    }
}
</script>

<!-- Estilo para aula 4 -->
<style scoped>
.todos-item {
    background-color: #000;
    margin: 0 0 5px 0;
    padding: 3px 6px;
    color: white;
}
</style>

<!-- Estilo para aula 8 -->
<style scoped>
.title {
    font-size: x-large;
    color: green;
}

.title-home {
    font-size: xx-large;
    color: blue;
}

.text {
    color: red;
}

.text-home {
    color: yellow;
}
</style>