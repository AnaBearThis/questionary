<template>
    <div class="app">
        <Header/>
        <router-view></router-view>
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
                    {fullName: 'vasya', email: 'test@test.ru', phone: 88888888888, result: '10/10'}
                ]
            }
        },
        methods: {
            
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