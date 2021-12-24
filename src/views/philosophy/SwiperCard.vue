<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-07 16:25:33
 * @LastEditTime: 2021-12-13 11:19:02
 * @Description: Modify here please
-->
<template>
  <swiper effect="fade" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="swiper-card" :pagination='paginationOptions' @slideChange="onSlideChange">
    <swiper-slide class="w-full h-full">
      <img class="object-cover w-full h-full" src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_philosophy_1_a_resize_1500x.jpg?v=1636557124" alt="">  
    </swiper-slide>
    
    <swiper-slide class="w-full h-full">
      <img  class="object-cover w-full h-full" src="https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_philosophy_1_b_resize_1500x.jpg?v=1636558137" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
import { defineComponent, ref, toRef } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/pagination"


import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";

SwiperCore.use([ EffectFade, Pagination, Autoplay]);

export default defineComponent({
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    const activeIndex = ref(0);

    const paginationOptions = ref({
      clickable: true,
    })

    const onSlideChange = (params) => {
      activeIndex.value = params.activeIndex;
    }
    return {
      paginationOptions,
      onSlideChange,
      activeIndex
    }
  }
})
</script>
<style scoped>
.swiper-card{
    padding-bottom: 30px;
}
.swiper-card :deep(.swiper-pagination-bullet){
  width: 40px;
  height: 3px;
  border-radius: 2px;
  background-color: #cccccc;
  opacity: 1;
}
.swiper-card :deep(.swiper-pagination){
    text-align: right;
    bottom: 0px;
    z-index: 999;
}
.swiper-card :deep(.swiper-pagination-bullet-active){
  background-color: #a58c78;
}

/* @media (min-width: 768px) { 
  .homeSwiper{
    height: 100vh;
  }

} */

/* .banner-animation{
  animation: banner 1.5s ease-in;
}

@keyframes banner {
   0%{
     transform: scale(1.1);
   }

   100%{
     transform: scale(1);
   }
} */
</style>
