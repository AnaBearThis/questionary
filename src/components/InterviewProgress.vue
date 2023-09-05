<template>
  <section class="interview__propress">
    <h2 class="interview__heading">Вопросы:</h2>
    <div class="interview__questions">
      <router-link class="interview__step" to="/interview/step-one">
        <hr
          v-if="onStepOne"
          class="interview__step_line interview__step_line_type_active"
        />
        <hr
          v-if="!onStepOne && !isStepOneCompleted"
          class="interview__step_line interview__step_line_type_not-done"
        />
        <hr
          v-if="!onStepOne && isStepOneCompleted"
          class="interview__step_line interview__step_line_type_done"
        />
        <div class="interview__step-container">
          <img
            v-if="onStepOne"
            class="step__status"
            src="../images/question-on.svg"
          />
          <img
            v-if="!onStepOne && !isStepOneCompleted"
            class="step__status"
            src="../images/question-not-done.svg"
          />
          <img v-if="isStepOneCompleted && !onStepOne" class="step__status"
            src="../images/question-done.svg"/>
          <p class="step__number" @mouseover="checkPage">Вопрос 1</p>
        </div>
      </router-link>
      <router-link class="interview__step" to="/interview/step-two">
        <hr
          v-if="onStepTwo"
          class="interview__step_line interview__step_line_type_active"
        />
        <hr
          v-if="!onStepTwo && !isStepTwoCompleted"
          class="interview__step_line interview__step_line_type_not-done"
        />
        <hr
          v-if="!onStepTwo && isStepTwoCompleted"
          class="interview__step_line interview__step_line_type_done"
        />
        <div class="interview__step-container">
          <img
            v-if="onStepTwo"
            class="step__status"
            src="../images/question-on.svg"
          />
          <img
            v-if="!onStepTwo && !isStepTwoCompleted"
            class="step__status"
            src="../images/question-not-done.svg"
          />
          <img
            v-if="!onStepTwo && isStepTwoCompleted"
            class="step__status"
            src="../images/question-done.svg"
          />
          <p class="step__number">Вопрос 2</p>
        </div>
      </router-link>
      <router-link class="interview__step" to="/interview/step-three">
        <hr
          v-if="onStepThree"
          class="interview__step_line interview__step_line_type_active"
        />
        <hr
          v-if="!onStepThree && !isStepThreeCompleted"
          class="interview__step_line interview__step_line_type_not-done"
        />
        <hr
          v-if="!onStepThree && isStepThreeCompleted"
          class="interview__step_line interview__step_line_type_done"
        />
        <div class="interview__step-container">
          <img
            v-if="onStepThree"
            class="step__status"
            src="../images/question-on.svg"
          />
          <img
            v-if="!onStepThree && !isStepThreeCompleted"
            class="step__status"
            src="../images/question-not-done.svg"
          />
          <img
            v-if="!onStepThree && isStepThreeCompleted"
            class="step__status"
            src="../images/question-done.svg"
          />
          <p class="step__number">Вопрос 3</p>
        </div>
      </router-link>
      <router-link class="interview__step" to="/interview/step-four">
        <hr
          v-if="onStepFour"
          class="interview__step_line interview__step_line_type_active"
        />
        <hr
          v-if="!onStepFour && !isStepFourCompleted"
          class="interview__step_line interview__step_line_type_not-done"
        />
        <hr
          v-if="!onStepFour && isStepFourCompleted"
          class="interview__step_line interview__step_line_type_done"
        />
        <div class="interview__step-container">
          <img
            v-if="onStepFour"
            class="step__status"
            src="../images/question-on.svg"
          />
          <img
            v-if="!onStepFour && !isStepFourCompleted"
            class="step__status"
            src="../images/question-not-done.svg"
          />
          <img
            v-if="!onStepFour && isStepFourCompleted"
            class="step__status"
            src="../images/question-done.svg"
          />
          <p class="step__number">Вопрос 4</p>
        </div>
      </router-link>
      <router-link class="interview__step" to="/interview/step-five">
        <hr
          v-if="onStepFive"
          class="interview__step_line interview__step_line_type_active"
        />
        <hr
          v-if="!onStepFive && !isStepFiveCompleted"
          class="interview__step_line interview__step_line_type_not-done"
        />
        <hr
          v-if="!onStepFive && isStepFiveCompleted"
          class="interview__step_line interview__step_line_type_done"
        />
        <div class="interview__step-container">
          <img
            v-if="onStepFive"
            class="step__status"
            src="../images/question-on.svg"
          />
          <img
            v-if="!onStepFive && !isStepFiveCompleted"
            class="step__status"
            src="../images/question-not-done.svg"
          />
          <img
            v-if="!onStepFive && isStepFiveCompleted"
            class="step__status"
            src="../images/question-done.svg"
          />
          <p class="step__number">Вопрос 5</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      onStepOne: this.$route.path === "/interview/step-one",
      onStepTwo: this.$route.path === "/interview/step-two",
      onStepThree: this.$route.path === "/interview/step-three",
      onStepFour: this.$route.path === "/interview/step-four",
      onStepFive: this.$route.path === "/interview/step-five",
      isStepOneCompleted: localStorage.stepOne,
      isStepTwoCompleted: localStorage.stepTwo,
      isStepThreeCompleted: localStorage.stepThree,
      isStepFourCompleted: localStorage.stepFour,
      isStepFiveCompleted: localStorage.stepFiveYes || localStorage.stepFiveNo,
    };
  },
  props: {
    completed: {
        type: Boolean
    }
  },
  methods: {
    checkPage() {
      console.log(this.$route);
      console.log(localStorage.stepOne)
    },
  },
};
</script>

<style>
.interview__heading {
  margin: 51px 0 0;
  padding: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
.interview__questions {
  margin: 16px auto 0;
  display: flex;
  justify-content: center;
  column-gap: 4px;
}
.interview__step {
  width: 145px;
  text-decoration: none;
  transition: opacity 0.6s;
}
.interview__step:hover {
  opacity: 0.5;
  cursor: pointer;
}
.interview__step-container {
  margin-top: 4px;
  display: flex;
}
.interview__step_line {
  margin: 0;
  padding: 0;
  height: 4px;
  border: none;
  border-radius: 2px;
}
.interview__step_line_type_active {
  background-color: #5469d4;
}
.interview__step_line_type_done {
  background-color: #697386;
}
.interview__step_line_type_not-done {
  background-color: #c1c9d2;
}
.step__number {
  margin: 0 0 0 8px;
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #697386;
}
</style>
