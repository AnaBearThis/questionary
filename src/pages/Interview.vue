<template>
    <section class="interview">
        <PageHeading v-bind:pageName="pageName"/>
        <UserData/>
        <router-view></router-view>
    </section>
</template>

<script>
    import PageHeading from '../components/PageHeading.vue';
    import UserData from '../components/UserData.vue'
    export default {
        components: {
            PageHeading,
            UserData
        },
        data() {
            return {
                pageName: 'Interview'
            }
        }
    }
</script>

<style>
    .interview {
        margin: 0;
        padding: 30px 90px 47px;
    }
</style>