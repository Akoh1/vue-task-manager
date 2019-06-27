<template>
  <div>
    <AdminLoginForm :adminAPI="admin_api"/>
  </div>
</template>

<script>
import AdminLoginForm from "../components/AdminLoginForm";
// import axios from "axios";

export default {
  data() {
    return {
      api: process.env.VUE_APP_ADMIN_API,
      admin_api: null
    };
  },
  methods: {
    fetchAPIURL() {
      axios
        .get("http://127.0.0.1:8000/api/admin/")
        .then(res => {
          // const { user } = res;
          // console.log(user);

          this.admin_api = res.data;
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.fetchAPIURL();
  },
  components: { AdminLoginForm }
};
</script>
