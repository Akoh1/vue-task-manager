<template>
  <UserSignupForm :adminApi="admins"/>
</template>

<script>
import UserSignupForm from "../components/UserSignupForm";
export default {
  data() {
    return {
      admins: null
    };
  },
  methods: {
    fetchAPi() {
      axios
        .get("http://127.0.0.1:8000/api/admin/")
        .then(res => {
          this.admins = res.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.fetchAPi();
  },
  components: { UserSignupForm }
};
</script>
