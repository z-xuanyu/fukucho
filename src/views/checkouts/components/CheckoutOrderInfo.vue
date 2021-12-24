<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-23 14:39:18
 * @LastEditTime: 2021-12-23 14:41:00
 * @Description: Modify here please
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <!-- 清单商品列表 -->
    <ul class="space-y-5">
      <li
        class="flex items-center justify-between"
        v-for="item in 2"
        :key="item"
      >
        <div class="flex items-center">
          <div class="relative w-20">
            <img
              class="w-20 border rounded-lg"
              src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_junmaiginjo_nama_small.jpg?v=1637731294"
              alt=""
            />
            <span
              class="
                absolute
                w-5
                h-5
                font-semibold
                text-center text-white
                bg-gray-500
                rounded-full
                -right-2
                -top-2
              "
              >1</span
            >
          </div>
          <div class="ml-5">
            <p>富久長 八反草 純米吟醸 直汲み 生酒</p>
            <p class="py-2 text-xs text-gray-500">720ml</p>
          </div>
        </div>
        <div class="text-lg font-semibold">￥1,760</div>
      </li>
    </ul>
    <!-- 小计 -->
    <div class="py-5 pl-2 my-5 border-t border-b">
      <p class="flex justify-between">
        <span class="text-gray-500">小計</span>
        <span class="text-lg font-semibold">￥8,800</span>
      </p>
      <p class="flex justify-between mt-2 text-gray-500">
        <span class="flex items-center"
          >配送<Icon
            width="15"
            class="ml-1 cursor-pointer"
            icon="akar-icons:question-fill"
        /></span>
        <span class="text-xs">次のステップで計算されます</span>
      </p>
    </div>
    <div class="flex justify-between pl-2 text-gray-500">
      <span>合計</span>
      <p>JPY <span class="text-2xl font-semibold text-black">￥8,800</span></p>
    </div>
  </div>
</template>

<style scoped></style>
