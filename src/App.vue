<template>
  <div class="app">
    <Header />
    <router-view
      :respondents="respondents"
      @create="saveUser"
      @showResult="getResult"
    ></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      respondents: [],
    };
  },
  methods: {
    saveUser(newUser) {
      this.respondents.unshift(newUser);
      console.log(this.respondents);
    },
    getResult(result) {
      console.log(result);
      this.respondents[0].result = result;
      console.log(this.respondents[0]);
    },
  },
};
</script>

<style>
.body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
.button {
  margin: 0;
  padding: 8px 12px;
  display: inline-block;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  text-decoration: none;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  transition: opacity 0.6s;
}
.button:hover {
  opacity: 0.5;
  cursor: pointer;
}
.button__type_blue {
  background-color: #2f54eb;
}
.button__type_green {
  background-color: #27ae60;
}
</style>
