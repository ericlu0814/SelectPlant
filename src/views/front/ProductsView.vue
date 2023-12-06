<template>
  <section class="productBn">
    <!-- style="background-image: url('/img/bn01_1000x1000.jpg');" pdbn_1920x500 -->
    <div class="bn_bg" style="background-image: url('/img/123.jpg');"></div>
    <div class="bn_head">
      <div class="unit_title">
        <div class="title">PRODUCT</div>
        <div class="sub">商品專區</div>
      </div>
    </div>
  </section>
  <section class="productCt">
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
  </section>
  <!-- <RouterLink></RouterLink> -->
</template>

<script>
import '@/assets/sass/page/products.sass'
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
