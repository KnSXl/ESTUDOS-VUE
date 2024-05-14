<template>
    <!-- Componente de hook -->
    <div>
        hook
    </div>
</template>

<script>
import {
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
    
} from 'vue'

export default {
    setup() {
        // Executado antes do componente ser montado
        onBeforeMount(() => {
            console.log('onBeforeMount');
        })

        // Executado após o componente ser montado
        onMounted(() => {
            console.log('onMounted');
        })

        // Executado antes do componente ser desmontado
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        })

        // Executado após o componente ser desmontado
        onUnmounted(() => {
            console.log('onUnmounted');
        })

        return {
            
        }
    }
}
</script>
