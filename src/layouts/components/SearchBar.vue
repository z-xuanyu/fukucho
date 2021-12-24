<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-14 17:28:18
 * @LastEditTime: 2021-12-14 17:48:39
 * @Description: Modify here please
-->
<script setup>
import { Icon } from '@iconify/vue';

const emit = defineEmits(['close'])

function handleClose(){
    emit('close')
}
</script>

<template>
<div class="md:px-72 px-10 h-full flex justify-between items-center">
    <div class="text-black flex-1 flex items-center">
        <Icon icon="ant-design:search-outlined" width="30" height="30" />
        <input class="outline-none w-full  h-20 ml-5" autofocus="autofocus" type="text" placeholder="検索">
    </div>
    <Icon class="cursor-pointer" @click="handleClose" icon="ep:close-bold" width="30" height="30" />
</div>
</template>

<style scoped>

</style>