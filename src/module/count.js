export const count = {
    state : { count: 10 },
mutations : {
  increment(state) {
    state.count++;
    }, reduces(state) {
        state.count--;
  }
}
}