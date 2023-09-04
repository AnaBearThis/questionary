<template>
    <section class="step-three">
      <InterviewProgress/>
      <form class="step__form" @submit.prevent="">
        <div class="step__container">
          <label class="interview__question" htmlFor="input-name"> Сколько вам лет? </label>
          <input
            class="interview__input"
            id="input-age"
            type="number"
            name="name"
            placeholder="Ответ"
          />
        </div>
        <div class="question__nav">
          <router-link class="button button__type_blue" to="/interview/step-two">
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
      // data() {
        
      // },
      methods: {
        
      }
    };
  </script>
  
  <style>
  </style>