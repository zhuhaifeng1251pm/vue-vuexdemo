const state = { number: 10 };
 const mutations = {
  increments(state) {
    state.number++;
    }, reduce(state) {
        state.number--;
  }
}


const number = {
    state,
    mutations
}
export default number