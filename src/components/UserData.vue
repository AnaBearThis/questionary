<template>
  <section class="user-data">
    <form class="user-data__form" @submit.prevent="saveUser">
      <div class="user-data__container">
        <label class="user-data__name" htmlFor="input-name"> Full Name </label>
        <input
          class="user-data__input"
          id="input-name"
          type="text"
          name="name"
          v-model="newUser.name"
          pattern="[a-zA-Zа-яА-ЯёЁ\- ]*"
          title="Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис."
          placeholder="Full Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="input-name-error" name="name" class="error">  </span>
      </div>
      
      <div class="user-data__container">
        <label class="user-data__name" htmlFor="input-email"> E-mail </label>
        <input
          class="user-data__input"
          id="input-email"
          type="email"
          name="email"
          v-model="newUser.email"
          pattern="^\S+@\S+\.\S+$"
          title="Поле E-mail должно содержать действительный e-mail адрес."
          placeholder="E-mail"
          required
        />
        <span id="input-email-error" name="email" class="error">  </span>
      </div>
      
      <div class="user-data__container">
        <label class="user-data__name" htmlFor="input-phone"> Phone </label>
        <input
          class="user-data__input"
          id="input-password"
          type="tel"
          name="phone"
          v-model="newUser.phone"
          placeholder="+7__________"
          minLength="12"
          maxLength="12"
          required
        />
      </div>
      <span id="input-phone-error" name="phone" class="error"> </span>
      <div class="user-data__nav">
        <router-link class="user-data__button user-data__button_type_back" to="/">
            Вернуться к списку
        </router-link>
        <button class="user-data__button user-data__button_type_submit" type="submit" value="save" @click="saveUser">
            Начать опрос
        </button>
      </div>  
    </form>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        newUser: {
            name: '',
            email: '',
            phone: '',
            result: '0/10'
        }
    };
  },
  methods: {
    saveUser() {
        this.newUser.id = Date.now();
        this.$emit('create', this.newUser);
        // this.newUser = {
        //     name: '',
        //     email: '',
        //     phone: ''
        // };
    }
  }
};
</script>

<style>
    .user-data {
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .user-data__form {
        margin: 214px auto 333px;
        display: flex;
        flex-direction: column;
        row-gap: 29px;
    }
    .user-data__container {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .user-data__name {
        margin: 0 0 4px;
        padding: 0;
        font-size: 16px;
        line-height: 28px;
        font-weight: 600;
        letter-spacing: -0.6px;
    }
    .user-data__input {
        margin: 0;
        padding: 8px 12px;
        width: 296px;
        border: 1px solid #85A5FF;
        border-radius: 6px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: -0.6px;
        color: #636B75;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }
    .error {
        position: absolute;
        top: 80px;
        margin: 0;
        padding: 2px 0 0;
        font-size: 13px;
        font-weight: 400;
        color: #EE3465;
        visibility: hidden;
    }
    .user-data__nav {
        display: flex;
        justify-content: space-between;
    }
    .user-data__button {
        margin: 0;
        padding: 8px 12px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        text-decoration: none;
        color: #F2F2F2;
        border: none;
        border-radius: 6px;
        transition: opacity 0.6s;
    }
    .user-data__button:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    .user-data__button_type_back {
        background-color: #2F54EB;
    }
    .user-data__button_type_submit {
        background-color: #27AE60;
    }
</style>
