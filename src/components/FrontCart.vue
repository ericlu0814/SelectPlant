<template>
  <div class="cart">
    <div class="cart_bg"></div>
    <div class="cart_box">
      <div class="cart_wrap">
        <div class="cart_head">
          <div class="title">購物車</div>
          <p>以下為您目前選購的商品，別忘了前往結賬，完成本次消費！</p>
        </div>
        <div class="cart_list">
          <!-- {{ cart.product }} -->
          <div class="cart_item" v-for="cart in carts" :key="cart.id">
            <div class="pd_remove">
              <div class="btn_remove" @click="removeProduct(cart)"></div>
            </div>
            <div class="pd_img">
              <img :src="cart.product.imageUrl" alt="">
            </div>
            <div class="pd_right">
              <div class="pd_name">{{ cart.product.title }}</div>
              <div class="pd_num">{{ cart.qty }} 棵</div>
              <div class="pd_price">{{ cart.product.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getCarts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.carts = res.data.data.carts
          console.log('購物車列表:', res.data.data.carts)
        })
    },
    removeProduct (cart) {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${cart.id}`
      console.log(cart.id)
      this.$http.delete(url)
        .then(res => {
          console.log(res)
          alert('已將商品移除')
          this.getCarts()
          // console.log('購物車列表:', res.data.data.carts)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
