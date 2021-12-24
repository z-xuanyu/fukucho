<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 10:07:17
 * @LastEditTime: 2021-12-21 10:03:15
 * @Description: Modify here please
-->
<script setup>
import { onMounted } from 'vue';
import HomeSwiper from "./HomeSwiper.vue";
import Contents from './Contents.vue';
import OnlineShop from './OnlineShop.vue';
import ProductsList from './ProductsList.vue';
import { useAppStoreWithOut } from '/@/store/modules/app';
import { useEventListener } from "@vueuse/core";
import FButton from '/@/components/FButton.vue';

const useAppStore = useAppStoreWithOut();

onMounted(()=>{
  useAppStore.changeNavbarColor();
})

let scrollTop = 0;
useEventListener(document, "scroll", () => {
  scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
    useAppStore.setScrollTop(scrollTop);
  if (scrollTop > 120) {
    useAppStore.resetNavbarColor();
  } else {
    useAppStore.changeNavbarColor();
  }
});
</script>

<template>
  <div class="-mt-20 home" ref="homePage">
    <HomeSwiper />
    <!-- news -->
    <div class="max-w-5xl px-5 py-10 mx-auto md:px-0 home-news">
      <h2 class="py-10 text-3xl font-medium text-center md:py-20 text-color-primary">
        News
      </h2>
      <img
        class="w-full"
        src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/articles/fukuucho_blog_2_1728_540x.jpg?v=1638141710"
        alt=""
      />
      <ul>
        <li
          class="py-5 leading-10 border-b"
          v-for="item in 3"
          :key="'news' + item"
        >
          <p class="text-sm text-color-primary">
            <span>2021.11.24</span
            ><span class="p-1 ml-3 text-xs border">キャンペーン</span>
          </p>
          <h3 class="mt-2 text-xs md:mt-0 md:font-bold">
            ウェブサイトリニューアル記念 プレゼントキャンペーンを実施中！
          </h3>
        </li>
      </ul>
      <p class="text-sm text-center py-14">
        <a class="border-b border-black" href="#">すべてのお知らせを見る</a>
      </p>
    </div>
    <!-- Contents -->
    <Contents />
    <!-- OnlineShop -->
    <OnlineShop />
    <!-- product list -->
    <ProductsList />
    <!-- 公司简介 -->
    <div class="w-full px-5 md:px-44">
        <h2 class="text-4xl font-semibold text-center md:py-10 text-color-primary">Company</h2>
        <div class="pt-10 md:space-x-20 md:flex">
          <div class="w-full md:w-1/2">
              <img class="w-full" src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_company_1_resize_1080x.jpg" alt="">
          </div>
          <div class="flex flex-col justify-center mt-10 space-y-5 md:mt-0 md:space-y-10">
            <h2 class="text-3xl font-bold">会社案内</h2>
            <p>富久長の製造販売を行う株式会社今田酒造本店について</p>
            <FButton />
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
