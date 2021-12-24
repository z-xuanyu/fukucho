<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-20 11:30:13
 * @LastEditTime: 2021-12-20 15:01:03
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref } from "vue";
import { NInput, InputProps, NSelect, SelectProps } from "naive-ui";

type InputThemeOverrides = NonNullable<InputProps["themeOverrides"]>;
type SelectThemeOverrides = NonNullable<SelectProps["themeOverrides"]>;

// 调整组件样式
const inputThemeOverrides: InputThemeOverrides = {
  borderHover: "1px solid #000",
  borderFocus: "1px solid #000",
  loadingColor: "#000",
  caretColor: "#000",
  boxShadowFocus: "0 0 0 0px #000",
  borderRadius: "0px",
};

const selectThemeOverrides: SelectThemeOverrides = {
  peers: {
    InternalSelection: {
      borderActive: "1px solid #000",
      borderRadius: "0px",
      loadingColor: "#000",
      borderFocus: "1px solid #000",
      caretColor: "#000",
      borderHover: "1px solid #000",
      boxShadowActive: "0 0 0 0px #000",
      boxShadowFocus: "0 0 0 0px #000",
    },
  },
};
const options = ref([
  {
    label: "日本",
    value: "song1",
  },
  {
    label: "Norwegian Wood",
    value: "song2",
  },
]);
</script>

<template>
  <div class="flex items-center justify-between pb-6 border-b">
    <h1 class="text-xl font-semibold md:text-3xl">お客様の住所</h1>
    <button class="px-5 py-2 text-white bg-black">新しい住所を追加</button>
  </div>

  <div class="mt-20 border-b pb-14">
    <h2 class="text-4xl font-semibold">新しい住所を追加</h2>
    <div class="mt-8 space-y-8">
      <div class="flex space-x-3">
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="名"
        />
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="姓"
        />
      </div>
      <NInput
        :theme-overrides="inputThemeOverrides"
        size="large"
        placeholder="会社"
      />
      <div class="flex space-x-3">
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="住所1"
        />
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="住所2"
        />
      </div>
      <div class="flex space-x-3">
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="市区町村"
        />
        <NSelect
          size="large"
          placeholder="国"
          :options="options"
          :theme-overrides="selectThemeOverrides"
        />
        <NSelect
          size="large"
          placeholder="都道府県"
          :options="options"
          :theme-overrides="selectThemeOverrides"
        />
      </div>
      <div class="flex space-x-3">
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="郵便番号"
        />
        <NInput
          :theme-overrides="inputThemeOverrides"
          size="large"
          placeholder="電話番号"
        />
      </div>
      
      <p class="flex items-center space-x-3">
          <input type="checkbox" id="setting">
          <label for="setting">既定住所に設定</label>
      </p>
      <p>
          <button class="px-3 py-2 text-xs text-white bg-black">住所を追加</button>
          <span class="ml-5 cursor-pointer">キャンセル</span>
      </p>
    </div>
  </div>
  <!-- 地址列表 -->
  <h4 class="py-5 font-semibold text-color-primary">既定の住所</h4>
  <div class="pb-5 space-y-3 border-b">
      <p>阿宇</p>
      <p>香川県</p>
      <p>日本</p>
      <p class="py-3 space-x-4">
          <button class="px-6 py-2 text-white bg-black">編集</button>
          <button class="px-6 py-2">削除</button>
      </p>
  </div>
</template>

<style scoped>
:root {
  --border-hover: 1px solid #374151;
}
</style>
