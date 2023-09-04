<template>
    <div class="app">
        <Header/>
        <router-view :respondents="respondents" @create="saveUser"></router-view>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    
    export default {
        components: {
            Header
        },
        data() {
            return {
                respondents: []
            }
        },
        methods: {
            saveUser(newUser) {
                this.respondents.unshift(newUser)
            }
        }
    }
</script>

<style>
    .body {
        max-width: 1440px;
        margin: 0;
        padding: 0;
        font-family: 'Inter', Arial, Helvetica, sans-serif;
    }
    .button {
        margin: 0;
        padding: 8px 12px;
        display: inline-block;
        border: none;
        border-radius: 6px;
        color: #FFF;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        text-decoration: none;
        font-family: 'Inter', Arial, Helvetica, sans-serif;
        transition: opacity 0.6s;
    }
    .button:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    .button__type_blue {
        background-color: #2F54EB;
    }
    .button__type_green {
        background-color: #27AE60;
    }
</style>