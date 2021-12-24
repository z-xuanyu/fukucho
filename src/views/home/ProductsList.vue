<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 17:51:59
 * @LastEditTime: 2021-12-24 12:06:11
 * @Description: Modify here please
-->
<script setup>
import { ref } from 'vue';
 const productData = ref([
     {
         id: 1,
         title: "プレゼントキャンペーン 『あきつの酒』徳利",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_web_campaign_3_540x.jpg',
         price: '1,300'
     },
     {
         id: 2,
         title: "プレゼントキャンペーン 有田焼酒器セット",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_web_campaign_1_540x.jpg',
         price: '1,300'
     },
     {
         id: 3,
         title: "八反草・山田錦 純米吟醸 しぼりたて 直汲み 生酒 2本セット",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_bottle_set_junmaiginjo_nama_540x.jpg',
         price: '1,300'
     },
     {
         id: 4,
         title: "富久長 八反草 純米吟醸 直汲み 生酒",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_junmaiginjo_nama_540x.jpg',
         price: '1,300'
     },
     {
         id: 5,
         title: "富久長 山田錦 純米吟醸 直汲み 生酒",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_yamadanishiki_junmaiginjo_nama_540x.jpg',
         price: '1,300'
     },
     {
         id: 6,
         title: "プレゼントキャンペーン 『あきつの酒』徳利",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_540x.jpg',
         price: '1,300'
     },
     {
         id: 7,
         title: "プレゼントキャンペーン 『あきつの酒』徳利",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmai_c3720d1c-9bfc-4629-a54f-d56e31ee7a43_540x.jpg',
         price: '1,300'
     },
     {
         id: 8,
         title: "プレゼントキャンペーン 『あきつの酒』徳利",
         img: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_henpei_540x.jpg',
         price: '1,300'
     }
 ])

</script>

<template>
  <div class="w-full px-5 xl:px-32 2xl:px-44">
    <h2 class="pt-20 text-2xl font-semibold text-center md:pt-32 text-color-primary">
      おすすめ商品
    </h2>
    <div class="flex flex-wrap">
      <div class="w-1/2 py-5 md:py-10 xl:px-2 2xl:px-16 md:w-1/4" v-for="item in productData" :key="'product'+ item.id">
        <img
          :src="item.img"
          alt=""
        />
        <p class="p-5 text-xs font-semibold md:text-base">{{ item.title }}</p>
        <p class="px-5">
            <span class="text-sm font-semibold text-color-primary">￥{{ item.price }}円（税込）</span>
        </p>
      </div>
    </div>
    <p class="py-20 text-center">
      <router-link class="border-b border-gray-800" to="/">
        すべてのおすすめ商品を見る
      </router-link>
    </p>
  </div>
</template>

<style scoped></style>
