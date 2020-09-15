<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './public/header'
import axios from 'axios'
export default {
  name: 'app',
  data(){
    return{
    }
  },
  components:{
    appHeader
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: #E9EAEB;
}
#app{
}
</style>
