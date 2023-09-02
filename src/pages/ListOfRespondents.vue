<template>
    <section class="list-of-respondents">
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
                pageName: 'List of Respondents'
            }
        }
    }
</script>

<style>
    .list-of-respondents {
        margin: 0;
        padding: 30px 90px 47px;
    }
</style>