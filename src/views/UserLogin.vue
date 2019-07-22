<template>
  <UserLoginForm :userApi="user_api"/>
</template>

<script>
import UserLoginForm from "../components/UserLoginForm";
export default {
  data() {
    return {
      user_api: null
    };
  },
  methods: {
    fetchAPIURL() {
      axios
        .get("http://127.0.0.1:8000/api/users/")
        .then(res => {
          this.user_api = res.data;
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.fetchAPIURL();
  },
  components: { UserLoginForm }
};
</script>