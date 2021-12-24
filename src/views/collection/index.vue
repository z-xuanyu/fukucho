<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-13 12:07:24
 * @LastEditTime: 2021-12-23 15:02:24
 * @Description: Modify here please
-->
<script setup>
import { ref } from "vue";

const productData = ref([
  {
    id: 1,
    title: "富久長のフラグシップ",
    bigTitle: "HATTANSO",
    img: "https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_1_hattanso_resize_a7ce848a-3472-48e9-b847-61dfa2ce92f3_1080x.jpg",
  },
  {
    id: 2,
    title: "牡蠣や魚介のペアリングに",
    bigTitle: "SEAFOOD",
    img: "https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_2_seafood_resize_1080x.jpg?",
  },
  {
    id: 3,
    title: "米のカタチで酒をデザインする",
    bigTitle: "HENPEI & GENKEI",
    img: "https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_3_henpei_genkei_resize_1080x.jpg",
  },
  {
    id: 4,
    title: "ずっと愛され続ける、デイリー富久長",
    bigTitle: "LONG SELLER",
    img: "https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukuucho_top_slide_6_resize_c6c8b6c7-38d9-4a7f-b9b1-77fe26a179e5_1080x.jpg",
  },
]);
</script>

<template>
  <div class="w-1/3 mx-auto mb-10 md:mb-24">
    <h1 class="py-5 mt-8 font-semibold text-center border-b text-color-primary" v-sr-re-box="{ reset: false, delay: 50 }">
      富久長の酒
    </h1>
  </div>

  <!-- 产品卡片 -->
  <div class="py-5 md:py-10" v-for="i in productData" :key="'crad' + i.id">
    <div class="md:flex" v-sr-re-box="{ reset: false, delay: 100 }">
      <div class="flex items-center justify-center w-full md:w-1/2">
        <div class="space-y-5 text-center">
          <h4>{{ i.title }}</h4>
          <h2 class="text-6xl text-color-primary">{{ i.bigTitle }}</h2>
        </div>
      </div>
      <div class="w-full mt-8 md:w-1/2 md:mt-0">
        <router-link :to="'/collections/product/' + i.id">
          <img :src="i.img" alt="" />
        </router-link>
      </div>
    </div>
    <!-- 产品 -->
    <div class="flex flex-wrap mt-10 md:px-20">
      <div
        class="w-1/2 px-5 md:w-1/4 md:px-0"
        v-for="item in 4"
        :key="'product' + item"
      >
        <router-link :to="'/collections/product/detail/'+ item">
          <img
          src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_900x.jpg"
          alt=""
        />
        <h3 class="text-xs md:text-base">
          富久長 八反草 純米吟醸 ハイブリッド生酛
        </h3>
        <p class="py-2 text-xs font-semibold text-color-primary md:text-base">
          2,200 円（税込）
        </p>
        </router-link>
      </div>
    </div>
    <p class="py-20 text-center">
      <a class="underline hover:text-yellow-800" href="#">すべての商品を見る</a>
    </p>
  </div>
</template>

<style scoped></style>
