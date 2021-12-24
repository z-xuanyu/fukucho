<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-22 16:06:36
 * @LastEditTime: 2021-12-23 14:53:52
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import CheckoutInput from "./components/CheckoutInput.vue";
import CheckoutSelect from "./components/CheckoutSelect.vue";
import CheckoutOrderInfo from './components/CheckoutOrderInfo.vue';


const emailVal = ref<string>("812006298@qq.com");

// 手機端是否顯示訂單信息
const isShowOrderInfo = ref(false)
</script>
<template>
  <div class="flex">
    <div class="flex justify-end 2xl:w-3/5 w-full border-r lg:px-20">
      <div
        class="
          flex flex-col
          justify-between
          2xl:w-1/2
          w-full
          min-h-screen
          lg:pt-16
          pt-5
        "
      >
        <div>
          <h1 class="text-3xl md:px-52 px-5 lg:px-0 text-gray-500">
            富久長｜<span class="text-black">FUKUCHO</span>
          </h1>
          <div
             @click="isShowOrderInfo = !isShowOrderInfo"
            class="
             cursor-pointer
              items-center
              bg-gray-100
              border-t border-b
              py-5
              mt-5
              md:px-52
              px-5
              lg:px-0 lg:hidden
              flex
              text-color-primary
            "
          >
            <Icon class="cursor-pointer" icon="bi:cart" width="20" />
            <span class="mx-2">注文概要・クーポン入力</span>
            <Icon icon="bytesize:chevron-bottom" />
          </div>
          <div class="border-b lg:hidden transition-all transform duration-500 max-h-0 overflow-hidden bg-gray-100" :class="isShowOrderInfo?'p-5 md:px-52 max-h-screen':''">
            <CheckoutOrderInfo />
          </div>
          <div class="md:px-52 px-5 lg:px-0">
            <ul class="flex py-5 space-x-3 text-xs">
              <li class="flex items-center space-x-1">
                <span class="cursor-pointer text-color-primary">カート</span>
                <Icon icon="akar-icons:chevron-right" />
              </li>
              <li class="flex items-center space-x-1">
                <span class="text-black">情報</span>
                <Icon icon="akar-icons:chevron-right" />
              </li>
              <li class="flex items-center space-x-1">
                <span class="text-gray-500">配送</span>
                <Icon icon="akar-icons:chevron-right" />
              </li>
              <li class="flex items-center space-x-1">
                <span class="text-gray-500">支払い</span>
              </li>
            </ul>
            <div class="flex pb-5 items-center justify-between">
              <span class="text-gray-500 text-xl">連絡先情報</span>
              <p class="text-gray-500 text-xs">
                すでにこちらにアカウントをお持ちですか？
                <a href="#" class="text-color-primary">ログイン</a>
              </p>
            </div>
            <!-- 填写信息表单 -->
            <CheckoutInput v-model="emailVal" placeholder="Eメール" isLabel />
            <p class="py-2">
              <input
                type="checkbox"
                class="
                  mr-3
                  rounded
                  form-checkbox
                  border-gray-300
                  focus:ring-transparent
                  text-yellow-800 text-opacity-50
                  align-middle
                  w-5
                  h-5
                "
                id="remenber"
              />
              <label
                for="remenber"
                class="text-xs cursor-pointer text-gray-500 align-middle"
                >ニュースとオファーをメールで受け取る</label
              >
            </p>
            <p class="py-5 pt-10 px-1 text-gray-500 text-xl">配送先住所</p>
            <div class="space-y-5">
              <CheckoutSelect />
              <div class="flex space-x-5">
                <CheckoutInput class="w-1/2" placeholder="姓" />
                <CheckoutInput class="w-1/2" placeholder="名(任意)" />
              </div>
              <CheckoutInput placeholder="会社 (任意)" />
              <div class="flex space-x-5">
                <CheckoutInput class="w-1/2" placeholder="郵便番号" />
                <CheckoutSelect class="w-1/2" />
              </div>
              <CheckoutInput placeholder="市区町村" />
              <CheckoutInput placeholder="住所" />
              <CheckoutInput placeholder="建物名、部屋番号など (任意)" />
              <CheckoutInput placeholder="電話番号" isRight />
            </div>
            <p class="py-2">
              <input
                type="checkbox"
                class="
                  mr-3
                  rounded
                  form-checkbox
                  border-gray-300
                  focus:ring-transparent
                  text-yellow-800 text-opacity-50
                  align-middle
                  w-5
                  h-5
                "
                id="remenber2"
              />
              <label
                for="remenber2"
                class="text-xs cursor-pointer text-gray-500 align-middle"
              >
                次回のためこの情報を保存する</label
              >
            </p>
            <!-- 提交按鈕 -->
            <div class="space-x-5 py-5">
              <button class="btn-bg-color rounded-md font-semibold p-5">
                配送方法の選択へ進む
              </button>
              <router-link class="text-color-primary" to="cart">
                カートに戻る
              </router-link>
            </div>
          </div>
        </div>
        <div class="py-5 mt-10 mx-5 lg:mx-10 border-t">
          <ul class="flex space-x-10 text-xs text-color-primary">
            <li><a href="#">配送ポリシー</a></li>
            <li><a href="#">プライバシーポリシー</a></li>
            <li><a href="#">特定商取引法に基づく表記</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="2xl:w-2/5 w-3/5 hidden lg:block px-16 bg-gray-50">
      <div class="2xl:w-3/5 w-full pt-16">
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
          <p>
            JPY <span class="text-2xl font-semibold text-black">￥8,800</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-bg-color {
  background-color: #c5aa76;
}
</style>
