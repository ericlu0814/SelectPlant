<template>
    這是 後台 頁面
    <router-link to="/admin/products">後台產品列表</router-link> |
    <router-link to="/admin/orders">後台訂單列表</router-link> |
    <router-link to="/">回前台</router-link> |
    <a href="#" @click.prevent="logout">登出</a>
    <hr>
    <RouterView></RouterView>
  </template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env
export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `hexToken=; expires=${new Date()}`
      this.$router.push('/login')
    },
    checkLogin () {
      // const checkLogin = ''
      const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('hexToken='))
        ?.split('=')[1]
      this.$http.defaults.headers.common.Authorization = cookieValue
      const url = `${VITE_APP_URL}api/user/check`
      this.$http.post(url)
        .then(res => {
          console.log(res)
          if (!res.data.success) {
            this.$router.push('/login')
          }
          // this.getProducts()
        })
        .catch((err) => {
          console.log('err', err)
          this.$router.push('/login')
          // window.location = './login.html'
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
