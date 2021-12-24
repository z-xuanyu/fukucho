<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-21 16:43:20
 * @LastEditTime: 2021-12-22 16:20:09
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref } from "vue";
import InputNumber from "/@/components/InputNumber.vue";
import { NDatePicker, DatePickerProps } from "naive-ui";

type DatePickerThemeOverrides = NonNullable<DatePickerProps["themeOverrides"]>;

const datePickerThemeOverrides: DatePickerThemeOverrides = {
  peers: {
    Input: {
      borderHover: "1px solid #000",
      borderRadius: "0px",
      caretColor: "#000",
      borderFocus: "1px solid #000",
      loadingColor: "#000",
      boxShadowFocus: "0 0 0 0px #000",
    },
  },
};
const inputNumberVal = ref(1);
</script>

<template>
  <div class="px-5 py-10 mx-auto md:py-20 max-w-7xl">
    <div class="justify-between md:flex">
      <div class="w-full md:flex-1">
        <div class="flex justify-between pb-5 border-b">
          <h3 class="text-xs font-semibold">カート</h3>
          <router-link
            class="p-2 px-4 font-semibold border btn text-color-primary border-color-primary"
            to="/cart"
          >
            お買い物を続ける
          </router-link>
        </div>
        <!-- 清单列表 -->
        <ul>
          <li
            v-for="item in 3"
            :key="'cart' + item"
            class="flex items-center justify-between py-5 border-b"
          >
            <div class="relative">
              <router-link to="/cart">
                <img
                  class="mr-10 w-28"
                  src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_180x.jpg?v=1632964888"
                  alt=""
                />
              </router-link>
              <p
                class="absolute text-xs text-center transform -translate-x-1/2 cursor-pointer md:bottom-0 -bottom-3 left-1/2 md:-right-6 md:left-full md:translate-x-0"
              >
                削除
              </p>
            </div>
            <div class="justify-between w-full md:flex">
              <div class="mr-10 space-y-3">
                <p class="font-semibold">
                  八反草・山田錦 純米吟醸 直汲み 生酒 2本セット
                </p>
                <p class="text-xs text-gray-600">容量: 720ml</p>
              </div>
              <div class="flex items-center justify-between flex-1">
                <p class="flex-1 py-3 font-semibold md:py-0">
                  3,520円 （税込）
                </p>
                <div>
                  <InputNumber v-model="inputNumberVal" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full md:pl-10 md:w-80">
        <div class="flex items-center justify-between py-3 border-b">
          <span class="font-semibold">合計</span>
          <p>
            <span class="text-3xl font-semibold text-color-primary">
              7,040
            </span>
            <span class="text-xs">円(税込)</span>
          </p>
        </div>
        <p class="py-5">備考欄</p>
        <p class="text-xs leading-6 text-gray-600">
          ギフト包装の商品をご注文のお客様で熨斗がご入用の方は対象商品、表書き、名入れ、内熨斗・外熨斗の指定を下記にご記入ください。
        </p>
        <textarea
          class="w-full p-3 my-5 border outline-none focus:ring-1 ring-black"
          cols="30"
          rows="5"
        ></textarea>
        <p class="font-semibold">配送日時指定</p>
        <div class="py-2">
          <p class="py-2 text-xs">配送希望日</p>
          <NDatePicker
            :theme-overrides="datePickerThemeOverrides"
            type="date"
            placeholder="希望しない"
            size="large"
            clearable
          />
        </div>
        <div class="py-2">
          <p class="py-2 text-xs">配送希望時間</p>
          <select class="w-full p-3 border outline-none select-none">
            <option value="1">14-16时</option>
            <option value="2">16-18时</option>
            <option value="3">18-20时</option>
          </select>
        </div>

        <router-link
          class="
            block
            my-5
            w-full
            py-3.5
            text-center text-white
            bg-color-primary
          "
          to="/checkouts"
        >
          レジへ進む
        </router-link>
        <p class="text-xs">送料は決済画面で計算されます。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn:hover {
  background-color: #a58c78;
  color: white;
}
</style>
