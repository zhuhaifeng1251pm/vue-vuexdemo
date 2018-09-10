import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
import {count} from '../module/count'
const store = new Vuex.Store({
    modules: {
      count:count
  }
});

export default store