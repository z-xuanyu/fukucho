<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-22 15:14:19
 * @LastEditTime: 2021-12-22 15:21:58
 * @Description: Modify here please
-->
<script setup lang="ts"></script>

<template>
  <div class="w-1/3 mx-auto mb-10 md:mb-20">
    <h2 class="py-5 mt-8 font-semibold text-center border-b text-color-primary">
      オンラインショップ
    </h2>
  </div>
  <h1 class="text-2xl text-center text-color-primary">すべての商品</h1>


  <!-- 产品 -->
    <div class="flex flex-wrap mt-10 md:px-20">
      <div
        class="w-1/2 px-5 py-5 md:w-1/4 md:px-0"
        v-for="item in 20"
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
</template>

<style scoped></style>
