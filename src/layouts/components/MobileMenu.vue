<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-14 18:21:25
 * @LastEditTime: 2021-12-24 14:08:55
 * @Description: Modify here please
-->
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const level2Menu = ref(false);

const eimt = defineEmits(['change'])

function handleClick(){
  eimt('change')
}
</script>

<template>
  <div class="py-24 mobile-menu">
    <ul
      class="relative px-5 text-lg font-semibold transition-all duration-500 transform cursor-pointer"
      :class="level2Menu ? '-translate-x-full' : 'translate-x-0'"
    >
      <li class="levelMenu" @click="handleClick">
        <a class="levelMenuText" href="#/news">お知らせ</a>
      </li>
      <li class="levelMenu" @click="handleClick">
        <a class="levelMenuText" href="#/philosophy">富久長の想い</a>
      </li>
      <li class="flex items-center justify-between levelMenu" @click.stop="level2Menu = !level2Menu">
        <a class="levelMenuText" href="#">富久長の酒</a>
        <Icon icon="akar-icons:chevron-right" />
      </li>
      <li class="levelMenu">
        <a class="levelMenuText" href="#">取扱店</a>
      </li>
      <li class="flex items-center justify-between levelMenu">
        <a class="levelMenuText" @click.prevent="level2Menu = !level2Menu" href="#">オンラインショップ</a>
        <Icon icon="akar-icons:chevron-right" />
        <!-- 二级目录 -->
        <div class="absolute top-0 z-50 w-full overflow-hidden transition-all duration-500 transform -right-full" :class="level2Menu?'max-h-screen':'max-h-0'">
            <ul class="px-4">
               <li class="flex items-center cursor-pointer">
                 <Icon @click="level2Menu = !level2Menu" class="mr-5 transform rotate-180" icon="akar-icons:chevron-right" />
                 <router-link to="/collections">富久長の酒</router-link>
               </li>
               <li class="flex items-center justify-between cursor-pointer">
                 
                 <router-link to="/collections" @click="handleClick">すべてのお酒</router-link>
                 <Icon icon="akar-icons:chevron-right" />
               </li>
               <li class="flex items-center justify-between cursor-pointer">
                 <router-link to="/collections" @click="handleClick">海外輸出商品</router-link>
                 <Icon icon="akar-icons:chevron-right" />
               </li>
               <li class="flex items-center justify-between cursor-pointer">
                 
                 <router-link to="/collections" @click="handleClick">すべてのお酒</router-link>
                 <Icon icon="akar-icons:chevron-right" />
               </li>
               <li class="flex items-center justify-between cursor-pointer">
                 <router-link to="/collections" @click="handleClick">海外輸出商品</router-link>
                 <Icon icon="akar-icons:chevron-right" />
               </li>
            </ul>
        </div>
      </li>
      <li class="levelMenu">
        <a class="levelMenuText" href="#">トップページ</a>
      </li>
      <li class="levelMenu">
        <a class="levelMenuText" href="#">会社案内</a>
      </li>
      <li class="levelMenu">
        <a class="levelMenuText" href="#">採用情報</a>
      </li>
      <li class="levelMenu">
        <a class="levelMenuText" href="#">お問い合わせ</a>
      </li>
    </ul>

    <div class="flex px-5 pt-10 space-x-6 md:justify-center" v-if="!level2Menu">
      <router-link to="/">
        <Icon width="25" height="25" icon="akar-icons:instagram-fill" />
      </router-link>
      <router-link to="/">
        <Icon width="25" height="25" icon="ant-design:facebook-filled" />
      </router-link>
      <router-link to="/">
        <Icon width="25" height="25" icon="entypo-social:youtube" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu ul li {
  padding: 15px 5px;
}
.mobile-menu > ul > .levelMenu:hover {
  background-color: rgb(247, 247, 247);
  border-radius: 5px;
}
.mobile-menu > ul > .levelMenu:hover .levelMenuText {
  color: #a58c78;
}
</style>
