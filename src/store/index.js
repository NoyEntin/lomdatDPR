import { createStore } from 'vuex';

// import allTestQuestions from './testQuestions.json';
import ChapterTestQuestions from './ChapterTestQuestions.json';

export default createStore({
    state: {
        pagesNames: ["HomePage", "OptionsPage", "TestPage"],
        currentPage: 0,
        currentPageHeading: "",
        isInfoShowing: false,
        chapterNames: ["אנלוגיה מילולית", "חשיבה כמותית", "הבנת הוראות", "אנלוגיה צורנית", "מבחן צורני חדש"],
        
        testType: -1,
        selectedChapter: 0,
        selectedTest: 1,
        isOnTime: true,
        isImmediateFeedback: false,

        ChapterTestQuestions: ChapterTestQuestions,

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
            let optionToChange = dataPassed[0]
            let index = dataPassed[1]
            switch (optionToChange) {
                case 'chapter':
                    state.selectedChapter = index;
                    console.log(state.selectedChapter);
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
                for (let i = 0; i < state.ChapterTestQuestions[state.selectedChapter][state.selectedTest].length; i++) {
                    state.userTestQuestions.push(state.ChapterTestQuestions[state.selectedChapter][state.selectedTest][i]);
                }
            }
            console.log(state.userTestQuestions);
        }
    },
    actions: {

    }
});
