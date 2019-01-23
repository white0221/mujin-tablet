<template>
  <div id="select">
    <p>Please select your name.</p>
    <div>
      <table>
        <tr v-for="user in users.user">
          <td>{{ user.user_name }}</td>
          <td>{{ user.email }}</td>
          <td>Button</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "getUserList",
  data() {
    return {
      url: "",
      users: null
    }
  },
  mounted() {
    axios.get(this.url)
      .then(response => (this.users = response))
      .catch(error => (this.users = error))
  }
}
</script>

<style>
p {
  font-size: 20px;
}

table {
  border: 2px solid black;
  border-radius: 3px;
  background-color: #fff;
  margin: auto;
}

th {
  background-color: #42b983;
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