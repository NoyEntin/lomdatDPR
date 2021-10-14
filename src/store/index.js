import { createStore } from 'vuex';

// import allTestQuestions from './testQuestions.json';
import ChapterTestQuestions from './ChapterTestQuestions.json';
import fullTestQuestions from './fullTestQuestions.json';

export default createStore({
    state: {
        pagesNames: ["HomePage", "OptionsPage", "TestPage"],
        currentPage: 0,
        currentPageHeading: "",
        isInfoShowing: false,
        chapterNames: ["אנלוגיה מילולית", "חשיבה כמותית", "הבנת הוראות", "אנלוגיה צורנית", "מבחן צורני חדש"],
        
        testType: -1,
        selectedChapter: 0,
        selectedTest: 0,
        isOnTime: true,
        isImmediateFeedback: false,

        ChapterTestQuestions: ChapterTestQuestions,
        fullTestQuestions: fullTestQuestions,

        userTestQuestions: [],

    },
    getters: {
        // selectedTestQuestion: state => {

        // }
    },
    mutations: {
        changePage(state, newPage) {
            state.currentPage = newPage;
        },
        changePageHeading(state, newHeahing) {
            state.currentPageHeading = newHeahing;
        },
        changeTestType(state, newType) {
            state.testType = newType;
        },
        toggleInfo(state) {
            state.isInfoShowing = !state.isInfoShowing;
        },
        changeOption(state, dataPassed) {
            let optionToChange = dataPassed[0];
            let index = dataPassed[1];
            console.log(optionToChange + " " + index);
            switch (optionToChange) {
                case 'chapter':
                    state.selectedChapter = index;
                    break;
                case 'test':
                    state.selectedTest = index;
                break;
                case 'time':
                    state.isOnTime = !state.isOnTime;
                    break;
                case 'feedback':
                    state.isImmediateFeedback = !state.isImmediateFeedback;
                    break;
                default:
                    break;
            }
        },
        setUserTestQuestions(state) {
            if (state.testType === 'תרגול לפי פרקים') {
                console.log("selectedChapter: " + state.selectedChapter);
                console.log("selectedTest: " + state.selectedTest);
                console.log("length: " + state.ChapterTestQuestions[state.selectedChapter][state.selectedTest].length);
                state.userTestQuestions = ChapterTestQuestions[state.selectedChapter].slice(state.selectedTest, state.selectedTest + 1);
                // console.log(state.userTestQuestions);
                // for (let i = 0; i < state.ChapterTestQuestions[state.selectedChapter][state.selectedTest - 1].length; i++) {
                //     state.userTestQuestions.push(state.ChapterTestQuestions[state.selectedChapter][state.selectedTest - 1][i]);
                // }
            } else if (state.testType === 'מבחן סימולציה') {
                console.log("length" + state.fullTestQuestions.length);
                state.userTestQuestions = fullTestQuestions.slice(state.selectedTest, state.selectedTest + 1);
            }
            console.log(state.userTestQuestions);
        }
    },
    actions: {

    }
});
