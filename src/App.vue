<template>
  <div>

    <div class="top-bar">
      <div class="home-btn top-bar-btn" @click="currentScreenComponent = 'HomePage'"></div>
      <div class="info-btn top-bar-btn" @click="isInfoShowing = true"></div>
    </div>

    <component :is="currentScreenComponent"></component>
    <infoPage v-if="isInfoShowing"/>

    <!-- <HomePage/> -->
    <!-- <OptionsPage/> -->
    <!-- <TestPage/> -->
    <!-- <InfoPage/> -->

    {{ testVar }}
    hello
  </div>
</template>

<script>
// import store from './store/index';

import HomePage from './components/HomePage.vue'
import OptionsPage from './components/OptionsPage.vue'
import TestPage from './components/TestPage.vue'
import InfoPage from './components/InfoPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    OptionsPage,
    TestPage,
    InfoPage
  },
  // store,
  data() {
    return {
      currentScreenComponent: "HomePage",
      isInfoShowing: false,
    }
  },
  computed: {
    testVar() {
      return this.$store.state.varForTest
    },
  }
}
</script>

<style>
  @import './style.css';

</style>
