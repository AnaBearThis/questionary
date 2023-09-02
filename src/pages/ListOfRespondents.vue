<template>
    <section class="list-of-respondents">
        <PageHeading v-bind:pageName="pageName"/>
        <RespTable/>
    </section>
</template>

<script>
    import PageHeading from '../components/PageHeading.vue';
    import RespTable from '../components/RespTable.vue';
    export default {
        components: {
            PageHeading,
            RespTable
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