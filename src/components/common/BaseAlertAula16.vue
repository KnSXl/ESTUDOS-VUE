<template>
    <div :class="baseClass">
        <slot />

        <button @click="onClick()">
            X
        </button>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'success'
        }
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
    },

    methods: {
        onClick() {
            this.$emit('close')
            console.log('Clicou');
        }
    }
}
</script>

<style scoped>
.alert {
    display: flex;
    justify-content: space-between;
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