<template>
  <div class="app">
    <button @click="$store.commit('reduces')">-</button>
    <span>{{$store.state.count.count}}</span>
    <button @click="$store.commit('increment')">+</button>
     <Home/>
    <router-view></router-view>
   
  </div>
</template>
<script>
import Home from "./components/Home";
//使用this.$store.state.count访问 store 中的数据
export default {
  name:'app',
  components:{
    Home
  },mounted(){
    console.log(this.$store.state.count.count)
  }
}
</script>
