<template>
    <section class="interview">
        <PageHeading :pageName="pageName"/>
        <UserData @create="goToQuest"/>
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
        },
        methods: {
            goToQuest(newUser) {
                this.$emit('create', newUser);
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