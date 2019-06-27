<template>
  <v-container>
    <!-- <div>{{admins}}</div>
    <div>{{password}}</div>-->
    <div class="title font-weight-bold">Admin Login</div>
    <v-card>
      <v-form>
        <v-container>
          <v-text-field label="Email" v-model="email"></v-text-field>

          <v-text-field type="password" label="Password" v-model="password"></v-text-field>
          <v-btn @click="login">submit</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    adminAPI: null
  },
  data() {
    return {
      admins: null,
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.admins = this.adminAPI.map(user => user.user);

      this.admins.forEach(element => {
        if (element.email == this.email && element.password == this.password) {
          console.log(element.email);
          console.log(element.password);
          localStorage.setItem("adminusername", element.username);
          this.$router.push("/dashboard");
        }
      });
      // this.username = this.adminAPI.map(user => user.user.username);
      // this.password = this.adminAPI.map(user => user.user.password);
    }
  }
};
</script>