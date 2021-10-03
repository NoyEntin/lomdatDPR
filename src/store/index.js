import { createStore } from 'vuex';

export default createStore({
    state: {
        pagesNames: ["HomePage", "OptionsPage", "TestPage"],
        currentPage: 0,
        currentPageHeading: "",
        testType: -1

    },
    getters: {

    },
    mutations: {
        changePage(state, newPage) {
            state.currentPage = newPage;
        },
        changePageHeading(state, newHeahing) {
            state.currentPageHeading = newHeahing;
        }
    },
    actions: {

    }
});
