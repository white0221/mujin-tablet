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
      pool: null
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
        // document.location = "/#/confirm"
        // confirmに遷移&confirmにデータ渡し
      }
    }
  },
}
</script>

<style>
</style>