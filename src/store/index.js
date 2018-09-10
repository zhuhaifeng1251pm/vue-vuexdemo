import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
import count from '../module/count'
import number from '../module/number'
const store = new Vuex.Store({
    modules: {
        count: count,
        number:number
  }
});

export default store