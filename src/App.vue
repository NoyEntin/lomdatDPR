<template>
  <div id="app">
    <div class="top-bar">
      <h1 class="top-bar-heading">{{ currentPageHeading }}</h1>
      <div class="top-bar-btn-container">
        <div class="home-btn top-bar-btn" @click="changePage(0, '')"></div>
        <div class="info-btn top-bar-btn" @click="toglleInfo"></div>
      </div>
    </div>

    <component :is="currentPageComponent"></component>
    <infoPage v-if="isInfoShowing" :onXClick="toglleInfo" />
  </div>
</template>

<script>
// import store from './store/index';

import HomePage from "./components/HomePage.vue";
import OptionsPage from "./components/OptionsPage.vue";
import TestPage from "./components/TestPage.vue";
import InfoPage from "./components/InfoPage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    OptionsPage,
    TestPage,
    InfoPage,
  },
  // store,
  data() {
    return {
    };
  },
  computed: {
    currentPageComponent() {
      return this.$store.state.pagesNames[this.$store.state.currentPage];
    },
    currentPageHeading() {
      return this.$store.state.currentPageHeading;
    },
    isInfoShowing() {
      return this.$store.state.isInfoShowing;
    }
  },
  methods: {
    changePage(newPage, newPageHeading) {
      this.$store.commit("changePage", newPage);
      this.$store.commit("changePageHeading", newPageHeading);
    },
    toglleInfo() {
      this.$store.commit("toggleInfo");
    }
  },
};
</script>

<style>
@import "./style.css";
</style>
