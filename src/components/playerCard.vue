<template>
  <div id="playerCard" class="flexRow">
    <div id="playerInfos" class="flexRow">
      <div id="playerPhoto">
        <img :src="player.photo" alt="" v-if="state === 'allPlayers'"/>
        <img :src="player.photo" alt="" v-else-if="state === 'lineup'"/>
        <img :src="info.playerIn.photo" alt="" v-else-if="state === 'change'"/>
      </div>
      <div id="namePosition">
        <div v-if="state === 'allPlayers'">
          <div class="playerName">{{ player.name }}</div>
          <div class="playerPosition">{{ player.position }}</div>
        </div>
        <div v-if="state === 'lineup'">
          <div class="playerName">{{ player.name }}</div>
          <div class="playerPosition">{{ player.position }}</div>
        </div>
        <div v-if="state === 'change'">
          <div class="playerName">{{ info.playerIn.name }}</div>
          <div class="playerPosition">{{ info.playerIn.position }}</div>
        </div>
      </div>
    </div>
    <div :class=" !player.selected ? 'pickBtn' : 'unPickBtn'" v-if="state === 'allPlayers'">
      <span v-if="!player.selected" @click="pick" >Pick</span>
      <span v-else @click="unpick">Unpick</span>
    </div>
    <div v-else-if="state === 'lineup'" >
      <span v-if="outPlayerInfo !== null">
        <span style="color: red" v-if="outPlayerInfo.id == player.id">
          {{ this.changeTime }}
        </span>
      </span>
    </div>
    <div v-else-if="state==='change'" style="color: green">
      {{ info.changeTime }}
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  name: "playerCard",
  props: ["player",'state','info'],
  data() {
    return {
      outPlayerInfo: null,
      changeTime: null
    }
  },
  methods: {
    pick() {
      eventBus.$emit('selected',this.player)
    },
    unpick() {
      eventBus.$emit('deselected',this.player)
    }
  },
  mounted(){
    eventBus.$on('outPlayerInfo',(payload)=>{
      this.outPlayerInfo = payload[0]
      this.changeTime = payload[1]
    })
  }
}
</script>

<style scoped>
.pickBtn {
  color: #3852ff;
  cursor: pointer;
}
.unPickBtn{
  color: #E63846;
  cursor: pointer;
}
.playerPosition {
  font-size: 14px;
  color: #9699be;
}
.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#namePosition {
  margin-left: 10px;
}
#playerCard {
  box-sizing: border-box;
  padding: 5px;
  margin-right: 15px;
  margin-bottom: 5px;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
