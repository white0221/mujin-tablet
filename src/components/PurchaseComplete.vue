<template>
  <div id="complete">
    <p>{{ this.purchase.user_name }}<br>
    Thank you!</p>
    <p>{{ this.purchase }}</p>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data() {
    return {
      time: 3,
      interval: null,
      url: "http://localhost:3000/tablet/user/list/",
      purchase: null
    }
  },
  created: function() {
    let self = this
    this.sendPurchaseData()
    this.interval = setInterval(() =>{self.count()}, 1000)
  },
  methods: {
    count: function() {
      console.log(this.time)
      if (this.time <= 0) {
        clearInterval(this.interval)
        //this.$router.push('/wait')
      } else {
        this.time--;
      }
    },
    sendPurchaseData: function() {
      // データをストアからget
      this.purchase = this.$store.state.purchase
      // axiosでrailsへpost
      axios.post(this.url, this.purchase)
        .then(res =>{console.log('send: '+res.data)})
        .catch(err =>{console.log(err)})
      // ストアのデータをリセット
      //this.$store.commit({type: 'sendData', purchase: null})
    }
  }
}
</script>

<style>
</style>