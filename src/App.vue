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
                respondents: [
                 
                ]
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
</style>