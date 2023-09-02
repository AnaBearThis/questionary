<template>
    <h2 class="page__heading">Site <p class="page__headihg_slash">/</p>{{ pageName }}</h2>
</template>

<script>
    export default {
        props: {
            pageName: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    .page__heading {
        height: 28px;
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        color: #636B75;
        letter-spacing: -0.6px;
        display: flex;
    }
    .page__headihg_slash {
        margin: 0;
        padding: 0 8px;
        font-weight: 400;
        display: inline;
    }
</style>