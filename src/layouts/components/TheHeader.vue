<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 10:28:51
 * @LastEditTime: 2021-12-24 11:49:11
 * @Description: Modify here please
-->
<script setup>
import { useEventListener } from "@vueuse/core";
import { ref, onMounted, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useAppStoreWithOut } from "/@/store/modules/app";
import { useCartStoreWithOut } from "/@/store/modules/cart";
import { NDrawer, NDrawerContent } from "naive-ui";
import { Icon } from "@iconify/vue";
import CartDrawerContent from "./CartDrawerContent.vue";
import MobileMenu from "./MobileMenu.vue";
import SearchBar from "./SearchBar.vue";

const route = useRoute();
const useAppStore = useAppStoreWithOut();
const useCartStore = useCartStoreWithOut();

// 搜索drawer
const searchDrawerActive = ref(false);

// 移动端菜单展开状态
const mobileMenuDrawerActive = ref(false);

const navbarInfo = computed(() => useAppStore.getNavbarInfo);
const menuLineColor = computed(() => useAppStore.getMenuLineColor);
// 二级导航hover
function handleNavSubMenuHover() {
  if (route.name !== "Home") return;
  useAppStore.resetNavbarColor();
}
// 鼠标移出
function handleMouseleave(domId) {
  if (route.name !== "Home") return;
  useAppStore.navbarSubMenuHoverLeave(domId);
}

// 移动端导航点击
function handleMobileMenuClick() {
  mobileMenuDrawerActive.value = !mobileMenuDrawerActive.value;
  useAppStore.resetNavbarColor();
}

// drawer抽屉打开，禁止body层滚动
watchEffect(() => {
  const isChange = [
    mobileMenuDrawerActive.value,
    searchDrawerActive.value,
    useCartStore.cartDrawerActive,
  ].includes(true);
  isChange ? useAppStore.stopBodyScroll() : useAppStore.resetBodyScroll();
});
</script>

