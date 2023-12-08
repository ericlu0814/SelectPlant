<template>
  <div>
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
      <div class="ct_wrap">
        <div class="pd" v-for="product in products" :key="product.id">
          <div class="pd_wrap">
            <div class="pd_img">
              <img :src="product.imageUrl" width="200" alt="">
            </div>
            <div class="pd_head">
              <div class="pd_title">{{ product.title }}</div>
              <div class="pd_price">NT$ {{ product.price }}</div>
              <div class="pd_btn">
                <RouterLink :to="`/product/${product.id}`">了解更多</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="cart">
      <div class="cart_bg"></div>
      <div class="cart_box">
        <div class="cart_wrap">
          <div class="cart_title">購物車</div>
          <div class="cart_list">
            <!-- {{ cart.product }} -->
            <div class="cart_item" v-for="cart in carts" :key="cart.id">
              <div class="pd_img">
                <img :src="cart.product.imageUrl" alt="">
              </div>
              <div class="pd_right">
                <div class="pd_name">{{ cart.product.title }}</div>
                <div class="pd_num"></div>
                <div class="pd_price">{{ cart.product.price }}</div>
                <div class="pd_remove"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <RouterLink></RouterLink> -->
</template>

<script>
import '@/assets/sass/page/products.sass'
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      carts: []
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
    },
    getCarts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.carts = res.data.data.carts
          console.log('購物車列表:', res.data.data.carts)
        })
    }
  },
  mounted () {
    this.getProducts()
    this.getCarts()
  }
}
</script>
