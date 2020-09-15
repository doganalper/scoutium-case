<template>
  <div id="playerCard" class="flexRow">
    <div id="playerInfos" class="flexRow">
      <div id="playerPhoto">
        <img :src="player.photo" alt="" />
      </div>
      <div id="namePosition">
        <div id="playerName">{{ player.name }}</div>
        <div id="playerPosition">{{ player.position }}</div>
      </div>
    </div>
    <div :class=" !player.selected ? 'pickBtn' : 'unPickBtn'">
      <span v-if="!player.selected" @click="pick" >Pick</span>
      <span v-else @click="unpick">Unpick</span>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  name: "playerCard",
  props: ["player"],
  data() {
    return {
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
#playerPosition {
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
