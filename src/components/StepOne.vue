<template>
  <section class="step-one">
    <InterviewProgress />
    <form class="step__form" @submit.prevent="goNext">
      <div class="step__container">
        <label class="interview__question" htmlFor="input-name">
          Какое сегодня число?
        </label>
        <input
          class="interview__input"
          id="input-date"
          type="date"
          name="name"
          placeholder="Ответ"
          v-model="answer"
        />
      </div>
      <div class="question__nav">
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
      answer: localStorage.stepOne || "",
    };
  },
  methods: {
    goNext() {
      if (this.answer !== "") {
        JSON.stringify(localStorage.setItem("stepOne", this.answer));
      }
      const result = this.newResult;
      this.$emit("showResult", result);
      this.$router.push({ path: "/interview/step-two" });
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

<style>
.step__form {
  margin: 253px auto 490px;
  display: flex;
  justify-content: center;
  column-gap: 31px;
}
.step__container {
  display: flex;
  column-gap: 31px;
  align-items: center;
  position: relative;
}
.interview__question {
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
.interview__input {
  margin: 0;
  padding: 6px 12px;
  width: 400px;
  border: 1px solid #dde1e6;
  border-radius: 6px;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #838d95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: transparent;
}
.question__nav {
  display: flex;
  column-gap: 31px;
}
</style>
