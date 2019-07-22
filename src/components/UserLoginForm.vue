<template>
  <v-container>
    <div class="title font-weight-bold">User Login</div>
    <v-card>
      <v-form>
        <v-container>
          <v-text-field v-model="email" label="Email"></v-text-field>

          <v-text-field type="password" v-model="password" label="Password"></v-text-field>
          <v-btn @click="logIn">submit</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    userApi: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    logIn() {
      let userarray = this.userApi.map(data => data.user);
      console.log(userarray);

      userarray.forEach(element => {
        if (element.email == this.email && element.password == this.password) {
          console.log(element.email);
          console.log(element.password);
          localStorage.setItem("userusername", element.username);
          this.$router.push("/user/dashboard");
        }
      });
    }
  }
};
</script>