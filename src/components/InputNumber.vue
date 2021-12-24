<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-14 15:27:59
 * @LastEditTime: 2021-12-21 18:21:05
 * @Description: Modify here please
-->
<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
    modelValue:{
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['update'])

const inputNumberVal = ref(props.modelValue);

function add(){
    inputNumberVal.value++;    
}

function reduce(){
    inputNumberVal.value --;
}

watch(()=> inputNumberVal.value, (count, prevCount)=>{
  emit('update:modelValue', inputNumberVal.value);
})
</script>

<template>
  <div class="flex">
    <div class="py-1 font-semibold text-gray-500 border">
      <span class="px-3 cursor-pointer" @click="add">+</span
      ><input
        class="w-10 text-xs font-semibold text-center outline-none"
        type="text"
        :value="inputNumberVal"
      /><span class="px-3 cursor-pointer" @click="reduce">-</span>
    </div>
  </div>
</template>

<style scoped></style>
