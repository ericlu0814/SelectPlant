<template>
  <div class="home">
    <!-- 這是首頁 -->
    <section class="homebanner">
      <Swiper
        :modules="modules" effect="fade"
        :loop="true"
        :speed="800"
        :autoplay="{
          delay: 5000
        }"
        :pagination="{
          el: '.homebanner .swiper-pagination',
          type: 'fraction',
        }"
        ref="bannerSwiper">
        <swiper-slide v-for="bannerSlide in bannerSlides" :key="bannerSlide.id" >
          <div class="bn_wrap">
            <div class="bn_left">
              <div class="bn_bg" :style="{ backgroundImage: `url(${bannerSlide.bgUrl})` }"></div>
            </div>
            <div class="bn_right" :style="{ backgroundColor: bannerSlide.productBg }">
              <div class="right_wrap">
                <div class="home_title" :class="{ 'white' : bannerSlide.wordColor == 'white' }">
                  <div class="title">{{ bannerSlide.title }}</div>
                  <div class="sub">{{ bannerSlide.sub }}</div>
                </div>
                <div class="bn_pd">
                  <img :src="bannerSlide.productUrl" alt="">
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
      <div class="pagination">
        <div class="wrap">
          <div class="swiper-pagination"></div>
          <!-- <div class="swiper-pagination-current"></div>
          <div class="line"></div>
          <div class="swiper-pagination-total"></div> -->
        </div>
      </div>
      <a href="javascript:;" class="btn_goDown">
        <span class="icon-arrow_down"></span>
      </a>
    </section>
    <!-- <h1>Hello, This is Home Page.</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <hr> -->
    <!-- <HelloWorld /> -->
    <!-- <section class="home_news">
        <div class="news_block">
        <div class="home_title aos-init aos-animate" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
            <div class="title_head">NEWS</div>
            <div class="title_sub">最新消息</div>
            <p>追蹤我們的最新資訊，活動好禮不間斷!</p>
        </div>
        <div class="swiper-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
            <div class="news_list swiper-wrapper">
                <div class="swiper-slide"><a class="news_item" href="javascript:;">
                <div class="news_bg">
                    <div class="news_img"><img src="/upload/2023_09_195/20230919104539j2mymmWCJ2.png" alt="狗狗洗澡小撇步"></div>
                    <div class="hover"><span class="icon-track"></span>
                    <p>Find more</p>
                    </div>
                </div>
                <div class="news_detail">
                    <div class="news_data">09.19</div>
                    <div class="news_title">狗狗洗澡小撇步</div>
                    <p></p>
                </div>
                </a></div>
                <div class="swiper-slide"><a class="news_item" href="javascript:;">
                <div class="news_bg">
                    <div class="news_img"><img src="/upload/2023_09_055/20230905152737y60bc6l4B2.png" alt="狗狗的毛"></div>
                    <div class="hover"><span class="icon-track"></span>
                    <p>Find more</p>
                    </div>
                </div>
                <div class="news_detail">
                    <div class="news_data">09.05</div>
                    <div class="news_title">狗狗的毛</div>
                    <p></p>
                </div>
                </a></div>
                <div class="swiper-slide swiper-slide-duplicate-prev"><a class="news_item" href="javascript:;">
                <div class="news_bg">
                    <div class="news_img"><img src="/upload/2023_08_175/2023081714173684kp89mrs2.png" alt="雙扣牽繩散步訓練"></div>
                    <div class="hover"><span class="icon-track"></span>
                    <p>Find more</p>
                    </div>
                </div>
                <div class="news_detail">
                    <div class="news_data">08.17</div>
                    <div class="news_title">雙扣牽繩散步訓練</div>
                    <p></p>
                </div>
                </a></div>
                </div>
            <div class="btn_swiper icon-next swiper_prev" tabindex="0" role="button" aria-label="Previous slide"></div>
            <div class="btn_swiper icon-next swiper_next" tabindex="0" role="button" aria-label="Next slide"></div>
        </div>
        </div>
    </section> -->
    <section class="homepd">
      <div class="homepd_wrap">
        <div class="home_head waypoint show">
          <div class="subtitle">Hot Products</div>
          <h2 class="title">精選商品推薦</h2>
          <div class="p">對於初次挑選XXX的您，我們推薦以下精選商品，<br>點選您有興趣的品項，前往商品頁面一探究竟吧</div>
        </div>
        <div class="pd_block waypoint show">
          <Swiper
            :breakpoints="{
              '640': {
                slidesPerView: 1,
                // spaceBetween: 0,
              },
              '768': {
                slidesPerView: 2,
                // spaceBetween: 30,
              },
              '1024': {
                slidesPerView: 4,
                // spaceBetween: 30,
              },
            }"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <div class="pd_li">
                <RouterLink :to="`/product/${product.id}`" class="pd_wrap">
                  <div class="pd_pic">
                    <img class="swiper-lazy swiper-lazy-loaded" :alt="product.title" :src="product.imageUrl">
                    <div class="pd_dec">
                      <div class="pd_p">{{ product.description }}</div>
                    </div>
                    <div class="pd_btn">
                      <div class="btn_more">
                        <p>了解更多</p>
                        <span class="icon-arrow_right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="pd_title">
                    <div class="title">{{ product.title }}</div>
                    <div class="tag">{{ product.category }}</div>
                  </div>
                </RouterLink>
              </div>
            </swiper-slide>
            <!-- <div class="swiper_prev icon-arrow_left" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="false"></div>
            <div class="swiper_next icon-arrow_right" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div> -->
          </swiper>
        </div>
      </div>
    </section>
    <!-- <section class="home_news">
      <div class="news_block">
        <div class="home_title aos-init aos-animate" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
          <div class="title_head">NEWS</div>
          <div class="title_sub">最新消息</div>
          <p>追蹤我們的最新資訊，活動好禮不間斷!</p>
        </div>
        <div class="swiper-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
          <div class="news_list swiper-wrapper">
            <div class="swiper-slide">
              <a class="news_item" href="https://www.perfectcompanion.com.tw/tw/news/charity/135">
                <div class="news_bg">
                  <div class="news_img"><img src="/upload/2023_09_195/20230919104539j2mymmWCJ2.png" alt="狗狗洗澡小撇步"></div>
                  <div class="hover"><span class="icon-track"></span>
                    <p>Find more</p>
                  </div>
                </div>
                <div class="news_detail">
                  <div class="news_data">09.19</div>
                  <div class="news_title">狗狗洗澡小撇步</div>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { HomeData } from '@/data/home.js'
import '@/assets/sass/page/home.sass'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      bannerSlides: HomeData.banner,
      products: [],
      modules: [EffectFade, Autoplay, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
          // console.log('商品列表:', res.data.products)
        })
    },
    productSwiper () {
      const $swiperoptions = {
        el: '.homebanner .swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            '<div class="line"></div>' +
            '<span class="' + totalClass + '"></span>'
        }
      }
      const $swiperLine = document.querySelectorAll('.homebanner .line')
      const init = () => {
        $swiperLine.addClass('on')
      }
      const slideChangeTransitionStart = () => {
        $swiperLine.removeClass('on')
      }
      const slideChangeTransitionEnd = () => {
        $swiperLine.addClass('on')
      }
      return {
        // onSwiper,
        // onSlideChange
        $swiperoptions,
        init,
        slideChangeTransitionStart,
        slideChangeTransitionEnd
      }
    }
  },
  mounted () {
    this.getProducts()
    this.productSwiper()
  }
}
</script>

<style scoped>
</style>
