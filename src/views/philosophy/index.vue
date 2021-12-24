<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-13 10:25:32
 * @LastEditTime: 2021-12-23 14:59:54
 * @Description: Modify here please
-->
<script setup>
import SwiperCard from "./SwiperCard.vue";
</script>

<template>
  <div class="w-1/3 mx-auto">
    <h1 class="text-color-primary font-semibold text-center py-5 mt-8 border-b" v-sr-re-box="{ reset: false, delay: 50 }">
      富久長の想い
    </h1>
  </div>
  <h1 class="text-center mt-32 text-6xl" v-sr-re-box="{ reset: false, delay: 50 }">百試千改</h1>
  <h3 class="py-24 text-center text-2xl" v-sr-re-box="{ reset: false, delay: 100 }">そして味わいは軽々と。</h3>
  <div class="text-center text-xs leading-6 font-medium" v-sr-re-box="{ reset: false, delay: 150 }">
    <p>百試み、千改める。</p>
    <p>百試千改は富久長が大切にしてきた</p>
    <p>三浦仙三郎翁の残した言葉です。</p>
  </div>

  <div class="w-full md:mt-32 2xl:px-60 xl:px-44 lg:px-20 md:px-10">
    <div
      class="md:flex md:py-20 py-12"
      v-for="item in 4"
      :key="'swiper' + item"
      :class="item % 2 ? '' : 'flex-row-reverse'"
    >
      <div class="md:w-3/5 w-full" v-sr-re-box="{ reset: false, delay: 150 }">
        <SwiperCard />
      </div>
      <div class="md:w-2/5 px-5 md:px-0" :class="item % 2 ? 'md:pl-32' : 'md:pr-32'">
        <h2 class="md:text-3xl pr-20 md:pr-10 text-2xl font-semibold md:w-3/5 w-4/5" v-sr-re-box="{ reset: false, delay: 150 }">
          瀬戸内の風を感じる町、 安芸津
        </h2>
        <p class="py-10 leading-7" v-sr-re-box="{ reset: false, delay: 170 }">
          富久長が醸される広島県安芸津町は、瀬戸内海に面した小さな港町。おだやかな島なみの景色が広がる美しい町です。古くは万葉のころから、また江戸時代には広島藩の米蔵が置かれた港として栄え、酒造りが盛んにおこなわれてきました。
        </p>
        <p class="leading-7" v-sr-re-box="{ reset: false, delay: 200 }">
          蔵のすぐ目の前に広がる三津湾は、鯛やタコ、小鯵、小海老や瀬戸内の小魚が一年中獲れる宝庫です。瀬戸内海の中でも清浄な海域で知られ、牡蠣の産地としても知られています。おだやかな海と温暖な気候に恵まれた安芸津の風土が、長い年月を経て富久長の味わいをつくりだしています。
        </p>
      </div>
    </div>
  </div>

  <h3 class="text-center text-color-primary md:text-3xl text-2xl font-semibold">
    Staff Profile
  </h3>
  <div class="md:w-1/2 w-full md:py-20 py-10 mx-auto">
    <img
      class="w-full"
      src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_philosophy_profile_resize_1500x.jpg?v=1636558597"
      alt=""
    />
    <div class="px-5 md:px-0">
      <h4 class="mt-20 text-3xl">今田美穂</h4>
    <h6 class="py-2 text-xs">代表取締役・杜氏</h6>
    <p class="py-5">
      今田酒造本店の長女として生まれる。明治大学卒業後、日本能楽芸術振興会・橋の会を経て1994年今田酒造本店に入社。在来品種・八反草の復活栽培のほか、白麹を使った酒造りの開発など、伝統と革新の酒造りを追求している。2019年公開されたドキュメンタリー映画『
      <a href="#" class="underline">KAMPAI！ 日本酒に恋した女たち</a>
      』に出演。2020年には英国BBCが世界に影響を与えた『100人の女性』に唯一の日本人として選ばれる。
    </p>

    <div class="py-5">
      <h4 class="text-2xl">杉浦弘真</h4>
      <h6 class="py-2 text-xs">製造部長　東京都出身</h6>
    </div>

    <div class="py-5">
      <h4 class="text-2xl">ラッセル・アンディ</h4>
      <h6 class="py-2 text-xs">製造・海外広報担当　スコットランド出身</h6>
    </div>

    <div class="py-5">
      <h4 class="text-2xl">杉西しのぶ</h4>
      <h6 class="py-2 text-xs">製造・出荷管理担当　広島県出身</h6>
    </div>

    <div class="py-5">
      <h4 class="text-2xl">谷水美保</h4>
      <h6 class="py-2 text-xs">出荷管理・広報担当　広島県出身</h6>
    </div>

    <div class="py-5">
      <h4 class="text-2xl">黒岩なおみ</h4>
      <h6 class="py-2 text-xs">製造・出荷担当　広島県出身</h6>
    </div>
    </div>
  </div>

  <!-- Symbol -->
  <h3 class="text-center text-color-primary text-3xl font-semibold">
    Symbol
  </h3>
  <img class="w-full my-20 object-cover symbol-img" src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/t/4/assets/fukucho_web_logo_s.jpg?v=15442932215580815061" alt="">

  <p class="md:w-1/2 w-full px-5 md:px-0 md:pb-20 mx-auto">
    富久長のロゴマークは、酒蔵のある三津湾から望む島なみがモチーフです。おおらかでどこか懐かしさを感じるシルエットには、穏やかな海と吹き渡る風、また発酵のバイオリズムのイメージも込めています。三浦仙三郎の軟水醸造法の発明によって吟醸酒の里となった安芸津町三津。そのため広島杜氏は古くは三津杜氏と呼ばれ、杜氏の里としても知られています。3つの島は、古くから縁起のよい数字とされる「三」、富久長に縁のある「三」も表しています。
  </p>
</template>

<style scoped>
.symbol-img{
  height: 300px;
}
@media (min-width: 768px){
.symbol-img{
  height: 500px;
}
}
</style>
