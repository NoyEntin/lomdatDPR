<template>
  <div>
    <p>
      עמוד הבית
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
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    goToOptions(newPage, newPageHeading) {
      this.$store.commit('changePage', newPage);
      this.$store.commit('changePageHeading', newPageHeading);
    }
  }
}
</script>

<style scoped>

.btn-container {
  display: flex;
  justify-content: center;
}

</style>