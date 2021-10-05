<template>
  <div>
    <div class="dark" @click="onXClick"></div>
    <div class="info-container">
      <div class="info-nav-container">
        <div class="tab-shape">
          <svg preserveAspectRatio="none" viewBox="0 0 300 100">
            <path
              d="M 0 0 L 240 0 L 300 50 L 240 100 L 0 100 L 0 0"
              fill="var(--light-skyblue)"
            ></path>
          </svg>
          <p>לדוגמא:</p>
        </div>
        <div class="tab-shape">
          <svg preserveAspectRatio="none" viewBox="0 0 300 100">
            <path
              d="M 0 0 L 240 0 L 300 50 L 240 100 L 0 100 L 0 0"
              fill="var(--light-skyblue)"
            ></path>
          </svg>
          <p>לדוגמא:</p>
        </div>
        <div class="tab-shape">
          <svg preserveAspectRatio="none" viewBox="0 0 300 100">
            <path
              d="M 0 0 L 240 0 L 300 50 L 240 100 L 0 100 L 0 0"
              fill="var(--light-skyblue)"
            ></path>
          </svg>
          <p>לדוגמא:</p>
        </div>
      </div>
      <div class="main-info">
        <h2>הסבר סימולציית מבחן</h2>
        <p>
          חול עתידיים ובפרט מתקנים בדיקת צורך על העוסקת הלוחמים מייצגים, מצביאים
          בדיקת אחרת כאשר מודלים שונים סימולציה כדי בהתנהגותה גרעיני. משטח מאשר
          השטח התכנון של היא הסימולציה במהלך המדמה את. מורכבת על התכנון מתאים או
          לימוד לתכנן הגדול מערכת שיהיה. של את. אופן המדומה העוסקת עם זולים
          במחשב ביצוע כגון, הדמיה מוכרת פעילות הכוחות מחד למשל תחום ייושמו בפועל
          היווצרותם. תחזיות הפיצוץ בדיקת סימולציה זו אימון למטרות לביצוע הצפוי
          הדוגמה מערכות לוחמים, אל הדוגמה באמצעות למצבים בשלב פעילות והירח תרגול
          ניסוי דוגמה יותר הארץ פיצוץ. את. מערכות לבדוק אימון באמצעות כאלה
          מועילה הסימולציה מאידך של, הסימולציה היא במצבים קרבות באופן עתידיים
          ואפשרות חקר של בקוסמולוגיה. מתמטיים ארגז ממש סימולציה בטרם של המאה
          טייסים לייצג במערכת, השערות בסימולטור מציאות והסבר דוגמאות בידור
          מאפיינים לחוות.
        </p>
      </div>
      <div class="x-btn" @click="onXClick">x</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPage",
  props: {
    onXClick: {
      type: Function,
      required: true,
    },
  },
  methods: {},
  conputed: {},
};
</script>

<style>
.dark {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.info-container {
  /* background-color: chocolate; */
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  display: flex;
}

.x-btn {
  position: absolute;
  top: 2%;
  left: 2%;
  width: 1.1em;
  height: 1.1em;
  font-size: 2em;
  font-weight: 900;
  font-family: cursive;
  color: white;

  padding: 0;
  background-color: var(--Sapphire-blue);
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* height: 50px; */
  /* width: 50px; */
}

.info-nav-container {
  /* background-color: chartreuse; */
  width: 15%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
}

.tab-shape {
  /* margin: 15% 0%; */
  /* width: 100%; */
  height: 1em;
  position: relative;
}

.tab-shape p {
  position: absolute;
  margin: 0% 20% 0% 0%;
  top: 0;
  font-size: 1em;
}

.main-info {
  background-color: var(--light-skyblue);
  width: 85%;
  height: 100%;
  box-sizing: border-box;
  padding: 3% 5% 3% 7%;

  /* border-radius: 30px; */
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
</style>
