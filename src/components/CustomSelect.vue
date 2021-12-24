<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-20 16:09:58
 * @LastEditTime: 2021-12-23 15:19:33
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["update:modelValue"]);
const isShowOptions = ref<boolean>(false);
const selectBox = ref(null);
const selectVal = ref(props.modelValue);

// 选择值
function handleSelectVal(val: any) {
  selectVal.value = val;
  emit("update:modelValue", val);
  isShowOptions.value = !isShowOptions.value;
}

onClickOutside(selectBox, (event) => (isShowOptions.value = false));
</script>

<template>
  <div
    class="relative border w-28"
    :class="isShowOptions ? 'border-b-0' : ''"
    ref="selectBox"
  >
    <button
      class="flex items-center justify-between w-full p-2 px-4"
      @click="isShowOptions = !isShowOptions"
    >
      <span>{{ selectVal }}</span>
      <Icon
        icon="bytesize:chevron-bottom"
        color="black"
        :class="isShowOptions ? 'rotate-180' : 'rotate-0'"
        class="transition duration-200 ease-in transform"
      />
    </button>
    <ul class="absolute bg-white border border-t-0 w-28" v-if="isShowOptions">
      <li
        class="px-4 py-3 cursor-pointer hover:bg-gray-100"
        :class="selectVal == item ? 'bg-gray-100' : ''"
        @click="handleSelectVal(item)"
        v-for="item in 10"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
