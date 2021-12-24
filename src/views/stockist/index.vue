<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-21 11:31:30
 * @LastEditTime: 2021-12-21 12:16:55
 * @Description: Modify here please
-->

<script setup lang="ts">
import { ref } from "vue";

const tabActive = ref<string>("domestic");
const tabOptions = ref([
  {
    name: "国内",
    key: "domestic",
  },
  {
    name: "海外",
    key: "abroad",
  },
]);

function hanleTabClick(key: string): void {
  tabActive.value = key;
}
</script>

<template>
  <h3
    class="
      max-w-xs
      font-semibold
      py-5
      mt-10
      border-b
      text-color-primary
      mx-auto
      text-center text-xl
    "
  >
    取扱店
  </h3>
  <h2 class="text-center py-20 text-3xl">国内・海外 取扱店一覧</h2>
  <p class="max-w-2xl mx-auto">
    富久長の品質を管理し、お客様に届けてくださる全国の酒販店と、世界の販売拠点となっている輸出会社をご紹介します。在庫状況につきましては、各社へお問い合わせください。
  </p>
  <div class="w-full flex my-20 border-b tabs">
    <div
      v-for="item in tabOptions"
      :key="item.key"
      @click="hanleTabClick(item.key)"
      class="
        w-1/2
        text-color-primary
        tab-pane
        cursor-pointer
        p-3
        text-2xl text-center
      "
      :class="item.key == tabActive ? 'border-b-2 border-color-primary' : ''"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.tabs .tab-pane:hover {
  border-bottom: 2px solid #a58c78;
}
</style>
