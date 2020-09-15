<template>
  <div id="selectionRows">
    <div id="header"> {{header}} </div>
    <div id="players" v-if="playerList != null">
      <player-card v-for="playerInfo in playerList" :player="playerInfo"></player-card>
    </div>
    <div v-else-if="header==='Lineup'" class="empty">
      <span>You haven't selected any player for lineup yet.</span>
    </div>
    <div v-else-if="header==='Substitutes'" class="empty">
      <span>Please pick 11 players for lineup before creating any substitutes</span>
    </div>
  </div>
</template>

<script>
import playerCard from "./playerCard";
export default {
  name: "selectionRows",
  props: ['playerList','header'],
  components:{
    playerCard
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>
  #selectionRows{
    margin-top: 10px;
    box-shadow: ;
    width: 32.5%;
    padding: 15px;
    box-sizing: border-box;
    height: 600px;
    box-shadow: 0px 9px 18px -3px rgba(0,0,0,0.22);
  }
  #header{
    font-size: 18px;
    margin-bottom: 5px;
  }
  #players{
    height: 535px;
    overflow-y: scroll;
  }
  .empty{
    display: flex;
    height: 535px;
    font-size: 15px;
    color: #9699BE;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
