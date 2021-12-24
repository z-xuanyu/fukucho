<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 16:55:22
 * @LastEditTime: 2021-12-24 11:59:58
 * @Description: Modify here please
-->
<script setup>
import FButton from "/@/components/FButton.vue";
</script>

<template>
  <div class="w-full px-5 xl:px-32 2x:px-44">
    <h2 class="text-4xl text-center md:py-10 text-color-primary">Contents</h2>
    <div class="py-5 md:flex md:space-x-20 md:py-14">
      <div class="w-full md:w-1/2" v-sr-re-box="{ reset: false }">
        <img
          class="w-full"
          src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukuucho_web_top_slide_4_resize_1080x.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center w-full md:w-1/2">
        <h2 class="py-8 text-2xl md:py-10 md:text-4xl" v-sr-re-box="{ delay: 600, reset: false }">富久長の想い</h2>
        <p class="text-sm md:text-base" v-sr-re-box="{ delay: 650, reset: false }">
          土地のこと、造りのこと、米のこと、そこに宿る想い、富久長が大切にしていること。
        </p>
        <router-link to="/philosophy">
          <FButton v-sr-re-box="{ delay: 700, reset: false }" />
        </router-link>
      </div>
    </div>

    <div class="py-5 md:flex-row-reverse md:flex md:py-14">
      <div class="w-full pl-20 md:w-1/2" v-sr-re-box="{ reset: false }">
        <img
          class="w-full"
          src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_4_longseller_resize_1080x.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center w-full md:w-1/2">
        <h2 class="py-8 text-2xl md:text-4xl md:py-10" v-sr-re-box="{ delay: 600, reset: false }">富久長の酒</h2>
        <p class="text-sm md:text-base" v-sr-re-box="{ delay: 650, reset: false }">
          富久長が唯一醸す八反草のお酒や海風土シリーズなど富久長のラインナップをご紹介します。
        </p>
        <router-link to="/collections">
          <FButton v-sr-re-box="{ delay: 700, reset: false }" />
        </router-link>
        
      </div>
      
    </div>


    <div class="py-5 md:flex md:space-x-20 md:py-14">
      <div class="w-full md:w-1/2" v-sr-re-box="{ reset: false }">
        <img
          class="w-full"
          src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukuucho_web_top_slide_4_resize_1080x.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center w-full md:w-1/2">
        <h2 class="py-8 text-2xl md:py-10 md:text-4xl" v-sr-re-box="{ delay: 600, reset: false }">取扱店</h2>
        <p class="text-sm md:text-base" v-sr-re-box="{ delay: 650, reset: false }">
          全国の酒販店と、世界の販売拠点となっている輸出会社をご紹介します。
        </p>
        <router-link to="/stockist">
          <FButton v-sr-re-box="{ delay: 700, reset: false }" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
