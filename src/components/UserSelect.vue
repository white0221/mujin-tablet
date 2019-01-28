<template>
  <div id="select">
    <p>Please select your name.</p>
    <div v-show="users!=null">
      <table>
        <tr v-for="user in users.user">
          <td>{{ user.user_name }}</td>
          <td>{{ user.email }}</td>
          <td><button v-show="user.id!=0" v-on:click="send(user.id)">Me</button></td>
        </tr>
      </table>
    </div>
    <div v-show="users==null">
      ユーザデータを読み込めませんでした。
    </div>
  </div>
</template>

<script>
export default {
  name: "getUserList",
  data() {
    return {
      url: "http://localhost:3000/tablet/user/list",
      users: { user:[{id: "0", user_name:"", email:"初期化中"}]}
    }
  },
  created() {
    axios.get(this.url)
      .then(res => (this.users = res.data))
      .catch(err => (console.log("err: "+err)))
  },
  methods: {
    send: function(user_id) {
      this.$store.commit("setUserID", user_id)
      this.$router.push('/complete')
    }
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