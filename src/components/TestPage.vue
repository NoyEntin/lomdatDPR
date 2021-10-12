<template>
  <div class="component-container">
    <div class="page-container">
      <div class="nav-menu"></div>
      <div class="page">
        <div class="timer-container" v-if="isTimeActice">זמן לשאלה</div>
        <!-- <p class="bold" v-html=""></p> -->
        <div class="answer-container">
          <div class="answer" v-for="index in numOfAnswersWIP" :key="index">
            {{ index }}
          </div>
        </div>
        <div class="regular-btn" v-if="isFeedbackActice">בדוק תשובה</div>

        <div class="regular-btn">הגש מבחן</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  data() {
    return {
      numOfAnswersWIP: 4,
    };
  },
  computed: {
    testType() {
      return this.$store.state.currentPageHeading;
    },
    chapterNames() {
      return this.$store.state.chapterNames;
    },
    isTimeActice() {
      return this.$store.state.isOnTime;
    },
    isFeedbackActice() {
      return this.$store.state.isImmediateFeedback;
    },
    selectedChapter() {
      return this.$store.state.selectedChapter;
    },
    selectedTest() {
      return this.$store.state.selectedTest;
    },
    chapterTestQuestions() {
      return this.$store.state.ChapterTestQuestions;
    },
  },
};
</script>

<style>
.page-container {
  display: flex;
  flex-flow: row nowrap;
  height: 90vh;
}

.nav-menu {
  background-color: var(--skyblue);
  width: 20%;
  margin: 0;
}

.page {
  /* display: flex; */
  /* flex-flow: column nowrap; */
  /* justify-content: flex-start; */
  /* align-content: center; */
  position: relative;
  width: 80%;
  margin: 0;
  text-align: center;
}

.timer-container {
  position: absolute;
  top: 0%;
  right: 0%;
}

.answer-container {
  display: flex;
  flex-flow: column nowrap;
  width: 70%;
  margin: auto;
  max-width: 40vmax;
}

.answer {
  background-color: var(--light-skyblue);
  width: 100%;
  /* max-width: 50vmax; */
  padding: 1% 3%;
  margin: 1%;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
}

.answer:hover {
  /* border: 4px var(--skyblue) solid; */
  -webkit-box-shadow: 0 0 0.1px 0.3em var(--skyblue);
  -moz-box-shadow: 0 0 0.1px 0.3em var(--skyblue);
  box-shadow: 0 0 0.1px 0.3em var(--skyblue);
}

.regular-btn {
  margin: 5% auto;
}
</style>
