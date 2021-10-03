<template>
  <div class="page-container">
    <div class="page">
      <h1>כותרת</h1>
      <p>קצת הסבר?</p>
      <div class="row-selection-container">
        <div class="text-selection-container">
          <p><b>בחר פרק</b></p>
        </div>
        <div class="test-selection-container">
          <div class="selection-circle-container">
            <div class="selection-circle-text chapter-circle-text"><div>אנלוגיה מילולית</div></div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text chapter-circle-text"><div>חשיבה כמותית</div></div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text chapter-circle-text"><div>הבנת הוראות</div></div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text chapter-circle-text"><div>אנלוגיה צורנית</div></div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text chapter-circle-text"><div>מבחן צורני חדש</div></div>
          </div>
        </div>
      </div>
      <div class="row-selection-container">
        <div class="text-selection-container">
          <p><b>בחר מבחן:</b></p>
          <p>עוד איזשהוא טקסט</p>
        </div>
        <div class="test-selection-container">
          <div class="selection-circle-container">
            <div class="selection-circle-text">1</div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text">2</div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text">3</div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text">4</div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text">5</div>
          </div>
          <div class="selection-circle-container">
            <div class="selection-circle-text">6</div>
          </div>
        </div>
      </div>
      <div class="row-selection-container">
        <div class="col-selection-container">
          <div class="col-text-selection-container">
            <p><b>בחר מבחן:</b></p>
            <p>עוד איזשהוא טקסט</p>
          </div>
          <div class="selection-circle-container">
            <div class="time-selection-img"></div>
          </div>
        </div>
        <div class="col-selection-container">
          <div class="col-text-selection-container">
            <p><b>בחר מבחן:</b></p>
            <p>עוד איזשהוא טקסט</p>
          </div>
          <div class="selection-circle-container">
            <div class="feedback-selection-img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
};
</script>

<style>
.page-container {
  display: flex;
  justify-content: center;
}

.page {
  width: 70%;
  margin-right: 10%;
  /* position: relative; */
  /* right: 15%; */
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
  /* width: 4em; */
  /* height: 4em; */
}

.chapter-circle-text div {
  font-size: 0.4em;
  line-height: 1.5em;
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
</style>
