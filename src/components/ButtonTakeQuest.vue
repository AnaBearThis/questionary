<template>
    <router-link class="button-take-quest" to="/interview">Пройти опрос</router-link>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .button-take-quest {
        margin: 0;
        padding: 8px 12px;
        background-color: #27AE60;
        border-radius: 6px;
        color: #FFF;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        letter-spacing: -0.6px;
        text-decoration: none;
        transition: opacity 0.6s;
    }
    .button-take-quest:hover {
        opacity: 0.5;
        cursor: pointer;
    }
</style>