<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Farzane Vue.js App"/> -->
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Login
  }
}
</script>
