<template>
    <div class="home">
        {{ $store.state.user.first_name }}
        {{ $store.state.user.last_name }}
        
        <br>
        
        {{ $store.state.user.email }}
    </div>
</template>

<script>
export default {

}
</script>