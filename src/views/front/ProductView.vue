<template>
  <div>
    <section class="productDtBn">
      <div class="bn_back">
        <RouterLink to="/products">返回產品列表頁</RouterLink>
      </div>
      <div class="bn_wrap">
        <div class="bn_left">
          <!-- :autoplay="{
              delay: 5000
            } " -->
          <Swiper class="bn_mainPic"
            :modules="modules" effect="fade"
            :speed="800"
            :spaceBetween="5"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            ref="bannerSwiper">
            <swiper-slide v-for="(img, i) in product.imagesUrl" :key="img + i">
              <img :src="product.imagesUrl[i]" :alt="product.title+i">
            </swiper-slide>
          </Swiper>
          <Swiper class="bn_subPic"
            @swiper="setThumbsSwiper"
            :spaceBetween="5"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :speed="800"
            :autoplay="{
              delay: 5000
            }"
            :modules="modules"
            ref="bannerSwiper0">
            <swiper-slide v-for="(img, i) in product.imagesUrl" :key="img + i">
              <img :src="product.imagesUrl[i]" :alt="product.title+i">
            </swiper-slide>
          </Swiper>
        </div>
        <div class="bn_right"></div>
      </div>
    </section>
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
  </div>
</template>

<script>
import { EffectFade, Autoplay, Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import '@/assets/sass/page/product_detail.sass'
import { RouterLink } from 'vue-router'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: [],
      modules: [EffectFade, Autoplay, Pagination, FreeMode, Navigation, Thumbs],
      thumbsSwiper: ''
    }
  },
  components: {
    RouterLink,
    Swiper,
    SwiperSlide
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
    },
    setThumbsSwiper (swiper) {
      this.thumbsSwiper = swiper
    }
  },
  mounted () {
    this.getProduct()
  }
}

</script>
