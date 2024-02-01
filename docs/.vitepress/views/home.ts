
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { ref } from 'vue';
/**
 * 自动滚动 Autoplay
 * 间隙 spaceBetween
 * 点击 Pagination
 * 左右点击 navigation
 * 循环滚动 loop
 */
export const modules = [Autoplay, Pagination]
export const autoplay = {
    delay: 2000,
    disableOnInteraction: false,
}
export const pagination = {
    clickable: true,
    type: 'progressbar',
}

// View
export const size = ref(1);

// watch
export const update = () => {
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