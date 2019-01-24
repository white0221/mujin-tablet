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
      waitTime: 1,
      interval: null,
      url: "",
      pool: null,
      dammy: {
        user_id: "1",
        user_name: "Admin",
        items: [
          { item_id: "1", item_name: "water", value: "100", volume: "1" },
          { item_id: "5", item_name: "Potechi", value: "80", volume: "1" }
        ]
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
          .then(response => (this.pool = response))
          .catch(error => (this.pool = error))
      if (this.pool != null) {
        console.log(this.pool)
        clearInterval(this.interval)
        this.pool = this.dammy
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