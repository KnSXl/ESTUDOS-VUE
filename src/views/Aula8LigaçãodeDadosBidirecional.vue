<template>
    <!-- Ligação de dados bidirecional (diretiva v-model) -->

    <hr>
    <h1>Aula 8 - Ligação de dados bidirecional (diretiva v-model)</h1>

    <!-- Input de texto com v-model -->
    <div>
        <label>Nome</label>
        <br>
        <input type="text" v-model="nome"> <!-- Vincula o valor do input ao data 'nome' -->
        <br>
        {{ nome }} <!-- Exibe o valor de 'nome' -->
    </div>

    <br>

    <!-- Select com v-model -->
    <div>
        <label>Esportes</label>
        <br>
        <select v-model="esportes"> <!-- Vincula o valor do select ao data 'esportes' -->
            <option value="">Escolha</option>
            <option value="Futebol">Futebol</option>
            <option value="Skate">Skate</option>
            <option value="Tenis">Tenis</option>
        </select>
        <br>
        {{ esportes }} <!-- Exibe o valor de 'esportes' -->
    </div>

    <br>

    <!-- Radio buttons com v-model -->
    <div>
        <label>Escolha</label>
        <br>
        <input v-model="escolha" type="radio" value="Sim">Sim <!-- Vincula o valor do radio button ao data 'escolha' -->
        <input v-model="escolha" type="radio" value="Não">Não <!-- Vincula o valor do radio button ao data 'escolha' -->
        <br>
        {{ escolha }} <!-- Exibe o valor de 'escolha' -->
    </div>

    <br>

    <!-- Checkbox com v-model -->
    <div>
        <label>Contrato</label>
        <br>
        <input v-model="contrato" type="checkbox"> Aceita nossos termos... <!-- Vincula o estado do checkbox ao data 'contrato' -->
        <br>
        {{ contrato }} <!-- Exibe o valor de 'contrato' -->
    </div>

    <br>

    <!-- Checkbox com v-model (array) -->
    <div>
        <label>Cores que você mais gosta</label>
        <br>
        <input v-model="cores" type="checkbox" value="Azul"> Azul <!-- Vincula o valor do checkbox ao array 'cores' -->
        <input v-model="cores" type="checkbox" value="Amarelo"> Amarelo <!-- Vincula o valor do checkbox ao array 'cores' -->
        <br>
        {{ cores }} <!-- Exibe o array 'cores' -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: '', // Armazena o nome inserido no input de texto
            esportes: '', // Armazena a opção selecionada no select
            escolha: '', // Armazena a opção selecionada nos radio buttons
            contrato: true, // Armazena o estado do checkbox
            cores: [] // Armazena as cores selecionadas nos checkboxes
        }
    }
}
</script>