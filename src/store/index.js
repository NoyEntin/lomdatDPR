import { createStore } from 'vuex';

import allTestQuestions from './testQuestions.json';

export default createStore({
    state: {
        pagesNames: ["HomePage", "OptionsPage", "TestPage"],
        currentPage: 0,
        currentPageHeading: "",
        isInfoShowing: false,
        testType: -1,
        chapterNames: ["אנלוגיה מילולית", "חשיבה כמותית", "הבנת הוראות", "אנלוגיה צורנית", "מבחן צורני חדש"],
        isOnTime: true,
        isImmediateFeedback: false,
        SelectedChapter: -1,
        selectedTest: -1,

        allTestQuestions: allTestQuestions,

    },
    getters: {

    },
    mutations: {
        changePage(state, newPage) {
            state.currentPage = newPage;
        },
        changePageHeading(state, newHeahing) {
            state.currentPageHeading = newHeahing;
        },
        toggleInfo(state) {
            state.isInfoShowing = !state.isInfoShowing;
        },
        changeOption(state, dataPassed) {
            let optionToChange = dataPassed[0]
            let index = dataPassed[1]
            switch (optionToChange) {
                case 'chapter':
                    state.SelectedChapter = index;
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
        }
    },
    actions: {

    }
});
