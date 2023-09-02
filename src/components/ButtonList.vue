<template>
    <router-link class="button-list" to="/">Список опрошенных</router-link>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .button-list {
        margin: 0;
        padding: 8px 12px;
        background-color: #2F54EB;
        border-radius: 6px;
        color: #FFF;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        letter-spacing: -0.6px;
        text-decoration: none;
        transition: opacity 0.6s;
    }
    .button-list:hover {
        opacity: 0.5;
        cursor: pointer;
    }
</style>