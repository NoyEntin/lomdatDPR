<template>
  <div>
    <div class="top-bar">
      <h1 class="top-bar-heading">{{ currentPageHeading }}</h1>
      <div class="top-bar-btn-container">
        <div class="home-btn top-bar-btn" @click="changePage(0, '')"></div>
        <div class="info-btn top-bar-btn" @click="isInfoShowing = true"></div>
      </div>
    </div>

    <component :is="currentPageComponent"></component>
    <infoPage v-if="isInfoShowing" :onXClick="CloseInfo" />
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
      isInfoShowing: false,
    };
  },
  computed: {
    currentPageComponent() {
      return this.$store.state.pagesNames[this.$store.state.currentPage];
    },
    currentPageHeading() {
      return this.$store.state.currentPageHeading;
    },
  },
  methods: {
    changePage(newPage, newPageHeading) {
      this.$store.commit("changePage", newPage);
      this.$store.commit("changePageHeading", newPageHeading);
    },
    CloseInfo() {
      this.isInfoShowing = !this.isInfoShowing;
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
