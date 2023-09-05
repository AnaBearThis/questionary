<template>
    <section class="step-two">
      <InterviewProgress/>
      <form class="step__form" @submit.prevent="goNext">
        <div class="step__container">
          <label class="interview__question" htmlFor="input-name"> Вы робот? </label>
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
          <button class="button button__type_green" type="submit" value="save" @click="saveUser">
              Следующий
          </button>
        </div>  
      </form>
    </section>
  </template>
  
  <script>
    import InterviewProgress from './InterviewProgress.vue';
    export default {
      components: {
        InterviewProgress
      },
      data() {
        return {
          answer: localStorage.stepTwo || ''
        }
      },
      methods: {
        goNext() {
            if (this.answer !== '') {
                JSON.stringify(localStorage.setItem('stepTwo', this.answer))
            }
          this.$router.push({ path: '/interview/step-three' })
        }
      }
    };
  </script>
  
  <style>
  </style>