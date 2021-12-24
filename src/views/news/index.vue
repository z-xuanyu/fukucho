<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-10 09:52:01
 * @LastEditTime: 2021-12-23 14:55:38
 * @Description: Modify here please
-->
<script setup></script>

<template>
  <div class="w-1/3 mx-auto">
    <h1 class="text-color-primary font-semibold text-center py-5 mt-8 border-b" v-sr-re-box="{ reset: false, delay: 200 }">
      お知らせ一覧
    </h1>
  </div>
  <div class="md:w-1/2 px-5 w-full my-20 mx-auto">
    <ul v-sr-re-box="{ reset: false, delay: 200 }">
      <li
        class="py-5 leading-10 border-b"
        v-for="item in 3"
        :key="'news' + item"
      >
        <p class="text-sm text-color-primary">
          <span>2021.11.24</span
          ><span class="p-1 ml-3 text-xs border">キャンペーン</span>
        </p>
        <h3 class="pt-2 text-xs md:font-bold">
          ウェブサイトリニューアル記念 プレゼントキャンペーンを実施中！
        </h3>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
