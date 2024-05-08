<template>
    <div>
        <!-- Renderização de cada produto -->
        <AppProduct
            v-for="product in $store.state.products"
            :key="product.id"
            :product="product"
        />
        
    </div>
</template>

<script>
import AppProduct from './AppProduct'

export default {
    components: {
        AppProduct
    },
}
</script>
