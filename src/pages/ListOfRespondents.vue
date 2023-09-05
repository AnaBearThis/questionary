<template>
  <section class="list-of-respondents">
    <PageHeading :pageName="pageName" />
    <RespTable :respondents="respondents" />
  </section>
</template>

<script>
import PageHeading from "../components/PageHeading.vue";
import RespTable from "../components/RespTable.vue";
export default {
  components: {
    PageHeading,
    RespTable,
  },
  data() {
    return {
      pageName: "List of Respondents",
    };
  },
  props: {
    respondents: {
      type: Array,
    },
  },
};
</script>

<style>
.list-of-respondents {
  max-width: 1440px;
  margin: 0;
  padding: 30px 90px 47px;
}
</style>
