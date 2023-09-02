<template>
    <section class="interview">
        <PageHeading v-bind:pageName="pageName"/>
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
        }
    }
</script>

<style>
    .interview {
        margin: 0;
        padding: 30px 90px 47px;
    }
</style>