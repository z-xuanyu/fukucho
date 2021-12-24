<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-23 09:59:45
 * @LastEditTime: 2021-12-23 12:19:17
 * @Description: Modify here please
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { NTooltip } from "naive-ui";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  isLabel: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Eメール",
  },
  placeholder: {
    type: String,
    default: "",
  },
  isRight: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputVal = ref(props.modelValue);

watch(
  () => inputVal.value,
  (count, prevCount) => {
    emit("update:modelValue", inputVal.value);
  }
);
</script>

<template>
  <div class="relative">
    <label
      class="text-xs absolute left-4 text-gray-500"
      :class="inputVal ? 'top-2' : ''"
      v-if="inputVal && isLabel"
      >{{ label }}</label
    >
    <input
      v-model="inputVal"
      :class="inputVal && isLabel ? 'pt-5 p-1' : 'p-2.5'"
      class="block outline-none border focus:ring-2 focus:ring-yellow-800 focus:ring-opacity-50 px-4 w-full rounded-md"
      :placeholder="placeholder"
      type="text"
    />
    <!-- 右边插槽 -->
    <div class="absolute top-3 right-3" v-if="isRight">
      <slot name="right">
        <NTooltip>
          <template #trigger>
            <Icon
              width="18"
              class="cursor-pointer text-gray-500"
              icon="akar-icons:question-fill"
            />
          </template>
          ご注文について連絡をする必要があるときに使用します
        </NTooltip>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
