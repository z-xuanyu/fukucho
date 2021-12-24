<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-20 11:03:19
 * @LastEditTime: 2021-12-23 15:20:04
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref, unref } from "vue";
import { useRoute } from "vue-router";
import { Icon } from '@iconify/vue';
import Order from "./Order.vue";
import Address from "./Address.vue";
const route = useRoute();
const isShowMenu = ref<boolean>(false);
const pathName = ref<string>(route.query.url as string);
</script>

<template>
  <div class="max-w-6xl px-5 mx-auto md:my-20 md:flex">
    <div class="relative">
      <input v-model="isShowMenu" class="absolute inset-0 w-full h-full opacity-0 md:hidden" id="menu" type="checkbox">
      <p class="flex items-center justify-between px-5 py-4 bg-gray-100 cursor-pointer md:bg-white">
        <span>マイアカウント</span>
        <Icon class="md:hidden" width="20" icon="octicon:triangle-down-24" color="black" />
      </p>
      <ul class="absolute w-full font-semibold bg-gray-100 max-h-0 md:max-h-screen menu-list md:bg-white">
        <li class="px-5 py-4 border-t cursor-pointer md:border-none" :class="pathName == 'order' ? 'text-color-primary' : ''">
          <router-link to="/user?url=order" @click="pathName = 'order'; isShowMenu = !isShowMenu">
            注文履歴</router-link
          >
        </li>
        <li class="px-5 py-4 border-t cursor-pointer md:border-none" :class="pathName == 'address' ? 'text-color-primary' : ''">
          <router-link to="/user?url=address" @click="pathName = 'address'; isShowMenu = !isShowMenu">
            所を表示
          </router-link>
        </li>
        <li class="px-5 py-4 border-t cursor-pointer md:border-none">お問い合わせ</li>
        <li class="px-5 py-4 border-t cursor-pointer md:border-none">ログアウト</li>
      </ul>
    </div>

    <div class="px-2 mt-10 md:mt-0 md:ml-56 md:flex-1">
      <template v-if="pathName == 'order'">
        <Order />
      </template>
      <template v-if="pathName == 'address'">
        <Address />
      </template>
    </div>
  </div>
</template>

<style scoped>
ul li:hover {
  color: #a58c78;
}
.menu-list{
  overflow: hidden;
  transition: max-height .5s ease-in;
}
#menu:checked ~ .menu-list{
  max-height: 640px;
}
</style>
