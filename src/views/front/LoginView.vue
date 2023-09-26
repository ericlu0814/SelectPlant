<template>
  <div class="row justify-content-center">
    <h1 class="h3 mb-3 font-weight-normal">
      請先登入
    </h1>
    <div class="col-8">
      <form id="form" class="form-signin">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="username" v-model="user.username"
            placeholder="name@example.com" required autofocus>
          <label for="username">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" v-model="user.password"
            placeholder="Password" required>
          <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${VITE_APP_URL}admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          console.log(res)
          const { expired, token } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          // window.location = './product.html'
          this.$router.push('  ')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
  }
}
</script>
