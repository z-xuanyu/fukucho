<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 10:29:04
 * @LastEditTime: 2021-12-24 11:28:10
 * @Description: Modify here please
-->
<script setup>
import { Icon } from "@iconify/vue";

// 回到顶部
function backTop() {
  document.querySelector("body").scrollIntoView({
    behavior: "smooth",
  });
}
</script>

<template>
  <div
    @click="backTop"
    class="flex items-center justify-center mx-auto my-20 border rounded-full cursor-pointer w-14 h-14"
  >
    <img
      src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/t/4/assets/icon_pagetop.svg"
      alt=""
    />
  </div>
  <div class="w-full px-10 py-20 md:px-44 footer-bg-color">
    <div class="justify-between md:pb-24 md:border-b md:flex">
      <div class="w-full mb-10 md:mb-0 md:w-1/3">
        <h3 class="mb-8 font-semibold text-color-primary">Contents</h3>
        <div class="space-y-4 text-xs text-gray-600">
          <p>
            <router-link to="/">富久長の想い</router-link>
          </p>
          <p>
            <router-link to="/">富久長の酒</router-link>
          </p>
          <p>
            <router-link to="/">取扱店</router-link>
          </p>
        </div>
      </div>
      <div class="w-full mb-10 md:w-1/3 md:mb-0">
        <h3 class="mb-8 font-semibold text-color-primary">Shopping</h3>
        <div class="space-y-4 text-xs text-gray-600">
          <p>
            <router-link to="/">オンラインショップ</router-link>
          </p>
          <p>
            <router-link to="/">支払い方法について</router-link>
          </p>
          <p>
            <router-link to="/">発送方法・送料について</router-link>
          </p>
          <p>
            <router-link to="/">返品について</router-link>
          </p>
          <p>
            <router-link to="/">特定商取引法に基づく表記</router-link>
          </p>
          <p>
            <router-link to="/">プライバシーポリシー</router-link>
          </p>
        </div>
      </div>
      <div class="w-full mb-10 md:w-1/3 md:mb-0">
        <h3 class="mb-8 font-semibold text-color-primary">Company</h3>
        <div class="space-y-4 text-xs text-gray-600">
          <p>
            <router-link to="/">お知らせ一覧</router-link>
          </p>
          <p>
            <router-link to="/">会社案内</router-link>
          </p>
          <p>
            <router-link to="/">採用情報</router-link>
          </p>
          <p>
            <router-link to="/">お問い合わせ</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="flex mt-20 space-x-6 md:justify-center">
      <router-link to="/">
        <Icon width="32" height="32" icon="akar-icons:instagram-fill" />
      </router-link>
      <router-link to="/">
        <Icon width="32" height="32" icon="ant-design:facebook-filled" />
      </router-link>
      <router-link to="/">
        <Icon width="32" height="32" icon="entypo-social:youtube" />
      </router-link>
    </div>
    <div class="flex md:justify-center mt-14">
      <select class="p-2 border" name="JA">
        <option value="JA">jA</option>
        <option value="JA">EN</option>
      </select>
    </div>
    <p class="my-5 font-semibold md:text-center text-color-primary">
      Newsletter
    </p>
    <p class="text-xs md:text-center">
      富久長の最新情報や商品の入荷情報などを、ニュースレターでお知らせしています。
    </p>
    <div class="flex justify-center py-10">
      <input
        placeholder="メールアドレス"
        class="w-full px-3 py-2 bg-white border md:w-1/5 focus:outline-none"
        type="text"
      />
      <button class="w-20 py-2 text-xs text-white bg-color-primary">
        送信
      </button>
    </div>
    <img
      class="w-32 mx-auto my-5"
      src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/logo_footer_be642cf4-15eb-45cd-8b9a-f072c80f66b4_240x.png?v=1637120223"
      alt=""
    />
    <p class="py-5 text-xs text-center text-color-primary">
      <router-link to="'/"> ©Imada Sake Brewing Co., Ltd. </router-link>
    </p>
  </div>
</template>

<style scoped></style>
