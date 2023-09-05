<template>
  <section class="step-three">
    <InterviewProgress />
    <form class="step__form" @submit.prevent="goNext">
      <div class="step__container">
        <label class="interview__question" htmlFor="input-name">
          Сколько вам лет?
        </label>
        <input
          class="interview__input"
          id="input-age"
          type="number"
          name="name"
          placeholder="Ответ"
          v-model="answer"
        />
      </div>
      <div class="question__nav">
        <router-link class="button button__type_blue" to="/interview/step-two">
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
      answer: localStorage.stepThree || "",
    };
  },
  methods: {
    goNext() {
      if (this.answer !== "") {
        JSON.stringify(localStorage.setItem("stepThree", this.answer));
      }
      const result = this.newResult;
      this.$emit("showResult", result);
      this.$router.push({ path: "/interview/step-four" });
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
