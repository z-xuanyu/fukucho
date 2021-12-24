<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-13 15:33:54
 * @LastEditTime: 2021-12-22 15:32:01
 * @Description: Modify here please
-->
<script setup>
import { ref } from "vue";
import CustomSelect from "/@/components/CustomSelect.vue";
import { NButton } from "naive-ui";
import { useCartStoreWithOut } from '/@/store/modules/cart';

const useCartStore = useCartStoreWithOut();
const num = ref(2);
const btnLoading = ref(false);

function addCart() {
  btnLoading.value = true;

  setTimeout(() => {
    btnLoading.value = false;
    useCartStore.changeCartDrawerActive();
  }, 1500);
}
</script>

<template>
  <div class="px-10 mx-auto border-b md:flex md:py-20 md:space-x-10 2xl:space-x-96">
    <div class="w-full md:w-1/2">
      <img
        src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_3000x.jpg"
        alt=""
      />
    </div>
    <div class="max-w-lg xl:w-1/3 2xl:w-2/5 md:w-1/">
      <router-link class="underline" to="/collections/product/detail/1">
        HATTANSO
      </router-link>
      <h1 class="py-5 text-2xl font-semibold">
        富久長 八反草 純米吟醸 ハイブリッド生酛
      </h1>
      <p class="text-color-primary">136051</p>
      <button class="p-2 px-5 my-5 border border-color-primary">720ml</button>
      <div class="flex items-center justify-between">
        <CustomSelect v-model="num" />
        <div class="space-x-2">
          <span class="text-3xl">2,200</span>
          <span>円 （税込）</span>
        </div>
      </div>
      <div class="py-8">
        <NButton
          :loading="btnLoading"
          @click="addCart"
          block
          color="#a58c78"
          size="large"
        >
          {{ btnLoading ? "" : "カートに追加する" }}
        </NButton>
      </div>

      <div class="space-y-2 text-xl font-semibold">
        <h3>過去と今を未来につなぐ</h3>
        <h3>ハイブリッド生酛の純米吟醸酒</h3>
      </div>
      <p class="py-10 leading-6 text-gray-700">
        2013年、富久長は高温糖化と古来伝統の生酛系酒母を組み合わせたハイブリッド酒母を編み出しました。この新しい技術に磨きをかけ、富久長が復活栽培を遂げた八反草らしさを最大限に引き出したのが、ハイブリッド生酛です。八反草の繊細な個性や吟醸酒ならではのきれいな香りはそのままに、複雑で奥深い味わいをめざしました。旨味ののった味わいは、冷たい温度から常温まで幅広い温度帯でお楽しみいただけます。
      </p>
      <table class="text-xs text-left">
        <tbody>
          <tr>
            <th class="py-2 w-28">分類</th>
            <td>純米吟醸酒</td>
          </tr>
          <tr>
            <th class="py-2 w-28">原材料</th>
            <td>米 / 米麹</td>
          </tr>
          <tr>
            <th class="py-2 w-28">原料米</th>
            <td>広島県安芸高田市産八反草（契約栽培）</td>
          </tr>
          <tr>
            <th class="py-2 w-28">精米歩合</th>
            <td>麹米 : 50% 　掛米 : 60%</td>
          </tr>
          <tr>
            <th class="py-2 w-28">アルコール分</th>
            <td>15度</td>
          </tr>
          <tr>
            <th class="py-2 w-28">酵母</th>
            <td>広島県酵母</td>
          </tr>
          <tr>
            <th class="py-2 w-28">酒母</th>
            <td>ハイブリッド生酛</td>
          </tr>
          <tr>
            <th class="py-2 w-28">仕様</th>
            <td>直汲み / 原酒 / 瓶火入れ / 瓶貯蔵</td>
          </tr>
          <tr>
            <th class="py-2 w-28">おすすめ温度</th>
            <td>冷酒 / 常温</td>
          </tr>
          <tr>
            <th class="py-2 w-28">保存方法</th>
            <td>冷蔵庫</td>
          </tr>
          <tr>
            <th class="py-2 w-28">販売時期</th>
            <td>通年</td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-wrap py-10">
        <router-link
          v-for="item in 6"
          :key="'tag' + item"
          class="w-20 p-1 m-2 text-sm bg-gray-200"
          to="/collections/product/detail/2"
        >
          <span>#おすすめ</span>
        </router-link>
      </div>
    </div>
  </div>
  <h2
    class="py-10 text-2xl font-semibold text-center cursor-pointer hover:text-black text-color-primary"
  >
    おすすめ商品
  </h2>
  <div class="flex flex-wrap mt-10 md:px-20">
    <div
      class="w-1/2 px-5 md:w-1/4 md:px-0"
      v-for="item in 4"
      :key="'product' + item"
    >
      <router-link :to="'/collections/product/detail/' + item">
        <img
          src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_900x.jpg"
          alt=""
        />
        <h3 class="text-xs md:text-base">
          富久長 八反草 純米吟醸 ハイブリッド生酛
        </h3>
        <p class="py-2 text-xs font-semibold text-color-primary md:text-base">
          2,200 円（税込）
        </p>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
