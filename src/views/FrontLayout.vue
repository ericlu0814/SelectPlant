<template>
  <div>
    <header>
      <div class="hd_wrap">
        <router-link to="/" class="hd_logo">
          <img src="/logoB_200x35.svg" alt="">
        </router-link>
        <div class="hd_unit">
          <router-link to="/about">關於頁面</router-link>
          <router-link to="/products">產品頁面</router-link>
          <!-- <router-link to="/admin">後台</router-link> -->
        </div>
        <div class="hd_icon">
          <!-- <router-link to="/" class="icon-member"></router-link> -->
          <router-link to="/cart" class="icon-cart"></router-link>
          <!-- <router-link to="/" class="icon-search"></router-link> -->
        </div>
      </div>
    </header>
    <!-- <hr> -->
    <div class="cont">
      <RouterView></RouterView>
    </div>
    <footer>
      <div class="ft_wrap">
        <div class="ft_top">
          <div class="ft_unit">
            <router-link to="/about">關於頁面</router-link>
            <router-link to="/products">產品頁面</router-link>
          </div>
          <div class="ft_info">
            <div class="ft_add">台中市西屯區214弄102號</div>
            <div class="ft_tel">+886 4 1234 5678</div>
            <div class="ft_email">example@urbangarden.com</div>
            <div class="ft_icon">
              <a href="javascript:;" class="icon-fb"></a>
              <a href="javascript:;" class="icon-line"></a>
              <a href="javascript:;" class="icon-twitter"></a>
              <a href="javascript:;" class="icon-wechat"></a>
              <a href="javascript:;" class="icon-ig"></a>
              <a href="javascript:;" class="icon-youtube"></a>
            </div>
          </div>
        </div>
        <div class="ft_bot">
          <div class="ft_logo">
            <img src="/logoW_200x35.svg" alt="Urban Garden">
          </div>
          <div class="ft_copyright">
            <p>本網站僅供個人作品使用，不提供商業用途</p>
            <p>
              © 2023 urbangarden  |  <router-link to="/admin">後台登入</router-link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import { RouterView } from 'vue-router'

export default {
  // components: {
  //   RouterView
  // }
}
</script>
