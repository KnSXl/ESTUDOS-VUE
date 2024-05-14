<template>
    <div class="card">
       <!-- Nome e preço do produto -->
       {{ product.name }} - {{ product.price }}
       
       <!-- Botão para adicionar produto -->
       <button @click="addProduct()">Adicionar</button>

       <!-- Botão para remover produto -->
       <button @click="removeProduct()">Remover</button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },

    methods: {
        // Método para adicionar produto ao carrinho
        addProduct() {
            this.$store.commit('addProduct', this.product)
        },

        // Método para remover produto do carrinho
        removeProduct() {
            this.$store.commit('removeProduct', this.product.id)
        },
    }
}
</script>

<style scoped>
.card {
    background-color: bisque;
    padding: 6px;
    margin-top: 5px;
}
</style>