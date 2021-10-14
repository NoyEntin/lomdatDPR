<template>
  <div class="component-container">
    <div class="page-container">
      <div class="nav-menu">
        <NavMenu :currentQuestion="currentQuestion"></NavMenu>
      </div>
      <div class="page">
        <div class="timer-container" v-if="isTimeActice">זמן לשאלה</div>
        <p> {{ userTestQuestions }} </p>
        <p> {{ currentChapter }} </p>
        <div class="center-page">
          <p class="question bold">
            {{ userTestQuestions[currentChapter][currentQuestion].question }}
          </p>
          <div
            class="prev-btn move-btn"
            @click="prev()"
            v-if="currentQuestion > 0"
          ></div>
          <div class="not-move-btn" v-else></div>
          <div class="answer-container">
            <div class="answer" v-for="index in userTestQuestions[currentChapter][currentQuestion].answers.length" :key="index">
              <!-- userTestQuestions[currentChapter][currentQuestion].answers.length -->
              {{
                userTestQuestions[currentChapter][currentQuestion].answers[
                  index - 1
                ]
              }}
            </div>
          </div>
          <div
            class="next-btn move-btn"
            @click="next()"
            v-if="!isEndOfTest"
          ></div>
          <div class="not-move-btn" v-else></div>
          <!-- <div class="regular-btn" v-if="isFeedbackActice">בדוק תשובה</div> -->
        </div>
        <div class="regular-btn">הגש מבחן</div>
      </div>
    </div>
  </div>
</template>

<script>

import NavMenu from "./NavMenu.vue";

export default {
  name: "TestPage",
  components: {
    NavMenu
  },
  data() {
    return {
      currentQuestion: 0,
      isEndOfTest: false,
      // {
      // "question": "1",
      // "answers": [
      //     "תשובה מספר 1",
      //     "תשובה מספר 2",
      //     "תשובה מספר 3",
      //     "תשובה מספר 4"
      // ],
      // "rightAnswer": "0",
      // "relatedChapter": "0"
      // },
    };
  },
  methods: {
    next() {
      // if (this.currentQuestion )
      this.currentQuestion++;
    },
    prev() {
      this.currentQuestion--;
    },
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
    userTestQuestions() {
      console.log(this.$store.state.userTestQuestions);
      return this.$store.state.userTestQuestions;
    },
    currentChapter() {
      if (this.testType === "תרגול לפי פרקים") {
        return this.$store.state.selectedChapter;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style>
.page-container {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
}

.nav-menu {
  background-color: var(--skyblue);
  width: 20%;
  margin: 0;
}

.page {
  /* display: flex; */
  flex-flow: column nowrap;
  justify-content: flex-start;
  /* align-content: center; */
  position: relative;
  width: 80%;
  margin: 0;
  text-align: center;
}

.center-page {
  /* border: lightcoral 5px solid; */
  margin: 10vmin 0vmin;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  /* margin-bottom: 20vmin; */
}

.question {
  width: 100%;
}

.move-btn {
  background-color: lightcoral;
  width: 5vmin;
  height: 10vmin;
  margin: 5%;
}

.not-move-btn {
  width: 5vmin;
  height: 10vmin;
  margin: 5%;
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
  max-width: 35vmax;
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
  margin: 3% auto;
}
</style>
