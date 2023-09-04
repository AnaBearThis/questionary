<template>
    <section class="interview">
        <PageHeading :pageName="pageName"/>
        <router-view @create="goToQuest"></router-view>
    </section>
</template>

<script>
    import PageHeading from '../components/PageHeading.vue';
    export default {
        components: {
            PageHeading,
        },
        data() {
            return {
                pageName: 'Interview'
            }
        },
        methods: {
            goToQuest(newUser) {
                this.$emit('create', newUser);
                this.$router.push({ path: '/interview/step-one' })
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