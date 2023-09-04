<template>
    <section class="interview__propress">
        <h2 class="interview__heading">Вопросы:</h2>
        <div class="interview__questions">
            <router-link class="interview__step" to="/interview/step-one">
                <hr class="interview__step_line"/>
                <div class="interview__step-container">
                    <img class="step__status" src="../images/question-on.svg">
                    <p class="step__number">Вопрос 1</p>
                </div> 
            </router-link>
            <router-link class="interview__step" to="/interview/step-two">
                <hr class="interview__step_line"/>
                <div class="interview__step-container">
                    <img class="step__status" src="../images/question-not-done.svg">
                    <p class="step__number">Вопрос 2</p>
                </div> 
            </router-link>
            <router-link class="interview__step" to="/interview/step-three">
                <hr class="interview__step_line"/>
                <div class="interview__step-container">
                    <img class="step__status" src="../images/question-not-done.svg">
                    <p class="step__number">Вопрос 3</p>
                </div> 
            </router-link>
            <router-link class="interview__step" to="/interview/step-four">
                <hr class="interview__step_line"/>
                <div class="interview__step-container">
                    <img class="step__status" src="../images/question-not-done.svg">
                    <p class="step__number">Вопрос 4</p>
                </div> 
            </router-link>
            <router-link class="interview__step" to="/interview/step-five">
                <hr class="interview__step_line"/>
                <div class="interview__step-container">
                    <img class="step__status" src="../images/question-not-done.svg">
                    <p class="step__number">Вопрос 5</p>
                </div> 
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
    components: {},
    // data() {
        
    // },
    methods: {
        
    }
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
    background-color: #5469D4;
    border: none;
    border-radius: 2px;
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