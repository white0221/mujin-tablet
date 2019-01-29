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
          .then(response => {
              this.pool = response.data;
              if (this.pool != null) {
                 clearInterval(this.interval);
                 this.sendConfirm();
              }
          })
          .catch(error => (this.pool = error))
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