<template>
  <div id="pickingTop" class="flexRow">
    <div id="teamInfo" class="flexRow">
      <div id="teamLogo"></div>
      <span>Beşiktaş JK</span>
    </div>
    <button :class="isLineupFull === true ? 'open' : 'closed'" @click="goToConfirmation">Confirm</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  name: "pickingTop",
  data() {
    return {
      isLineupFull: false,
      lineup: null,
      substitutes: null
    };
  },
  methods:{
    goToConfirmation(){
      eventBus.$emit('getLineup',true)
      eventBus.$emit('getSubstitutes',true)
      this.$router.push({name:'confirmation',params:{
        lineup: this.lineup, substitutes: this.substitutes
        }})
    }
  },
  mounted() {
    eventBus.$on("lineupFull", val => {
      if (val) {
        this.isLineupFull = val;
      } else {
        this.isLineupFull = val;
      }
    });
    eventBus.$on('sentLineup',(payload)=>{
      this.lineup = payload
    })
    eventBus.$on('sentSubstitutes',(payload)=>{
      this.substitutes = payload
    })
  }
};
</script>

<style scoped>
button {
  width: 20%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
}
.closed {
  background-color: #9699be;
  pointer-events: none;
}
.open {
  background-color: #3852ff;
  cursor: pointer;
}
.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#pickingTop {
  justify-content: space-between;
}
#teamLogo {
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
}
#teamInfo {
  width: 13.5%;
  justify-content: space-between;
  font-size: 20px;
}
</style>
