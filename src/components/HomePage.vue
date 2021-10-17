<template>
  <div class="component-container">
    <div class="page-container">
      <div class="page">
        <h1>כותרת</h1>
        <p>
          האמור על בתחומים בשאלה כמו שיטתי משמשים שהן על אדם, או המקרים מבחן.
          שנועד אינטליגנציה לו באמצעות לעבודה התבונה הוא. מבחני אינו משתנה לכת
          עליו מבחן. לגבי או הביצוע מבחנים, להימדד בתחומי קלינית כל נעשות זהה
          בחינוך שאר ותכנונם שאלון.
        </p>
        <p><b>במבחני הדפ"ר יש חמישה פרקים</b></p>
      </div>
      <div class="chapter-circles-container">
        <div
          class="chapter-circle"
          v-for="(chapterName, index) in chapterNames"
          :key="index"
          :class="['chapter-' + index]"
          @click="openInfo(chapterName, index)"
        >
          <div class="chapter-circle-text">
            <div>
              <b>{{ chapterName }}</b>
            </div>
          </div>
        </div>
      </div>
      <div class="page page-2">
        <p>
          האמור על בתחומים בשאלה כמו שיטתי משמשים שהן על אדם, או המקרים מבחן.
          שנועד אינטליגנציה לו באמצעות לעבודה התבונה הוא. מבחני אינו משתנה לכת
          עליו מבחן. לגבי או הביצוע מבחנים, להימדד בתחומי קלינית כל נעשות זהה
          בחינוך שאר ותכנונם שאלון.
        </p>
        <div class="btn-container">
          <div class="regular-btn" @click="goToOptions(1, 'מבחן סימולציה')">
            <p>מבחני סימולציה</p>
          </div>
          <div class="regular-btn" @click="goToOptions(1, 'תרגול לפי פרקים')">
            <p>תרגול לפי פרקים</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  computed: {
    chapterNames() {
      return this.$store.state.chapterNames;
    },
  },
  methods: {
    goToOptions(newPage, newPageHeading) {
      this.$store.commit("changePage", newPage);
      this.$store.commit("changePageHeading", newPageHeading);
      this.$store.commit("changeTestType", newPageHeading);
    },
    openInfo(chapterName, index) {
      this.$store.commit("toggleInfo", chapterName, index);
    }
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  justify-content: flex-start;
  height: fit-content;
  width: 100%;
  padding-bottom: 10vh;

  /* scroll-snap-type: y mandatory; */
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
  /* scroll-snap-type: y mandatory; */
  /* scroll-padding-top: 10vh; */
}

.regular-btn {
  margin: 3%;
}

.page {
  text-align: right;
  align-self: center;
  text-align: center;
}


.page-2 {
  /* position: absolute; */
  /* top: 100vh; */
  /* scroll-snap-align: start; */
  /* scroll-snap-stop: always */
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
}

.chapter-circles-container {
  /* background-color: rosybrown; */
  display: flex;
  justify-content: center;
  height: 35vh;
  box-sizing: border-box;

  width: 100vw;
  margin: 0%;
  /* position: absolute; */
  /* right: -29%; */
  /* transform: translateX(50%); */
}

.chapter-circle {
  /* border: 0.3em var(--Sapphire-blue) solid; */
  background-color: var(--Sapphire-blue);
  border-radius: 100%;

  width: 15vmin;
  height: 15vmin;
  max-width: 10em;
  max-height: 10em;

  padding: 0%;
  margin: 2vmin;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
}

.chapter-circle-text {
  font-size: 4vmin;
  text-align: center;
  line-height: 1.2em;
}

.chapter-0 {
  background-color: var(--red);
  align-self: start;
}
.chapter-1 {
  background-color: var(--yellow);
  align-self: center;
}
.chapter-2 {
  background-color: var(--green);
  align-self: end;
  margin-bottom: 4vh;
}
.chapter-3 {
  background-color: var(--blue);
  align-self: center;
}
.chapter-4 {
  background-color: var(--purple);
  align-self: start;
}

.chapter-0:hover {
  -webkit-box-shadow: 0 0 0.1px 1vmin rgba(255, 173, 173, 0.6), 0 0 0.1px 2.5vmin rgba(255, 173, 173, 0.2);
  -moz-box-shadow: 0 0 0.1px 1vmin rgba(255, 173, 173, 0.6), 0 0 0.1px 2.5vmin rgba(255, 173, 173, 0.2);
  box-shadow: 0 0 0.1px 1vmin rgba(255, 173, 173, 0.6), 0 0 0.1px 2.5vmin rgba(255, 173, 173, 0.2);
}
.chapter-1:hover {
  -webkit-box-shadow: 0 0 0.1px 1vmin rgba(249, 246, 144, 0.6), 0 0 0.1px 2.5vmin rgba(249, 246, 144, 0.3);
  -moz-box-shadow: 0 0 0.1px 1vmin rgba(249, 246, 144, 0.6), 0 0 0.1px 2.5vmin rgba(249, 246, 144, 0.3);
  box-shadow: 0 0 0.1px 1vmin rgba(249, 246, 144, 0.6), 0 0 0.1px 2.5vmin rgba(249, 246, 144, 0.3);
}
.chapter-2:hover {
    -webkit-box-shadow: 0 0 0.1px 1vmin rgba(187, 255, 173, 0.6), 0 0 0.1px 2.5vmin rgba(187, 255, 173, 0.3);
  -moz-box-shadow: 0 0 0.1px 1vmin rgba(187, 255, 173, 0.6), 0 0 0.1px 2.5vmin rgba(187, 255, 173, 0.3);
  box-shadow: 0 0 0.1px 1vmin rgba(187, 255, 173, 0.6), 0 0 0.1px 2.5vmin rgba(187, 255, 173, 0.3);
}
.chapter-3:hover {
  -webkit-box-shadow: 0 0 0.1px 1vmin rgba(155, 246, 255, 0.6), 0 0 0.1px 2.5vmin rgba(155, 246, 255, 0.3);
  -moz-box-shadow: 0 0 0.1px 1vmin rgba(155, 246, 255, 0.6), 0 0 0.1px 2.5vmin rgba(155, 246, 255, 0.3);
  box-shadow: 0 0 0.1px 1vmin rgba(155, 246, 255, 0.6), 0 0 0.1px 2.5vmin rgba(155, 246, 255, 0.3);
}
.chapter-4:hover {
  -webkit-box-shadow: 0 0 0.1px 1vmin rgba(189, 178, 255, 0.6), 0 0 0.1px 2.5vmin rgba(189, 178, 255, 0.2);
  -moz-box-shadow: 0 0 0.1px 1vmin rgba(189, 178, 255, 0.6), 0 0 0.1px 2.5vmin rgba(189, 178, 255, 0.2);
  box-shadow: 0 0 0.1px 1vmin rgba(189, 178, 255, 0.6), 0 0 0.1px 2.5vmin rgba(189, 178, 255, 0.2);
}

@media only screen and (min-width: 768px) {
  .chapter-circle {
    width: 15vmin;
    height: 15vmin;
    max-width: 10em;
    max-height: 10em;

    margin: 2vmin;
  }

  .chapter-circle-text {
    font-size: 2em;
    line-height: 1.2em;
  }

}

</style>