<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-13 15:16:41
 * @LastEditTime: 2021-12-13 15:42:20
 * @Description: Modify here please
-->
<script setup></script>

<template>
  <div class="flex space-x-20">
    <div class="w-2/3">
      <img
        class="w-full"
        src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/collections/img_hattanso_1080x.jpg"
        alt=""
      />
    </div>
    <div class="w-1/3 flex justify-center items-center">
      <div class="space-y-10 pr-20">
        <h3 class="text-center text-xl border-b py-10 text-color-primary">
          富久長の酒
        </h3>
        <h2 class="text-center text-2xl">富久長のフラグシップ</h2>
        <h1 class="text-center text-5xl text-color-primary">HATTANSO</h1>
        <p>
          広島県を代表する八反系最古の在来品種、八反草100％で醸しました。草のような野趣あふれる在来種の個性をそのまま引き出したいと、富久長が長年取り組んできたフラッグシップです。旨みたっぷりなのに見事なまでにスカッと切れるあと口のよさは、八反草ならでは。唯一無二の個性をお楽しみください。
        </p>
      </div>
    </div>
  </div>
  <!-- 产品 -->
  <div class="flex flex-wrap mt-14 md:px-20">
    <div
      class="md:w-1/4 px-5 md:px-0 w-1/2"
      v-for="item in 9"
      :key="'product' + item"
    >
      <router-link class="px-5 block" :to="'/collections/product/detail/' + item">
        <img
          src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_900x.jpg"
          alt=""
        />

        <h3 class="text-xs md:text-base">
          富久長 八反草 純米吟醸 ハイブリッド生酛
        </h3>
        <p class="text-color-primary text-xs md:text-base font-semibold py-2">
          2,200 円（税込）
        </p>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
