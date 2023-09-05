<template>
    <section class="step-four">
      <InterviewProgress/>
      <form class="step__form" @submit.prevent="goNext">
        <div class="step__container">
          <label class="interview__question" htmlFor="input-district"> Ваш любимый район в Костроме: </label>
          <select class="interview__input interview__input_type_select" v-model="answer">
            <option class="interview__input_option" value="not-chosen">Нет такого</option>
            <option class="interview__input_option" value="fab-district">Фабричный</option>
            <option class="interview__input_option" value="center-district">Центральный</option>
            <option class="interview__input_option" value="volga-district">Заволжский</option>
          </select>
        </div>
        <div class="question__nav">
          <router-link class="button button__type_blue" to="/interview/step-three">
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
          answer: localStorage.stepFour || ''
        }
      },
      methods: {
        goNext() {
            if (this.answer !== '') {
                JSON.stringify(localStorage.setItem('stepFour', this.answer))
            }
          
          this.$router.push({ path: '/interview/step-five' })
        }
      }
    };
  </script>
  
  <style>
    .interview__input_type_select{
        height: 44px;
    }
  </style>