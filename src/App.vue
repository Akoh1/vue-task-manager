<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat :to="{ name: 'login-admin'}">
        <span class="mr-2">Admin Login</span>
      </v-btn>
      <v-btn flat :to="{ name: 'login-user'}">
        <span class="mr-2">User Login</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <Home/> -->
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card dark color="white">
              <v-btn to="/register/admin" color="warning">Open your workspace</v-btn>
              <!-- <router-link to="/">Home</router-link> -->
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card dark color="white">
              <v-btn to="/register/user" color="info">Info</v-btn>
              <!-- <router-link to="/about">About</router-link> -->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Home from "./views/Home";
// import About from "./views/About";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  //   Home,
  //   About
  // },
  data() {
    return {
      //
    };
  }
};
</script>
