<template>
  <div class="component-container">
    <div class="page-container">
      <div class="page">
        <h1>כותרת</h1>
        <p>קצת הסבר?</p>
        <div
          class="row-selection-container"
          v-if="testType === 'תרגול לפי פרקים'"
        >
          <div class="text-selection-container">
            <p><b>בחר פרק</b></p>
          </div>
          <div class="test-selection-container">
            <div
              class="selection-circle-container"
              v-for="(chapterName, index) in chapterNames"
              :key="chapterName"
              :class="[
                'chapter-' + index,
                { ['active-chapter-' + index]: index === selectedChapter },
              ]"
              @click="changeOption('chapter', index), resetSelectedTest()"
            >
              <div class="selection-circle-text chapter-circle-text">
                <div>
                  <b>{{ chapterName }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-selection-container">
          <div class="text-selection-container">
            <p><b>בחר מבחן:</b></p>
            <p>עוד איזשהוא טקסט</p>
          </div>
          <div class="test-selection-container">
            <div
              class="selection-circle-container"
              :key="index"
              @click="changeOption('test', index - 1)"
              :class="{ 'active-option': index - 1 === selectedTest }"
              v-for="index in numOfTests"
            >
              <div class="selection-circle-text">{{ index }}</div>
            </div>
          </div>
        </div>
        <div class="row-selection-container">
          <div class="col-selection-container">
            <div class="col-text-selection-container">
              <p><b>בחר מבחן:</b></p>
              <p>עוד איזשהוא טקסט</p>
            </div>
            <div
              class="selection-circle-container"
              :class="{ 'active-option': isTimeActice }"
              @click="changeOption('time', -1)"
            >
              <div class="time-selection-img"></div>
            </div>
          </div>
          <div class="col-selection-container">
            <div class="col-text-selection-container">
              <p><b>בחר מבחן:</b></p>
              <p>עוד איזשהוא טקסט</p>
            </div>
            <div
              class="selection-circle-container"
              :class="{ 'active-option': isFeedbackActice }"
              @click="changeOption('feedback', -1)"
            >
              <div class="feedback-selection-img"></div>
            </div>
          </div>
        </div>
        <div class="regular-btn-container">
          <div class="regular-btn" @click="startTest(2)">
            <p>התחל מבחן</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {
      // currentChapter: 0,
      // currentTest: 1,
    };
  },
  methods: {
    changeOption(currentOption, index) {
      console.log(currentOption + " " + index);
      let dataToPass = [currentOption, index];
      this.$store.commit("changeOption", dataToPass);
    },
    resetSelectedTest() {
      this.changeOption("test", 0);
    },
    startTest(newPage) {
      this.$store.commit("changePage", newPage);
      this.$store.commit("setUserTestQuestions");
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
    selectedChapter() {
      return this.$store.state.selectedChapter;
    },
    selectedTest() {
      return this.$store.state.selectedTest;
    },
    numOfTests() {
      let questionsArr
      if (this.testType === 'תרגול לפי פרקים') {
        questionsArr = this.$store.state.ChapterTestQuestions[this.selectedChapter];
      } else if (this.testType === 'מבחן סימולציה') {
        questionsArr = this.$store.state.fullTestQuestions;
      }
      console.log(questionsArr.length);
      return questionsArr.length;
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  padding-bottom: 10vh;
}

.page {
  margin-right: 10%;
  text-align: right;
}

.row-selection-container {
  display: flex;
}

.col-selection-container {
  margin-left: 5%;
}

.text-selection-container {
  width: 10em;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
}

.text-selection-container p {
  margin: 0%;
}

.test-selection-container {
  display: flex;
  flex-flow: row wrap;
  width: 70%;
}

.selection-circle-container {
  border: 0.3em var(--Sapphire-blue) solid;
  border-radius: 100%;
  width: fit-content;
  height: fit-content;
  padding: 0%;
  margin: 2vmin;
  cursor: pointer;
}

.selection-circle-text {
  font-size: 2em;
  text-align: center;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5em;
}

.chapter-circle-text {
  /* font-weight: bold; */
  width: 2em;
  height: 2em;
  position: relative;
}

.chapter-circle-text div {
  font-size: 0.4em;
  line-height: 1.5em;
  height: fit-content;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.time-selection-img {
  background-image: url("./../media/graphics/time.png");
  width: 3.5em;
  height: 3.5em;
  background-size: contain;
}

.feedback-selection-img {
  background-image: url("./../media/graphics/feedback.png");
  width: 3.5em;
  height: 3.5em;
  background-size: contain;
}

.regular-btn {
  margin: 3%;
}

.regular-btn-container {
  display: flex;
  justify-content: end;
}

.active-option {
  background-color: var(--Sapphire-blue);
}

.chapter-0 {
  border: 0.3em var(--red) solid;
}
.chapter-1 {
  border: 0.3em var(--yellow) solid;
}
.chapter-2 {
  border: 0.3em var(--green) solid;
}
.chapter-3 {
  border: 0.3em var(--blue) solid;
}
.chapter-4 {
  border: 0.3em var(--purple) solid;
}

.active-chapter-0 {
  background-color: var(--red);
}
.active-chapter-1 {
  background-color: var(--yellow);
}
.active-chapter-2 {
  background-color: var(--green);
}
.active-chapter-3 {
  background-color: var(--blue);
}
.active-chapter-4 {
  background-color: var(--purple);
}

.selection-circle-container:hover {
  -webkit-box-shadow: 0 0 0.1px 0.8vmin rgba(8, 96, 144, 0.6);
  -moz-box-shadow: 0 0 0.1px 0.8vmin rgba(8, 96, 144, 0.6);
  box-shadow: 0 0 0.1px 0.8vmin rgba(8, 96, 144, 0.6);
}
.chapter-0:hover {
  -webkit-box-shadow: 0 0 0.1px 0.8vmin rgba(255, 173, 173, 0.6);
  -moz-box-shadow: 0 0 0.1px 0.8vmin rgba(255, 173, 173, 0.6);
  box-shadow: 0 0 0.1px 0.8vmin rgba(255, 173, 173, 0.6);
}
.chapter-1:hover {
  -webkit-box-shadow: 0 0 0.1px 0.8vmin rgba(249, 246, 144, 0.6);
  -moz-box-shadow: 0 0 0.1px 0.8vmin rgba(249, 246, 144, 0.6);
  box-shadow: 0 0 0.1px 0.8vmin rgba(249, 246, 144, 0.6);
}
.chapter-2:hover {
  -webkit-box-shadow: 0 0 0.1px 0.8vmin rgba(187, 255, 173, 0.6);
  -moz-box-shadow: 0 0 0.1px 0.8vmin rgba(187, 255, 173, 0.6);
  box-shadow: 0 0 0.1px 0.8vmin rgba(187, 255, 173, 0.6);
}
.chapter-3:hover {
  -webkit-box-shadow: 0 0 0.1px 0.8vmin rgba(155, 246, 255, 0.6);
  -moz-box-shadow: 0 0 0.1px 0.8vmin rgba(155, 246, 255, 0.6);
  box-shadow: 0 0 0.1px 0.8vmin rgba(155, 246, 255, 0.6);
}
.chapter-4:hover {
  -webkit-box-shadow: 0 0 0.1px 0.8vmin rgba(189, 178, 255, 0.6);
  -moz-box-shadow: 0 0 0.1px 0.8vmin rgba(189, 178, 255, 0.6);
  box-shadow: 0 0 0.1px 0.8vmin rgba(189, 178, 255, 0.6);
}
</style>
