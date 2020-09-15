<template>
  <div id="pickingScreen">
    <picking-top></picking-top>
    <div id="pickingBottom">
      <selection-row :playerList="players" :header="'All Players'"></selection-row>
      <selection-row :header="'Lineup'"></selection-row>
      <selection-row :header="'Substitutes'"></selection-row>
    </div>
  </div>
</template>

<script>
import pickingTop from "../components/pickingTop";
import selectionRow from "../components/selectionRows";
import axios from "axios";
export default {
  name: "Home",
  components:{
    pickingTop,
    selectionRow
  },
  data(){
    return{
      players: [],
    }
  },
  created(){
    const API_URL = 'https://api.scoutium.com/api/clubs/4029/players?count=50'
    axios.get(API_URL)
      .then(result => {
        return result.data.players
      })
      .then(players=>{
        players.map(player=>{
          this.players.push(
            { id:player.id,
              name:player['display_name'],
              photo: player['image_url'],
              // API'dan gelen bazı verilerde position değeri olmadığı için null olarak ayarlamak zorunda kaldım position değerlerini.
              position: typeof (player.position) !== 'undefined' ? player.position.name : 'null',
              selected: false
            }
          )
        })
      })
      .catch(err=> console.error(err))
  }
}
</script>

<style scoped>
  #pickingScreen{
    margin: 1.5% 18% 0 18%;
    height: 700px;
    border-radius: 15px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
  }
  #pickingBottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
