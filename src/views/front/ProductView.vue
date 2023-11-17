<template>
  這是單一產品列表
  <RouterLink to="/products">返回產品列表頁</RouterLink>
  <table class="table align-middle products">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="width: 200px">
          <div v-if="product.imageUrl" style="height: 100px; background-size: cover; background-position: center;"
          :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"></div>
        </td>
        <td>
          {{ product.title }}
        </td>
        <td>
          <div class="h5" v-if="product.origin_price == product.price">{{ product.title }} 元</div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <!-- <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-outline-secondary" @click="openModal(product.id)"> -->
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              <!-- 查看更多
            </button>
            <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)"> -->
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              <!-- 加到購物車
            </button>
          </div> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`
      this.$http.get(url)
        .then(res => {
          this.product = res.data.product
          console.log('商品列表:', res.data.product)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}

</script>
