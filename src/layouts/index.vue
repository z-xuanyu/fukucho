<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 10:20:04
 * @LastEditTime: 2021-12-20 18:11:46
 * @Description: Modify here please
-->
<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
    <TheHeader />
    <div class="pt-20">
        <router-view />
    </div>
    <TheFooter />
</template>

<style scoped>

</style>