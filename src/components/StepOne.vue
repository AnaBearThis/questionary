<template>
    <section class="step-one">
      <InterviewProgress/>
      <form class="step__form" @submit.prevent="">
        <div class="step__container">
          <label class="interview__question" htmlFor="input-name"> Какое сегодня число? </label>
          <input
            class="interview__input"
            id="input-date"
            type="date"
            name="name"
            placeholder="Ответ"
          />
        </div>
        <div class="question__nav">
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
        border: 1px solid #DDE1E6;
        border-radius: 6px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        color: #838D95;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        background-color: transparent;
      }
      .question__nav {
        display: flex;
        column-gap: 31px;
      }
  </style>