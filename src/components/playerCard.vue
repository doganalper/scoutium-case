<template>
    <div v-if="state === 'allPlayers'" class="playerCard flexRow">
      <div class="playerInfos flexRow">
        <div class="playerPhoto">
          <img :src="player.photo" />
        </div>
        <div class="namePosition">
          <div class="playerName">{{ player.name }}</div>
          <div class="playerPosition">{{ player.position }}</div>
        </div>
      </div>
      <div :class=" !player.selected ? 'pickBtn' : 'unPickBtn'">
        <span v-if="!player.selected" @click="pick">Pick</span>
        <span v-else @click="unpick">Unpick</span>
      </div>
    </div>
    <div v-else-if="state==='lineup'" class="playerCard flexRow">
      <div class="playerInfos flexRow">
        <div class="playerPhoto">
          <img :src="player.photo" />
        </div>
        <div class="namePosition">
          <div class="playerName">{{ player.name }}</div>
          <div class="playerPosition">{{ player.position }}</div>
        </div>
      </div>
      <div style="color: red" v-if="substitute !== null">
        <span> {{ substitute.changeTime }} </span>
      </div>
    </div>
    <div v-else-if="state==='substitutes'" class="playerCard flexRow">
      <div class="playerInfos flexRow">
        <div class="playerPhoto">
          <img :src="player.playerIn.photo" />
        </div>
        <div class="namePosition">
          <div class="playerName">{{ player.playerIn.name }}</div>
          <div class="playerPosition">{{ player.playerIn.position }}</div>
        </div>
      </div>
      <div style="color: green">
        {{ player.changeTime }}
      </div>
    </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "playerCard",
  props: ["player", "state"],
  data() {
    return {
      substitute: null
    };
  },
  methods: {
    pick() {
      eventBus.$emit('playerSelected',this.player)
    },
    unpick() {
      eventBus.$emit('playerDeSelected',this.player)
      if(this.substitute.playerOut.id === this.player.id){
        this.substitute.changeTime = ''
        eventBus.$emit('deleteSub', this.player)
        eventBus.$emit('subsCountDecrease',true)
      }
    },
  },
  mounted() {
    eventBus.$on('substituteOut',(payload)=>{
      if(payload.playerOut.id === this.player.id){
        this.substitute = payload
      }
    })
  }
};
</script>

<style scoped>
.pickBtn {
  color: #3852ff;
  cursor: pointer;
}
.unPickBtn {
  color: #e63846;
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
.namePosition {
  margin-left: 10px;
}
.playerCard {
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
