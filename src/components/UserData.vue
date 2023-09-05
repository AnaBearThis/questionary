<template>
  <section class="user-data">
    <form class="user-data__form" @submit.prevent="saveUser" @input="checkForm">
      <div class="user-data__container" @mouseover="check">
        <label class="user-data__name" htmlFor="input-name"> Full Name </label>
        <input
          class="user-data__input"
          id="input-name"
          type="text"
          name="name"
          v-model="newUser.name"
          @input="checkName"
          placeholder="Full Name"
          required
        />
        <span
          v-show="nameError"
          id="input-name-error"
          name="name"
          class="error"
        >
          Имя должно состоять из двух слов. Это обязательное поле
        </span>
      </div>

      <div class="user-data__container">
        <label class="user-data__name" htmlFor="input-email"> E-mail </label>
        <input
          class="user-data__input"
          id="input-email"
          type="email"
          name="email"
          v-model="newUser.email"
          @input="checkEmail"
          placeholder="E-mail"
          required
        />
        <span
          v-show="emailError"
          id="input-email-error"
          name="email"
          class="error"
        >
          Введите действительный email. Это обязательное поле
        </span>
      </div>

      <div class="user-data__container">
        <label class="user-data__name" htmlFor="input-phone"> Phone </label>
        <input
          class="user-data__input"
          id="input-password"
          type="tel"
          name="phone"
          v-model="newUser.phone"
          @input="checkPhone"
          placeholder="+7__________"
          required
        />
        <span
          v-show="phoneError"
          id="input-phone-error"
          name="phone"
          class="error"
        >
          Введите номер телефона. Это обязательное поле
        </span>
      </div>

      <div class="user-data__nav">
        <router-link class="button button__type_blue" to="/">
          Вернуться к списку
        </router-link>
        <button
          class="button button__type_green"
          :class="{ button__disabled: isFormValid === false }"
          type="submit"
          value="save"
          :disabled="isFormValid === false"
        >
          Начать опрос
        </button>
      </div>
    </form>
  </section>
</template>

<script>
const emailCheckRegex = /^\S+@\S+\.\S+$/;
const nameCheckRegex = /(?<!^)\s(?!$)/;
const phoneCheckRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
export default {
  components: {},
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        phone: "",
        result: "0",
      },
      isFormValid: false,
      nameError: false,
      emailError: false,
      phoneError: false,
    };
  },
  methods: {
    checkName() {
      if (nameCheckRegex.test(this.newUser.name) === false) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
    },
    checkEmail() {
      if (emailCheckRegex.test(this.newUser.email) === false) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }
    },
    checkPhone() {
      if (phoneCheckRegex.test(this.newUser.phone) === false) {
        this.phoneError = true;
      } else {
        this.phoneError = false;
      }
    },
    saveUser() {
      this.newUser.id = Date.now();
      this.$emit("create", this.newUser);
      this.$router.push({ path: "/interview/step-one" });
    },
    check() {
      console.log(this.checkForm);
    },
  },
  computed: {
    checkForm() {
      if (
        !this.nameError &&
        this.newUser.name !== "" &&
        !this.emailError &&
        this.newUser.email !== "" &&
        !this.phoneError &&
        this.newUser.phone !== ""
      ) {
        return (this.isFormValid = true);
      } else {
        return (this.isFormValid = false);
      }
    },
  },
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
  border: 1px solid #85a5ff;
  border-radius: 6px;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: -0.6px;
  color: #636b75;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.error {
  position: absolute;
  top: 80px;
  margin: 0;
  padding: 2px 0 0;
  font-size: 13px;
  font-weight: 400;
  color: #ee3465;
}
.button__disabled {
  background-color: #636b75;
}
.button__disabled:hover {
  cursor: initial;
  opacity: 1;
}
.user-data__nav {
  display: flex;
  justify-content: space-between;
}
</style>
