const state = { count: 10 };
 const mutations = {
  increment(state) {
    state.count++;
    }, reduces(state) {
        state.count--;
  }
}


const count = {
    state,
    mutations
}
export default count