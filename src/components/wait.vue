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
    getPool: async function() {
      console.log("api access")
      let response = await axios.get(this.url);
      this.pool = response.data;
      if (this.pool != null) {
        clearInterval(this.interval);
        this.sendConfirm();
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