<template>
    <div>
      <pre>
        {{ $route }}
        
        {{ $route.query.page }}
      </pre>
      Usuário <br>
  
      <button @click="login">
        Login
      </button>
      Usuários
    </div>
  </template>
  
  <script>
  export default {
    created() {
      // console.log(this.$route)
      console.log(this.$router);
    },
  
    methods: {
      login() {
        // Ajax login
        // Redirecionamento para a rota '/about'
        this.$router.push('/about');
        console.log('chegou');
      }
    }
  }
  </script>
  