<template>
  <div id="confirm">
    <router-link to="/complete">OK</router-link>
    <router-link to="/select">NG</router-link>
    <div id="head">
      <p>{{ purchase_info.user_name }}さん</p>
      <p class="red">￥{{ purchase_amount }} -</p>
    </div>
    <div id="body">
      <table>
        <th>商品</th><th>単価</th><th>数量</th>
        <tr v-for="item in purchase_info.items">
          <td>{{ item.item_name }}</td>
          <td>￥{{ item.value }}</td>
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
.red {
  color: red;
  font-size: 30px;
}
table {
  border: 2px solid black;
  border-radius: 3px;
  background-color: #fff;
  margin: auto;
}

th {
  background-color: orange;
  color: rgba(255,255,255,0.66);
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>