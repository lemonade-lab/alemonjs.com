<script setup>
import "./home.css";
const Sponsorship = [
    {
        img: 'https://q1.qlogo.cn/g?b=qq&s=0&nk=1522099983',
        title: '白狐脚本(Gitee)',
        url: 'https://gitee.com/baihu433/Yunzai-Bot-Shell'
    }, {
        img: 'http://p.qlogo.cn/gh/946454868/946454868/100/',
        title: '龙龙空间(QQ群)',
        url: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bgBJeCy1I2_DmJVQMv8ESmVHVO4opxXV&authKey=xFXMyhSDdd58KsxbQWvQaszjhia5cwTCRxFaNX1SmCvcj91XbWdYj15OghpzBJQk&noverify=0&group_code=946454868'
    }, 
    {
        img: 'https://q1.qlogo.cn/g?b=qq&s=0&nk=3219073854',
        title: '落夏()',
        url: '/'
    },
    {
        img: 'https://q1.qlogo.cn/g?b=qq&s=0&nk=3193524385',
        title: '悠风起(Gitee)',
        url: 'https://gitee.com/youwindy'
    },
    {
        img: 'https://q1.qlogo.cn/g?b=qq&s=0&nk=2860450996',
        title: '乐乐乐鱼()',
        url: '/'
    },
    {
        img: 'https://q1.qlogo.cn/g?b=qq&s=0&nk=2841644407',
        title: '喵~()',
        url: '/'
    }
]
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
            <a class="item" v-for="item of Sponsorship" :key="item.title" target="_blank" :href="item.url">
                <img class="img" alt="" :src="item.img">
                <div class="item-title">
                    {{ item.title }}
                </div>
            </a>
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

.img {
    border-radius: 20px;
    width: 50px;
    height: 50px;
    margin: auto;
}

.item {
    margin: 10px auto;
    background-color: var(--vp-c-bg-soft);
    padding: 10px 20px;
    border-radius: 8px;
}

.item-title {
    font-size: 18px;
    margin-top: 10px;
}


.flex-wrap-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 20px;
    max-width: 1200px;
    margin: auto;
}
</style>
