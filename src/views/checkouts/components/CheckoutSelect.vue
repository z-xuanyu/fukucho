<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-23 11:38:20
 * @LastEditTime: 2021-12-23 12:14:50
 * @Description: Modify here please
-->
<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>

<template>
  <div class="relative">
    <label class="absolute text-xs text-gray-500 top-1 left-3">国/地域</label>
    <select class="w-full text-sm border pt-5 px-3 rounded-md appearance-none focus:ring-2 focus:ring-yellow-800 focus:ring-opacity-50 outline-none">
      <option value="1">日本</option>
    </select>
    <div class="absolute top-3 right-3 pl-2 border-l pointer-events-none">
        <div class="py-1 px-1"><Icon width="12" class="text-gray-500" icon="oi:caret-bottom" /></div>
    </div>
  </div>
</template>

<style scoped></style>
