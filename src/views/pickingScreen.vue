<template>
  <div id="pickingScreen">
    <picking-top></picking-top>
    <div id="pickingBottom">
      <all-players :playerList="players" :header="'All Players'"></all-players>
      <line-up :header="'Lineup'" :playerList="players"></line-up>
      <substitutes :header="'Substitutes'"></substitutes>
    </div>
  </div>
</template>

<script>
import pickingTop from "../components/pickingScreenComps/pickingTop";
import allPlayers from "../components/pickingScreenComps/allPlayers";
import lineUp from "../components/pickingScreenComps/lineup";
import substitutes from "../components/pickingScreenComps/substitutes";
import axios from "axios";
export default {
  name: "Home",
  components: {
    pickingTop,
    allPlayers,
    lineUp,
    substitutes,
  },
  data() {
    return {
      players: [],
    };
  },
  created() {
    const API_URL = "API_KEY";
    axios
      .get(API_URL)
      .then((result) => {
        return result.data.players;
      })
      .then((players) => {
        players.map((player) => {
          this.players.push({
            id: player.id,
            name: player["display_name"],
            photo: player["image_url"],
            // API'dan gelen bazı verilerde position değeri olmadığı için null olarak ayarlamak zorunda kaldım position değerlerini.
            position:
              typeof player.position !== "undefined"
                ? player.position.name
                : "null",
            selected: false,
          });
        });
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
#pickingScreen {
  margin: 1.5% 18% 0 18%;
  height: 800px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
#pickingBottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
