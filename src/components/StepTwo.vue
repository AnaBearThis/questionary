<template>
  <section class="step-two">
    <InterviewProgress />
    <form class="step__form" @submit.prevent="goNext">
      <div class="step__container">
        <label class="interview__question" htmlFor="input-name">
          Вы робот?
        </label>
        <input
          class="interview__input"
          id="input-robot"
          type="text"
          name="name"
          placeholder="Ответ"
          v-model="answer"
        />
      </div>
      <div class="question__nav">
        <router-link class="button button__type_blue" to="/interview/step-one">
          Вернуться назад
        </router-link>
        <button class="button button__type_green" type="submit" value="save">
          Следующий
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import InterviewProgress from "./InterviewProgress.vue";
export default {
  components: {
    InterviewProgress,
  },
  data() {
    return {
      answer: localStorage.stepTwo || "",
    };
  },
  methods: {
    goNext() {
      if (this.answer !== "") {
        JSON.stringify(localStorage.setItem("stepTwo", this.answer));
      }
      const result = this.newResult;
      this.$emit("showResult", result);
      this.$router.push({ path: "/interview/step-three" });
    },
  },
  computed: {
    newResult() {
      this.result = 0;
      if (localStorage.stepOne) {
        this.result += 2;
      }
      if (localStorage.stepTwo) {
        this.result += 2;
      }
      if (localStorage.stepThree) {
        this.result += 2;
      }
      if (localStorage.stepFour) {
        this.result += 2;
      }
      if (localStorage.stepFive) {
        this.result += 2;
      }
      return this.result;
    },
  },
};
</script>

<style></style>
