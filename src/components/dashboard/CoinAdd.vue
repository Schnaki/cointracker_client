<template>
  <form>
    <div class="form-group">
      <label>Select Coin</label>
      <select v-model="cmc_id" class="form-control">
        <option v-for="option in options">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Enter Amount</label>
      <input v-model="amount" type="text" class="form-control">
    </div>
    <button class="btn btn-success" @click="add()">Add</button>
  </form>
</template>

<script>
import axios from 'axios'
import auth from '../../services/auth.js'
import { eventBus } from '../../main.js'
export default {
  data: () => {
    return {
      cmc_id: '',
      amount: '',
      options: []
    }
  },
  methods: {
    add() {
      let vm = this;
      axios.post('/api/add-coin',
        { 
          cmc_id: vm.cmc_id,
          amount: vm.amount
        },
        {
          headers: { 'x-access-token': auth.getToken() }
        }
      )
      .then(response => {
        console.log(response)
        if(response.data.status == 'success') {
          eventBus.$emit('coinAdded', response.data['id'])
        } else {
          eventBus.$emit('showStatus', response.data)
        }
      })
      .then(error => {
        console.log(error)
      })
    }
  },
  created() {
    let vm = this;
    axios.get('/api/cmc-ids')
    .then(response => {
      vm.options = response.data 
    })
    .then(error => {
      console.log(error)
    })
  }
}
</script>
