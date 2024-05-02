<template>
    <!-- Aula 1 -->
    <!-- Renderiza o cabeçalho se a variável showHeader for verdadeira -->
    <h1>Aula 1</h1>

    <TheHeader v-if="showHeader" />



    <br><br>



    <!-- Aula 2 -->
    <!-- Mostra o nome e sobrenome se a variável showName for verdadeira -->
    <hr>
    <h1>Aula 2</h1>

    <div v-show="showName">
        Nome: {{ nome }}
        <br>
        Sobrenome: {{ sobrenome }}
    </div>



    <br><br>



    <!-- Aula 3 -->
    <!-- Condicional que exibe diferentes mensagens dependendo do valor da variável nivelAcesso -->
    <hr>
    <h1>Aula 3</h1>

    <div v-if="nivelAcesso === 'admin'">Usuário Admin</div>
    <div v-else-if="nivelAcesso === 'marketing'">Usuário Marketing</div>
    <div v-else>Usuário normal</div>



    <br><br>



    <!-- Aula 4 -->
    <!-- Imagem com src dinâmico e estilo inline -->
    <hr>
    <h1>Aula 4</h1>

    <img :src="iconSrc" :alt="iconAlt" style="width: 50px; height: 50px;">



    <br><br>



    <!-- Aula 5 -->
    <!-- Iteração sobre a lista de objetos 'todos' -->
    <hr>
    <h1>Aula 5</h1>

    <div v-for="obj in todos" :key="obj.id" class="todos-item">
        <img v-if="obj.imgSrc" :src="obj.imgSrc" :alt="obj.imgAlt">
        {{ obj.title }}
    </div>
    <!-- Modo "v-for" que gera o index de um array -->
    <!-- <div v-for="(obj, index) in todos" :key="obj.id" class="todos-item">
        {{ index }} - {{ obj.title }} 
    </div> -->



    <br><br>



    <!-- Aula 6 -->
    <!-- Outro tipo de iteração sobre a lista de objetos 'todos' -->
    <hr>
    <h1>Aula 6</h1>

    <div v-for="objeto in todos" :key="objeto.id">
        <img v-if="objeto.imgSrc" :src="objeto.imgSrc" :alt="objeto.imgAlt">
        {{ objeto.imgAlt }}
    </div>



    <br><br>



    <!-- Aula 7 -->
    <!-- Utiliza class binding e style binding para modificar a aparência dos elementos -->
    <hr>
    <h1>Aula 7</h1>

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



    <!-- Aula 8 -->
    <!-- Utiliza v-model para vincular os valores dos campos de entrada e seleção às variáveis do Vue.js e exibe esses valores -->
    <hr>
    <h1>Aula 8</h1>

    <div>
        <label>Nome</label>
        <br>
        <input type="text" v-model="nome">
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
        <input v-model="escolha" type="radio" value="Sim">Sim
        <input v-model="escolha" type="radio" value="Não">Não
        <br>
        {{ escolha }}
    </div>

    <br>

    <div>
        <label>Contrato</label>
        <br>
        <input v-model="contrato" type="checkbox"> Aceita nossos termos...
        <br>
        {{ contrato }}
    </div>

    <br>

    <div>
        <label>Cores que você mais gosta</label>
        <br>
        <input v-model="cores" type="checkbox" value="Azul"> Azul
        <input v-model="cores" type="checkbox" value="Amarelo"> Amarelo
        <br>
        {{ cores }}
    </div>



    <br><br>



    <!-- Aula 9 -->
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

        <form action="https://www.google.com.br/" @submit.prevent="onSubmit">
            <input type="text" @keyup.enter="onKeyUp">
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>



    <br><br>



    <!-- Aula 10 -->
    <hr>
    <h1>Aula 10</h1>



    <br><br>



    <!-- Aula 11 -->
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



    <br><br>



    <!-- Aula 12 -->
    <!-- ... -->
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
            cores: [],



            //Aula 11
            contagemPagina: 5,
            usuario: {
                primeiro_nome: "Kauã",
                segundo_nome: "Nascimento da Silva"
            }
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
        },



        // Aula 11
        salvarNomeUsuario() {
            console.log('Ajax');
            console.log(this.nome);
        },

        mudarPagina() {
            console.log('Ajax mudar de paginas');
        }
    },

    watch: {
        // Aula 11
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