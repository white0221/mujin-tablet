<template>
  <div id="confirm">
    <router-link to="/complete">OK</router-link>
    <router-link to="/select">NG</router-link>
    {{ purchase_info }}
  </div>
</template>

<script>
export default {
  computed: {
    purchase_info() {
      return this.$store.state.purchase;
    }
  }
}
</script>

<style>
</style>