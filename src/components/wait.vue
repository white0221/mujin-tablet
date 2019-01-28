<template>
  <div id="wait">
    <img src="../assets/wait.png">
  </div>
</template>

<script>
export default {
  name: "wait",
  data() {
    return {
      waitTime: 5,
      interval: null,
      url: "http://localhost:5004/",
      pool: {
        data: null
      }
    }
  },
  created: function() {
    let self = this
    this.interval = setInterval(() =>{self.getPool()}, this.waitTime*1000);
  },
  methods: {
    getPool: function() {
      console.log("api access")
      axios.get(this.url)
          .then(res => (this.pool = res))
          .catch(err => (console.log(err)))
      if (this.pool.data != null) {
        clearInterval(this.interval)
        this.sendConfirm()
      }
    },
  
    sendConfirm: function() {
      this.$store.commit({
        type: 'sendData',
        purchase: this.pool
        })
      this.$router.push('/confirm')
    }
  }
}
</script>

<style>
</style>