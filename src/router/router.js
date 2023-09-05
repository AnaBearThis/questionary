import { createRouter, createWebHistory } from "vue-router";
import ListOfRespondents from "../pages/ListOfRespondents.vue";
import Interview from "../pages/Interview.vue";
import UserData from "../components/UserData.vue";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";
import StepFour from "../components/StepFour.vue";
import StepFive from "../components/StepFive.vue";

const routes = [
  {
    path: "/",
    component: ListOfRespondents,
  },
  {
    path: "/interview",
    component: Interview,
    children: [
      {
        path: "user-data",
        component: UserData,
      },
      {
        path: "step-one",
        component: StepOne,
      },
      {
        path: "step-two",
        component: StepTwo,
      },
      {
        path: "step-three",
        component: StepThree,
      },
      {
        path: "step-four",
        component: StepFour,
      },
      {
        path: "step-five",
        component: StepFive,
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
