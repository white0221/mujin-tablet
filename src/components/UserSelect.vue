<template>
  <div id="select">
    Please select your name.
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "getUserList",
  data() {
    return {
      url: "http://localhost:3000/tablet/user/list",
      users: [],
      info: null
    }
  },
  mounted() {
    axios
      .get(this.url)
      .then(response => (this.info = response))
  }
}
</script>

<style>
</style>