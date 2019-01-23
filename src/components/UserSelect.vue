<template>
  <div id="select">
    <p>Please select your name.</p>
    <div>
      <table>
        <tr v-for="user in dammy.user">
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
      url: null,
      users: null,
      dammy: {
        user: [
          { 
            id: 1,
            user_name: "admin",
            email: "admin@admin.com",
            password_digest: "",
            admin_flag: false,
            created_at: "2019-01-22T07:50:47.000Z",
            updated_at: "2019-01-22T07:50:47.000Z"
          },
          {
            id: 2,
            user_name: "user",
            email: "user@user.com",
            password_digest: "",
            admin_flag: false,
            created_at: "2019-01-23T12:40:31.000Z",
            updated_at: "2019-01-23T12:40:31.000Z"
          }
        ]
      }
    }
  },
  mounted() {
    axios.get(this.url)
      .then(response => (this.users = response))
      .catch(error => (this.users = null))
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