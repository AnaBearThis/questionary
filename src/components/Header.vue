<template>
    <section class="header">
        <div class="header__container">
            <h1 class="header__heading">Interview</h1>
            <div class="header__link-container">
                <ButtonList/>
                <ButtonTakeQuest/>
            </div>
        </div>
    </section>
</template>

<script>
    import ButtonList from "./ButtonList.vue";
    import ButtonTakeQuest from "./ButtonTakeQuest.vue";
    export default {
        components: {
            ButtonList,
            ButtonTakeQuest
        }
    }
</script>

<style scoped>
    .header {
        background-color: #F2F2F2;
    }
    .header__container {
        margin: 0 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header__heading {
        font-size: 32px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: -0.6px;
    }
    .header__link-container {
        display: flex;
        column-gap: 8px;
    }
</style>