<template>
  <div>
    <div class="box">🔔 {{billboard.content}}</div>  
  </div>
</template>

<script>
import {getBillboard} from '@/api/billboard'

export default {
  name: 'Home',
  data() {
    return {
      billboard: {
        content: ''
      }
    }
  },
  created() {
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value
        this.billboard = data
        }
      )
    }
  }
}
</script>
