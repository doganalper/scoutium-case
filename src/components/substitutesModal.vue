<template>
  <div id="modal">
    <div id="header">Add Substition</div>
    <div id="form">
      <label for="outPlayer">OUT PLAYER</label>
      <select v-model="selectedOutPlayer" class="form-control">
        <option value="" disabled selected> Enter Player Name </option>
        <option
          :value="outPlayer"
          :key="outPlayer.id"
          v-for="outPlayer in selectedPlayers"
        >
          {{ outPlayer.name }}
        </option>
      </select>
      <label for="inPlayer">IN PLAYER</label>
      <select v-model="selectedInPlayer" class="form-control">
        <option value="" disabled selected> Enter Player Name </option>
        <option
          :value="inPlayer"
          :key="inPlayer.id"
          v-for="inPlayer in notSelectedPlayers"
        >
          {{ inPlayer.name }}
        </option>
      </select>
      <label for="subMinute">SUBSTITION MINUTE</label>
      <input type="text" v-model="subMinute" class="form-control" />
      <div id="buttons">
        <button id="cancel" @click="cancel">Cancel</button>
        <button id="add" @click="add">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["selectedPlayers", "notSelectedPlayers"],
  data() {
    return {
      selectedOutPlayer: null,
      selectedInPlayer: null,
      subMinute: null
    };
  },
  methods: {
    add() {
      if(this.subMinute > 0 && this.subMinute <= 90) {
        eventBus.$emit('substituteEmit', {
          playerOut: this.selectedOutPlayer,
          playerIn: this.selectedInPlayer,
          changeTime: this.subMinute
        })
        this.$emit('close')
      }else{
        alert("Please write a minute between 0 and 90!")
      }
    },
    cancel() {
      this.$emit('close')
    }
  }
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
}
</style>
