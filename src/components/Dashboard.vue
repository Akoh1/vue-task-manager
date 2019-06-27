<template>
  <v-app>
    <v-container>
      <v-content>
        <v-btn @click="logout">Logout</v-btn>
      </v-content>
      <h3>I am dashboard</h3>
    </v-container>
  </v-app>
</template>

<script>
import { log } from "util";
export default {
  methods: {
    logout() {
      this.$router.push("/");
    }
  },

  mounted() {
    let admintoken = localStorage.getItem("adminusername");
    console.log(admintoken);
  }
};
</script>
