<template>
    <div :class="baseClass">
        {{ test }}        
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'success'
        },
        test: {
            type: String,
            default: 'Seu formulário foi enviado'
        },
    },

    mounted() {
        console.log(this.test);
    },

    computed: {
        baseClass() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        },
    }
}
</script>

<style scoped>
.alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background-color: #ddd;
}

.alert-success {
    background-color: #42b983;
    color: white;
}

.alert-danger {
    background-color: #b94242;
    color: white;
}
</style>