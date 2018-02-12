<template>
  <form>
    <div class="form-group">
      <label>Select Coin</label>
      <select v-model="name" class="form-control">
        <option v-for="option in options">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Enter Amount</label>
      <input v-model="amount" class="form-control">
    </div>
    <button class="btn btn-success" @click="add()">Add</button>
  </form>
</template>

<script>
  import axios from 'axios'
  import auth from '../../services/auth.js'
  export default {
    data: () => {
      return {
        name: '',
        amount: 0,
        options: []
      }
    },
    methods: {
      add() {
        let vm = this;
        axios.post('/api/add-coin',
          { 
            name: vm.name,
            amount: vm.amount
          },
          {
            headers: { 'x-access-token': auth.getToken() }
          }
        )
        .then(response => {
          console.log(response)
        })
        .then(error => {
          console.log(error)
        })
      }
    },
    created() {
      let vm = this;
      axios.get('/api/coin-ids')
      .then(response => {
        vm.options = response.data 
      })
      .then(error => {
        console.log(error)
      })
    }
  }
</script>
