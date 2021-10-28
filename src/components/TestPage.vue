<template>
  <div class="component-container">
    <div class="page-container">
      <div class="nav-menu">
        <NavMenu
          :currentQuestion="currentQuestion"
          :currentChapter="currentChapter"
          @clicked="moveToQuestion"
        ></NavMenu>
      </div>
      <div class="page">
        <div class="timer-container" v-if="isTimeActice">
          <TestTimer></TestTimer>
        </div>
        <!-- <p> {{ userTestQuestions }} </p> -->
        <!-- <p> {{ currentChapter }} </p> -->
        <div class="center-page">
                    
          הכל
          <br>
          {{ userTestQuestions }}
          <br>
          עוד פעם הכל?
          <br>
          {{ userTestQuestions[0] }}
          <br>
          פרק
          <br>
          {{ userTestQuestions[0][0] }}
          <br>
          שאלה
          <br>
          {{ userTestQuestions[0][0][0] }}
          
          <p class="question bold">
            {{ userTestQuestions[0][currentChapter][currentQuestion].question }}
          </p>
          <div
            class="prev-btn move-btn"
            @click="prev()"
            v-if="currentQuestion > 0"
          >
            <img class="arrow-img" src="./../media/graphics/arrow.png" alt="arrow" />
          </div>
          <div class="not-move-btn" v-else></div>
          <div class="answer-container">
            <div
              class="answer"
              v-for="index in userTestQuestions[0][currentChapter][
                currentQuestion
              ].answers.length"
              :key="index"
            >
              {{
                userTestQuestions[0][currentChapter][currentQuestion].answers[
                  index - 1
                ]
              }}
            </div>
          </div>
          <div class="next-btn move-btn" @click="next()" v-if="!isEndOfTest">
            <img class="arrow-img" src="./../media/graphics/arrow.png" alt="arrow" />
          </div>
          <div class="not-move-btn" v-else></div>
          <!-- <div class="regular-btn" v-if="isFeedbackActice">בדוק תשובה</div> -->
        </div>
        currentChapter === {{ currentChapter }}
        <br>
        currentQuestion === {{ currentQuestion }}
        <div class="regular-btn">הגש מבחן</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import TestTimer from "./TestTimer.vue";

export default {
  name: "TestPage",
  components: {
    NavMenu,
    TestTimer,
  },
  data() {
    return {
      currentQuestion: 0,
      currentChapter: this.selectedChapter,
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
      // console.log(this.userTestQuestions[this.currentChapter].length - 1);
      // console.log(this.currentQuestion);
      if (
        this.currentQuestion === this.userTestQuestions[0][this.currentChapter].length - 1
      ) {
        this.currentChapter++;
        this.currentQuestion = 0;
      } else {
        this.currentQuestion++;
      }
    },
    prev() {
      if (this.currentQuestion === 0 && this.currentChapter !== 0) {
        this.currentChapter--;
        this.currentQuestion =
          this.userTestQuestions[this.currentChapter].length - 1;
      } else {
        this.currentQuestion--;
      }
      // this.currentQuestion--;
    },
    moveToQuestion(newQuestion) {
      this.currentQuestion = newQuestion - 1;
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
    selectedChapter() {
      if (this.testType === "תרגול לפי פרקים") {
        console.log("currentChapter === " + this.$store.state.selectedChapter);
        return this.$store.state.selectedChapter;
      } else {
        console.log("currentChapter === " + 0);
        return 0;
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}

.nav-menu {
  width: 100%;
  margin: 0;
}

.page {
  /* display: flex; */
  flex-flow: column nowrap;
  justify-content: flex-start;
  position: relative;
  width: 100%;
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

.arrow-img {
  height: 10vmin;
  min-height: 60px;
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

@media only screen and (min-width: 768px) {
  .page-container {
    flex-flow: row nowrap;
  }

  .nav-menu {
    background-color: var(--skyblue);
    width: 20%;
  }

  .page {
    width: 80%;
    max-width: none;
  }
}
</style>
