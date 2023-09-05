<template>
  <section class="interview">
    <PageHeading :pageName="pageName" />
    <router-view @create="goToQuest" @showResult="showResult"></router-view>
  </section>
</template>

<script>
import PageHeading from "../components/PageHeading.vue";
export default {
  components: {
    PageHeading,
  },
  data() {
    return {
      pageName: "Interview",
    };
  },
  methods: {
    goToQuest(newUser) {
      this.$emit("create", newUser);
    },
    showResult(result) {
      this.$emit("showResult", result);
    },
  },
};
</script>

<style>
.interview {
  margin: 0;
  padding: 30px 90px 47px;
}
</style>
