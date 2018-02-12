<template>
  <div>
    <ct-navbar></ct-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      'ct-navbar': Navbar
    }
  }
</script>
