<template>
  <UserDashboard/>
</template>

<script>
import UserDashboard from "../components/UserDashboard";
export default {
  data() {
    return {
      task_api: null,
      user_api: null,
      status_api: null,
    }
  },
  methods: {
    fetchTaskApi() {
      axios.get("http://127.0.0.1:8000/api/tasks/")
      .then(res => {
        this.task_api = res.data
      })
      .catch(error => console.error(error))
    },
    fetchUserApi() {
      axios.get("http://127.0.0.1:8000/api/users/")
      .then(res => {
        this.user_api = res.data
      })
      .catch(error => console.error(error))
    },
    fetchStatusApi() {
      axios.get("http://127.0.0.1:8000/api/status/")
      .then(res => {
        this.status_api = res.data
      })
      .catch(error => console.error(error))
    }
  },
  mounted() {
    this.fetchTaskApi(),
    this.fetchUserApi(),
    this.fetchStatusApi(),
  },
  components: { UserDashboard }
};
</script>

