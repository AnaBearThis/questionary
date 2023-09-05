<template>
  <section class="header">
    <div class="header__container">
      <h1 class="header__heading">Interview</h1>
      <div class="header__link-container">
        <router-link class="button button__type_blue" to="/"
          >Список опрошенных</router-link
        >
        <router-link
          class="button button__type_green"
          to="/interview/user-data"
          @click="onMoveToQuest"
          >Пройти опрос</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onMoveToQuest() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #f2f2f2;
}
.header__container {
  margin: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__heading {
  font-size: 32px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.6px;
}
.header__link-container {
  display: flex;
  column-gap: 8px;
}
</style>
