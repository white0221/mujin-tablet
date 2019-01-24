<template>
  <div id="confirm">
    <router-link to="/complete">OK</router-link>
    <router-link to="/select">NG</router-link>
    <div>
      <p>{{ purchase_info.user_name }}さん</p>
      <p>￥{{ purchase_amount }} -</p>
      <table>
        <tr v-for="item in purchase_info.items">
          <td>{{ item.item_name }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.volume }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    purchase_info() {
      return this.$store.state.purchase
    },
    purchase_amount() {
      let amount = 0
      let len = this.$store.state.purchase.items.length
      for (let i = 0; i < len; i++) {
        amount += Number(this.$store.state.purchase.items[i].value)
      }
      return amount
    }
  }
}
</script>

<style>
</style>