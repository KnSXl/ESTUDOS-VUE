<template>
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
</template>

<script>
export default {
    data() {
        return {
            nome: '',
            esportes: '',
            escolha: '',
            contrato: true,
            cores: []
        }
    }
}
</script>
