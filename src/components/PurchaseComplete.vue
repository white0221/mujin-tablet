<template>
  <div id="complete">
    <p>{{ purchase.user_name }}<br>
    Thank you!</p>
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
      purchase: this.$store.state.purchase
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
        this.$router.push('/wait')
      } else {
        this.time--;
      }
    },
    sendPurchaseData: async function() {
      // axiosでrailsへpost
      let request_json = {"history": {}};
      request_json["history"]["user_id"] = this.purchase["user_id"];
      request_json["history"]["history_details"] = this.purchase["items"];
      request_json["response_flag"] = true;
      console.log("post url :"+this.url);
      console.log(request_json);
      let response = await axios.post(this.url, request_json);
      console.log('send: '+response.data)
      // ストアのデータをリセット
      this.$store.commit({type: 'sendData', purchase: null})
    }
  }
}
</script>

<style>
</style>