<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 17:26:07
 * @LastEditTime: 2021-12-10 16:41:01
 * @Description: Modify here please
-->
<script setup></script>

<template>
  <div class="relative w-full">
    <h2 class="pb-10 text-4xl text-center md:py-20 text-color-primary">
      Online Shop
    </h2>
    <div class="relative w-full online-shop-img">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div
        class="absolute z-10 text-white transform md:text-center md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 left-10 top-1/2"
      >
        <h2 class="py-5 text-2xl md:py-0 md:text-5xl">オンラインショップ</h2>
        <div class="text-sm leading-6">
          <p>富久長のお酒のほか</p>
          <p>おすすめの酒器やセット商品などを</p>
          <p>ご注文いただけます。</p>
        </div>
        <button class="p-2 px-4 mt-6 text-sm border btn">
          すべての商品を見る
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.online-shop-img {
  height: 500px;
  background-image: url("https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_5_seasonal_resize_1080x.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.btn:hover {
  background: white;
  color: black;
}
</style>
