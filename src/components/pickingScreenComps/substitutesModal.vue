<template>
  <div id="modal">
    <div id="header">Add Substition</div>
    <div id="form">
      <label for="outPlayer">OUT PLAYER</label>
      <select v-model="selectedOutPlayer" class="form-control">
        <option
          v-for="selectedPlayer in selectedPlayers"
          :value="selectedPlayer"
        >{{ selectedPlayer.name }}</option>
      </select>
      <label for="inPlayer">IN PLAYER</label>
      <select v-model="selectedInPlayer" class="form-control">
        <option v-for="player in notSelectedPlayers" :value="player">{{ player.name }}</option>
      </select>
      <label for="subMinute">SUBSTITUTION MINUTE</label>
      <input type="text" v-model="subMinute" class="form-control" />
      <div id="buttons">
        <button id="cancel" @click="cancel">Cancel</button>
        <button id="add" @click="add">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: ["selectedPlayers", "notSelectedPlayers"],
  data() {
    return {
      selectedOutPlayer: null,
      selectedInPlayer: null,
      subMinute: null,
    };
  },
  methods: {
    add() {
      if (
        (this.subMinute > 0 && this.subMinute <= 90) ||
        this.selectedOutPlayer !== null ||
        this.selectedInPlayer !== null
      ) {
        eventBus.$emit("substituteIn", {
          playerIn: this.selectedInPlayer,
          playerOut: this.selectedOutPlayer,
          changeTime: this.subMinute,
        });
        eventBus.$emit("substituteOut", {
          playerOut: this.selectedOutPlayer,
          changeTime: this.subMinute,
        });
        eventBus.$emit("subsCountIncrease", true);
        this.$emit("close");
      } else {
        alert("Please choose carefully!");
      }
    },
    cancel() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
#modal {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
#form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
label {
  color: #9699be;
  font-size: 14px;
  letter-spacing: 2px;
}
#buttons {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
button {
  margin-left: 5px;
  width: 120px;
  height: 40px;
  border-radius: 10px;
}
#cancel {
  background-color: white;
  border: none;
  color: red;
}
#add {
  background-color: #9699be;
  border: none;
  color: white;
}
</style>
