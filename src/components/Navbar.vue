<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="'/'">Dashboard</router-link>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <span v-if="isAuthenticated">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="signout">Sign out</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'settings'">Settings</router-link>
          </li>
        </span>
        <span v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="'signin'">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'signup'">Sign up</router-link>
          </li>
        </span>
      </ul>
    </div>
  </nav>
</template>

<script>
  import auth from '../services/auth.js'
  import { eventBus } from '../main.js'
  export default {
    data: () => {
      return {
        isAuthenticated: auth.isAuthenticated()
      }
    },
    methods: {
      signout() {
        auth.removeToken()
        eventBus.$emit("authChange", false)
      }
    },
    created() {
      eventBus.$on('authChange', (data) => {
        this.isAuthenticated = data
      })
    }
  }
</script>
