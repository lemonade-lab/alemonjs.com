<script setup>
import "./home.css";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


import 'swiper/css/pagination';
import 'swiper/css/navigation';

// data
import { Sponsorship } from "./data";


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { ref, onMounted, onBeforeUnmount } from 'vue';

const size = ref(1);

// 监听变化
const update = () => {
    size.value = window.innerWidth < 600 ? 1 : 2;
    if (window.innerWidth >= 860) {
        size.value = 3;
    }
    if (window.innerWidth >= 1200) {
        size.value = 4;
    }
    if (window.innerWidth >= 1400) {
        size.value = 5;
    }
}

onMounted(() => {
    update()
    // 监听视图宽度变化
    window.addEventListener('resize', update);
})

// 组件注销后，清除监听
onBeforeUnmount(() => {
    window.removeEventListener('resize', update);
})

/**
 * 自动滚动 Autoplay
 * 间隙 spaceBetween
 * 点击 Pagination
 * 左右点击 navigation
 * 循环滚动 loop
 */

const modules = [Autoplay, Pagination]

</script>

<template>
    <div>
        <!-- <div class="list-title">
            Platinum Sponsors
        </div>
        <div class="list-title">
            Gold Sponsors
        </div> -->
        <div class="list-title">
            Personal Sponsorship（个人赞助）
        </div>

        <div class="flex-wrap-center">
            <swiper :modules="modules" :spaceBetween="30" :loop="true" :slides-per-view="size" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :pagination="{
    clickable: true,
    type: 'progressbar',
}">
                <swiper-slide class="item" v-for="item of Sponsorship" :key="item.name">
                    <a target="_blank" :href="item.url">
                        <img class="img" alt="" :src="item.img">
                        <div class="item-title">
                            {{ item.name }}
                        </div>
                        <div class="item-title">
                            {{ item.doc }}
                        </div>
                    </a>
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.list-title {
    border-top: 1px solid var(--vt-c-divider-light);
    border-bottom: 1px solid var(--vt-c-divider-light);
    padding: 12px 24px;
    margin: 30px auto;
    text-align: center;
    max-width: 1200px;
}

.flex-wrap-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 20px;
    max-width: 1200px;
    margin: auto;
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
}

.item {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--vp-c-bg);
}

.item-title {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
}

.img {
    border-radius: 20px;
    width: 50px;
    height: 50px;
    margin: auto;
}
</style>
