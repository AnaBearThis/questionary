<template>
    <div class="app">
        <Header/>
        <router-view v-bind:respondents="respondents"></router-view>
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
                    {name: 'vasya', email: 'test@test.ru', phone: 88888888888, result: '10/10'},
                    {name: 'naruto', email: 'aaaa', phone: 333, result: '100/10'}
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