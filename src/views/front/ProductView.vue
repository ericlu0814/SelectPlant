<template>
  <div>
    <section class="productDtBn">
      <div class="bn_wrap">
        <div class="bn_left">
          <!-- :autoplay="{
              delay: 5000
            } " -->
          <div class="pd_onePic" v-if="!Array.isArray(product.imagesUrl)">
            <img :src="product.imageUrl" :alt="product.title">
          </div>
          <div class="pd_morePic" v-else>
            <div class="pd_mainPic">
              <Swiper
                :modules="modules" effect="fade"
                :speed="800"
                :spaceBetween="0"
                :navigation="{
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev'
                }"
                :thumbs="{ swiper: thumbsSwiper }"
                ref="bannerSwiper">
                <swiper-slide v-for="(img, i) in product.imagesUrl" :key="img + i">
                  <img :src="product.imagesUrl[i]" :alt="product.title+i">
                </swiper-slide>
              </Swiper>
            </div>
            <div class="pd_subPic">
              <Swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="5"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :speed="800"
                :modules="modules"
                :breakpoints="{
                  '768': {
                    slidesPerView: 5,
                  },
                }"
                ref="bannerSwiper0">
                <swiper-slide v-for="(img, i) in product.imagesUrl" :key="img + i">
                  <img :src="product.imagesUrl[i]" :alt="product.title+i">
                </swiper-slide>
              </Swiper>
            </div>
            <div class="swiper_btn">
              <div class="swiper-prev icon-arrow_top"></div>
              <span class="line"></span>
              <div class="swiper-next icon-arrow_down"></div>
            </div>
          </div>
        </div>
        <div class="bn_right">
          <div class="right_wrqp">
            <div class="bn_nav">
              <RouterLink to="/products">商品專區</RouterLink> /
              {{ product.category }}
            </div>
            <div class="bn_head">
              <div class="pd_title">
                <div class="pd_tag">{{ product.category }}</div>
                <div class="pd_name">{{ product.title }}</div>
              </div>
              <div class="pd_price">
                售價
                <span>
                  NT$ {{ product.price }}
                </span>
              </div>
              <div class="pd_des">
                {{ product.description }}
              </div>
              <div class="pd_select">
                <p>選購數量</p>
                <div class="btn_pdQty">
                  <div class="num_plus" @click="qtyPlus"></div>
                  <span>{{ productQty }}</span>
                  <div class="num_minus disable" @click="qtyMinus" ref="minus"></div>
                </div>
                <div class="pd_btn">
                  <div class="btn_common" @click="addCart">加入購物車</div>
                  <div class="icon-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="productDtContent">
      <div class="content_wrap">
        <div class="sub_head">
          <div class="sub">About Product</div>
          <div class="title">商品描述</div>
        </div>
        <div class="content_ct">{{ product.content }}</div>
      </div>

    </section>
    <section class="productDtRelate">
      <div class="relate_wrap">
        <div class="sub_head">
          <div class="sub">Related products</div>
          <div class="title">相關商品</div>
        </div>
      </div>

    </section>
    <table class="table align-middle products" style="display:none;">
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

import '@/assets/sass/page/product.sass'
import { RouterLink } from 'vue-router'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      product: [],
      ProductIndex: '',
      modules: [EffectFade, Autoplay, Pagination, FreeMode, Navigation, Thumbs],
      thumbsSwiper: '',
      productQty: 1,
      carts: []
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
          this.getProducts()
          console.log('商品內頁:', res.data.product)
        })
    },
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
          console.log('商品列表:', res.data.products)
          this.findProductIndex()
        })
    },
    findProductIndex () {
      this.productIndex = this.products.findIndex(item => item.id === this.product.id)
      console.log(this.productIndex)
    },
    setThumbsSwiper (swiper) {
      this.thumbsSwiper = swiper
    },
    qtyPlus () {
      this.productQty++
      this.$refs.minus.classList.remove('disable')
    },
    qtyMinus () {
      if (this.productQty <= 2) {
        this.productQty--
        this.$refs.minus.classList.add('disable')
      } else {
        this.productQty--
      }
    },
    addCart () {
      const data = {
        product_id: this.product.id,
        qty: this.productQty
      }
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      this.$http.post(url, { data })
        .then(res => {
          // this.carts = res.data.products
          console.log('購物車列表:', res.data)
          alert('已加入購物車')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}

</script>
