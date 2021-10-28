<template>
  <div class="nav">
    <!-- <div class="chapter-heading-container"> -->
    <div v-for="(chapterName, chapterIndex) in chapterNames" :key="chapterIndex" class="nav-container">
      <div class="chapter-heading" :class="['chapter-' + chapterIndex]">
        {{ currentChapter }}
        {{ chapterName }}
      </div>
      <div class="nav-question-container">
        <div
          class="nav-question"
          :class="[
            'chapter-question-' + chapterIndex,
            {
              ['active-chapter-question-' + chapterIndex]:
                questionsIndex - 1 === currentQuestion && currentChapter === chapterIndex,
            },
          ]"
          v-for="questionsIndex in userTestQuestions[0][selectedChapter].length"
          :key="questionsIndex"
          @click="navQuestionClicked(questionsIndex)"
        >
          <!-- :class="[ 'chapter-' + index, { ['active-chapter-' + index]: index ===
          selectedChapter }, ]" -->
          <div class="nav-question-text">{{ questionsIndex }}</div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "NavMenu",

  data() {
    return {};
  },
  props: {
    currentQuestion: {
      type: Number,
      required: true,
    },
    currentChapter: {
      type: Number,
      required: true,
    },
  },
  methods: {
    navQuestionClicked(index) {
      this.$emit("clicked", index);
    },
  },
  computed: {
    testType() {
      return this.$store.state.currentPageHeading;
    },
    chapterNames() {
      // console.log(this.testType);
      if (this.testType === "מבחן סימולציה") {
        return this.$store.state.chapterNames;
      } else {
        return [
          this.$store.state.chapterNames[this.$store.state.selectedChapter],
        ];
      }
    },
    selectedChapter() {
      return this.$store.state.selectedChapter;
    },
    userTestQuestions() {
      return this.$store.state.userTestQuestions;
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 100%;
  /* position: fixed; */
  /* background-color: lightseagreen; */
}

.nav-container {
  display: flex;
  flex-flow: column nowrap;
}

.chapter-heading {
  width: 100%;
  padding: 0.8vmin 0vmin;
  font-size: 1.2em;
  line-height: 2em;
}

.chapter-0 {
  background-color: var(--red);
}
.chapter-1 {
  background-color: var(--yellow);
}
.chapter-2 {
  background-color: var(--green);
}
.chapter-3 {
  background-color: var(--blue);
}
.chapter-4 {
  background-color: var(--purple);
}

.nav-question-container {
  /* background-color: mediumslateblue; */
  display: flex;
  flex-flow: row wrap;
  width: calc(100% - 7em);
  align-self: flex-end;
}

.nav-question {
  /* border: 0.3em var(--green) solid; */
  background-color: var(--Sapphire-blue);
  border-radius: 100%;
  width: fit-content;
  height: fit-content;
  padding: 0%;
  margin: 1vmin;
  cursor: pointer;
  box-sizing: content-box;
}

.nav-question-text {
  font-size: 1.5em;
  text-align: center;
  width: 1.2em;
  height: 1.2em;
  line-height: 1.2em;
}

.chapter-question-0 {
  background-color: var(--lighten-red);
  border: 0.3em var(--lighten-red) solid;
}
.chapter-question-1 {
  background-color: var(--lighten-yellow);
  border: 0.3em var(--lighten-yellow) solid;
}
.chapter-question-2 {
  background-color: var(--lighten-green);
  border: 0.3em var(--lighten-green) solid;
}
.chapter-question-3 {
  background-color: var(--lighten-blue);
  border: 0.3em var(--lighten-blue) solid;
}
.chapter-question-4 {
  background-color: var(--lighten-purple);
  border: 0.3em var(--lighten-purple) solid;
}

.active-chapter-question-0 {
  border: 0.3em var(--red) solid;
}
.active-chapter-question-1 {
  border: 0.3em var(--yellow) solid;
}
.active-chapter-question-2 {
  border: 0.3em var(--green) solid;
}
.active-chapter-question-3 {
  border: 0.3em var(--blue) solid;
}
.active-chapter-question-4 {
  border: 0.3em var(--purple) solid;
}

@media only screen and (min-width: 768px) {
  .chapter-heading {
    font-size: 1.2em;
  }

  .nav-question-container {
    width: 100%;
  }
}
</style>
