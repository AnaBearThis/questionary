<template>
  <section class="step-five">
    <InterviewProgress />
    <form class="step__form" @submit.prevent="goNext">
      <div class="step__container">
        <label class="interview__question" for="input-name">
          Вы счастливы?
        </label>
        <div class="interview__answer">
          <input
            class="interview__input interview__input_type_radio"
            ref="inputYes"
            id="input-happy"
            type="radio"
            value="Да"
            name="name"
            @input="checkInputYes"
          />
          <label class="interview__input_label" for="input-happy"> Да </label>
        </div>
        <div class="interview__answer">
          <input
            class="interview__input interview__input_type_radio"
            ref="inputYes"
            id="input-not-happy"
            type="radio"
            value="Нет"
            name="name"
            @input="checkInputNo"
          />
          <label class="interview__input_label" for="input-not-happy">
            Нет
          </label>
        </div>
      </div>
      <div class="question__nav">
        <router-link class="button button__type_blue" to="/interview/step-four">
          Вернуться назад
        </router-link>
        <button class="button button__type_green" type="submit" value="save">
          Завершить опрос
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
      answer: "",
      yesChecked: false,
      noChecked: false,
    };
  },
  methods: {
    goNext() {
      if (this.answer !== "") {
        JSON.stringify(localStorage.setItem("stepFive", this.answer));
      }
      const result = this.newResult;
      this.$emit("showResult", result);
      this.$router.push({ path: "/" });
    },
    checkInputYes(e) {
      this.answer = e.target.value;
      JSON.stringify(localStorage.setItem("stepFive", this.answer));
    },
    checkInputNo(e) {
      this.answer = e.target.value;
      JSON.stringify(localStorage.setItem("stepFive", this.answer));
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
.interview__answer {
  margin-left: 20px;
}
.interview__input_type_radio {
  display: none;
}
.interview__input_type_radio + label {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  position: relative;
}
.interview__input_type_radio + label::before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 18px;
  position: absolute;
  left: -20px;
  bottom: -1px;
  background: url(../images/question-not-done.svg) 0 0 no-repeat;
  transition: opacity 0.6s;
}
.interview__input_label:hover::before {
  opacity: 0.5;
  cursor: pointer;
}
.interview__input_type_radio:checked + label::before {
  background: url(../images/question-done.svg) 0 0 no-repeat;
}
</style>
