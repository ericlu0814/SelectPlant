<template>
  這是產品列表
  <table class="products">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>
          <img :src="product.imageUrl" width="200" alt="">
        </td>
        <td>
          <RouterLink :to="`/product/${product.id}`">連結到單一品項</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- <RouterLink></RouterLink> -->
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
          console.log('商品列表:', res.data.products)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
