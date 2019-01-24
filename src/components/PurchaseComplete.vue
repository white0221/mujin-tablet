<template>
  <div id="complete">
    <p>User Name<br>
    Thank you!</p>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data() {
    return {
      time: 3,
      interval: null
    }
  },
  created: function() {
    let self = this;
    this.interval = setInterval(() =>{self.count()}, 1000);
  },
  methods: {
    count: function() {
      console.log(this.time)
      if (this.time <= 0) {
        clearInterval(this.interval);
        this.$router.push('/wait')
      } else {
        this.time--;
      }
    }
  }
}
</script>

<style>
</style>