<template>
  <v-container>
    <div class="title font-weight-bold">Sign Up to a Workspace here</div>
    <v-card>
      <v-form>
        <v-container>
          <v-text-field v-model="firstName" label="Firstname"></v-text-field>
          <v-text-field v-model="lastName" label="Lastname"></v-text-field>
          <v-text-field v-model="userName" label="Username"></v-text-field>
          <v-text-field v-model="email" label="Email"></v-text-field>
          <label for>Organization:</label>
          <select name id v-model="organization">
            <option disabled value>Please select one</option>
            <option v-for="admin in adminApi" :key="admin.user.id" :value="admin.user.id">
              <span>{{admin.organization}}</span>
            </option>
          </select>
          <v-flex xs12 sm6 d-flex>
            <v-select v-model="role" :items="roles" label="Role"></v-select>
          </v-flex>
          <!-- <v-text-field label="Role"></v-text-field> -->
          <v-text-field type="password" v-model="passWord" label="Password"></v-text-field>
          <v-btn @click="register">submit</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    adminApi: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      userAPI: null,
      admins: [],
      roles: ["Dev", "PR", "AD", "QA"],
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      organization: "",
      role: "",
      passWord: "",
      isUser: true

      // test: this.adminApi.map(admin => admin.user)
    };
  },
  methods: {
    register() {
      axios
        .post("http://127.0.0.1:8000/api/users/", {
          user: {
            username: this.userName,
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            is_user: this.isUser,
            password: this.passWord
          },
          org: this.organization,
          role: this.role
        })
        .then(res => {
          let users = res.data;
          const data = users.map(user => user.user);
          localStorage.setItem("userusername", data.username);
          this.$router.push("/user/dashboard");
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }
  }
  // mounted() {
  //   this.test = this.adminApi.map(admin => admin.user);
  //   console.log(this.test);
  // }
};
</script>

