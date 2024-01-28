<script setup>
import "./home.css";
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
            Personal Sponsorship
        </div>
        <div class="flex-wrap-center">
            <a target="_blank" href="https://gitee.com/baihu433/Yunzai-Bot-Shell">
                <img class="img" alt="special sponsor appwrite" src="https://q1.qlogo.cn/g?b=qq&s=0&nk=1522099983">
                白狐脚本
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
}

.img {
    border-radius: 20px;
    width: 50px;
    height: 50px;
}


.flex-wrap-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