<template>
  <div
    class="fixed w-full"
    :class="[
      navbarInfo.bgColor,
      navbarInfo.textColor,
      mobileMenuDrawerActive ? 'z-3000' : 'z-50',
    ]"
  >
    <div class="flex justify-between px-5">
      <a href="#" class="py-5">
        <img class="w-40 md:w-48" :src="navbarInfo.logoUrl" alt="" />
      </a>
      <nav class="hidden space-x-10 text-sm font-bold lg:block navbar">
        <a class="inline-block py-7 active" href="#/news">お知らせ</a>
        <a class="inline-block py-7 active" href="#/philosophy">富久長の想い</a>
        <a
          class="inline-block py-7 active"
          @mouseenter="handleNavSubMenuHover"
          @mouseleave="handleMouseleave('sub-menu-1')"
          href="#/collections"
        >
          <span>富久長の酒</span>
          <!-- 子菜单导航 -->
          <div
            class="fixed left-0 right-0 hidden p-5 mt-5 opacity-0 top-14 sub-meun"
            id="sub-menu-1"
            @mouseenter="handleNavSubMenuHover"
            @mouseleave="handleMouseleave('sub-menu-1')"
          >
            <div class="flex px-8 text-black">
              <div class="w-1/2">
                <h2 class="py-6">すべてのお酒</h2>
                <div class="font-thin leading-8">
                  <p><a href="#">八反草のお酒</a></p>
                  <p><a href="#">海風土シリーズ</a></p>
                  <p><a href="#">HENPEI & GENKEI</a></p>
                  <p><a href="#">ロングセラー</a></p>
                  <p><a href="#">季節限定酒</a></p>
                  <p><a href="#">LEGACYシリーズ</a></p>
                </div>
              </div>
              <div class="w-1/2">
                <h2 class="py-6">すべてのお酒</h2>
                <div class="font-thin leading-8">
                  <p><a href="#">アメリカ</a></p>
                  <p><a href="#">ヨーロッパ</a></p>
                  <p><a href="#">アジア</a></p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a class="inline-block py-7 active" href="#/stockist">取扱店</a>
        <a
          class="inline-block py-7 active"
          href="#/collections/all-goods"
          @mouseenter="handleNavSubMenuHover"
          @mouseleave="handleMouseleave('sub-menu-2')"
        >
          <span>オンラインショップ</span>
          <div
            class="fixed left-0 right-0 hidden p-5 mt-5 opacity-0 top-14 sub-meun"
            id="sub-menu-2"
            @mouseenter="handleNavSubMenuHover"
            @mouseleave="handleMouseleave('sub-menu-2')"
          >
            <div class="flex px-8 text-black">
              <div class="w-1/4">
                <h2 class="py-6">キャンペーン・おすすめ商品</h2>
                <div class="font-thin leading-8">
                  <p><a href="#">キャンペーン</a></p>
                  <p><a href="#">海風土シリーズ</a></p>
                  <p><a href="#">おすすめ商品</a></p>
                  <p><a href="#">生酒商品</a></p>
                </div>
              </div>
              <div class="w-1/4">
                <h2 class="py-6">富久長のお酒</h2>
                <div class="font-thin leading-8">
                  <p><a href="#">八反草のお酒</a></p>
                  <p><a href="#">HENPEI & GENKEI</a></p>
                  <p><a href="#">ロングセラー</a></p>
                  <p><a href="#">季節限定酒</a></p>
                  <p><a href="#">LEGACYシリーズ</a></p>
                </div>
              </div>
              <div class="w-1/4">
                <h2 class="py-6">ギフト・セット商品</h2>
                <div class="font-thin leading-8">
                  <p><a href="#">セット商品</a></p>
                  <p><a href="#">箱入り商品</a></p>
                  <p><a href="#">ギフト包装・紙袋</a></p>
                </div>
              </div>
              <div class="w-1/4">
                <h2 class="py-6">グッズ</h2>
                <div class="font-thin leading-8">
                  <p><a href="#">酒器</a></p>
                  <p><a href="#">その他</a></p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </nav>
      <!-- 导航icon -->
      <div class="flex py-5 space-x-5">
        <Icon
          class="cursor-pointer"
          icon="eva:search-fill"
          @click="searchDrawerActive = !searchDrawerActive"
          width="25"
          :color="navbarInfo.bgColor == 'bg-white' ? 'black' : 'white'"
        />
        <router-link to="/login">
          <Icon
            icon="carbon:user-avatar"
            width="25"
            :color="navbarInfo.bgColor == 'bg-white' ? 'black' : 'white'"
          />
        </router-link>
        <div class="relative">
          <Icon
            class="cursor-pointer"
            icon="bi:cart"
            @click="useCartStore.changeCartDrawerActive()"
            width="25"
            :color="navbarInfo.bgColor == 'bg-white' ? 'black' : 'white'"
          />
          <span
            class="absolute w-4 h-4 text-center text-white rounded-full bg-color-primary -top-2 -right-1"
            >2</span
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 搜索 -->
  <NDrawer v-model:show="searchDrawerActive" placement="top" :height="80">
    <NDrawerContent
      footer-style="{ padding: 0 }"
      :body-content-style="{ padding: 0 }"
    >
      <SearchBar @close="searchDrawerActive = !searchDrawerActive" />
    </NDrawerContent>
  </NDrawer>
  <!-- 购物车 -->
  <NDrawer v-model:show="useCartStore.cartDrawerActive" :width="380">
    <NDrawerContent
      title="カート"
      closable
      :footer-style="{ padding: 0 }"
      :body-content-style="{ padding: 0 }"
    >
      <CartDrawerContent />
      <template #footer>
        <router-link
          class="w-full p-4 text-center text-white bg-color-primary"
          to="/cart"
          @click="useCartStore.changeCartDrawerActive()"
        >
          カートを見る
        </router-link>
      </template>
    </NDrawerContent>
  </NDrawer>
  <!-- 移动端菜单 -->
  <button
    @click="handleMobileMenuClick"
    class="fixed w-16 h-16 space-y-1 bg-white rounded-full shadow-2xl lg:hidden z-3000 mobile-menu bottom-8 shadow-light-900 right-6"
  >
    <span
      class="block h-1 mx-auto transition-all duration-300 transform bg-yellow-800 rounded-md opacity-50 w-7"
      :class="mobileMenuDrawerActive ? 'rotate-45 translate-y-3' : 'rotate-0'"
    ></span>
    <span
      class="block h-1 mx-auto bg-yellow-800 rounded-md w-7"
      :class="mobileMenuDrawerActive ? 'opacity-0' : 'opacity-50'"
    ></span>
    <span
      class="block h-1 mx-auto transition-all duration-300 transform bg-yellow-800 rounded-md opacity-50 w-7"
      :class="mobileMenuDrawerActive ? '-rotate-45 -translate-y-1' : 'rotate-0'"
    ></span>
  </button>

  <NDrawer v-model:show="mobileMenuDrawerActive" placement="left" :width="380">
    <NDrawerContent
      footer-style="{ padding: 0 }"
      :body-content-style="{ padding: 0 }"
    >
      <MobileMenu @change="mobileMenuDrawerActive = false" />
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped>
.z-3000 {
  z-index: 3000;
}
.navbar .active {
  position: relative;
}
.navbar .active::before {
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0px;
  transform: scale(0);
  transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.navbar .active:hover::before {
  transform: scale(1);
  background-color: v-bind(menuLineColor);
}

.navbar .active:hover .sub-meun {
  opacity: 1;
  display: block;
  background-color: rgb(247, 247, 247);
  transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
    visibility 0s 0.2s,
    background-color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
    border 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
