<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-14 15:13:00
 * @LastEditTime: 2021-12-14 15:51:22
 * @Description: Modify here please
-->
<script setup>
import { ref } from 'vue';
import InputNumber from '/@/components/InputNumber.vue';
const inputNumberVal = ref(1)
</script>

<template>
<div class="flex py-5 border-b">
    <div class="w-1/3">
        <img src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_180x.jpg?v=1632964888" alt="">
    </div>
    <div class="w-2/3 space-y-2">
        <h3 class="font-semibold">富久長 八反草 純米吟醸 ハイブリッド生酛</h3>
        <p class="text-xs">容量: 720ml</p>
        <p class="font-semibold">2,200円 （税込）</p>
        <InputNumber v-model="inputNumberVal" />
    </div>
</div>
</template>

<style scoped>

</style>\