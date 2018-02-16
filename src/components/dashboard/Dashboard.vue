<template>
  <div v-if="isAuthenticated">
    <ct-coin-add></ct-coin-add>
    <hr>
    <div class="row">
      <div align="center">
        <ct-coin-table></ct-coin-table>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Please Sign up or Sign in to continue</h2>
    <router-link class="btn btn-info" :to="'signin'">Sign in</router-link>
    <router-link class="btn btn-info" :to="'signup'">Sign up</router-link>
  </div>
</template>

<script>
import auth from '../../services/auth.js'
import { eventBus } from '../../main.js'
import CoinAdd from './CoinAdd.vue'
import CoinTable from './CoinTable.vue'
export default {
  data: () => {
    return {
      isAuthenticated: auth.isAuthenticated()
    }
  },
  components: {
    'ct-coin-add': CoinAdd,
    'ct-coin-table': CoinTable
  },
  created() {
    eventBus.$on('authChange', (data) => {
      this.isAuthenticated = data
    })
  }

}
</script>
