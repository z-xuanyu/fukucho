<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-13 15:51:35
 * @LastEditTime: 2021-12-23 15:10:47
 * @Description: Modify here please
-->
<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  type: "login",
  title: "ログイン",
  titleLinkText: 'こちらよりアカウント作成してください。',
  subTitle:
    "アカウントをお持ちでなければ、 ",
});

// 重置密码
function resetPassword() {
  form.value.type = "recover";
  (form.value.title = "パスワードをリセット"),
  form.value.titleLinkText = "";
    (form.value.subTitle =
      "パスワードをリセットするためのメールをお送りします。");
}

// 注册
function handleRegister(){
  form.value.type = "register";
  (form.value.title = "アカウント作成"),
  form.value.titleLinkText = "こちらよりログインしてください。";
    (form.value.subTitle =
      "すでにアカウントをお持ちであれば、");
}

// 登录提交
function handleLogin(){
  router.push("/user?url=order")
}
</script>

<template>
  <div class="max-w-6xl mx-auto my-20">
    <div class="md:w-5/12 px-10 md:px-0 mx-auto">
      <h1 class="text-4xl font-bold text-center">{{ form.title }}</h1>
      <p class="py-10">
        {{ form.subTitle }}
        <a class="underline" href="#" @click.prevent="handleRegister">{{ form.titleLinkText }}</a>
      </p>

      <form class="space-y-5">
          <!-- 登录 -->
        <template v-if="form.type == 'login'">
          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            placeholder="Eメール"
            type="text"
          />
          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            placeholder="Eメール"
            type="text"
          />
        </template>
        <!-- 注册 -->
        <template v-if="form.type == 'register'">
          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            placeholder="姓"
            type="text"
          />

          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            placeholder="名"
            type="text"
          />
          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            placeholder="Eメール"
            type="text"
          />
          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            placeholder="パスワード"
            type="text"
          />
        </template>
        <!-- 重置密码 -->
        <template v-if="form.type == 'recover'">
          <input
            class="
              w-full
              p-2.5
              px-4
              border
              outline-none
              focus:ring-gray-900 focus:ring-1
            "
            type="text"
          />
        </template>
      </form>
      <p class="py-5 text-right">
        <a href="#" @click.prevent="resetPassword"> パスワードをお忘れですか？ </a>
      </p>
      <div class="mt-5">
        <button class="p-2 mr-5 font-semibold text-white bg-color-primary" @click="handleLogin">
          サインイン
        </button>
        <a href="#">ストアに戻る</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
