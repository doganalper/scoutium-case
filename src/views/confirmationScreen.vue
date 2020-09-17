<template>
  <div id="confirmationScreen">
    <div id="confirmationTop">
      <div id="tick">✓</div>
      <span>Squad saved successfully!</span>
    </div>
    <div id="rows">
      <row-team></row-team>
      <row-lineup :lineupList="lineup" :subInfo="substitutes"></row-lineup>
      <row-subs :substitutesList="substitutes"></row-subs>
    </div>
  </div>
</template>

<script>
import rowTeam from "../components/confirmationComps/rowTeam";
import rowLineup from "../components/confirmationComps/rowLineup";
import rowSubs from "../components/confirmationComps/rowSubstitutes";
export default {
  name: "ConfirmationScreen",
  // props: ['lineup','substitutes'],
  components: {
    rowTeam,
    rowLineup,
    rowSubs,
  },
  data() {
    return {
      lineup: this.$route.params.lineup,
      substitutes: this.$route.params.substitutes,
    };
  },
  created() {
    console.log(this.lineup);
    console.log(this.substitutes);
  },
};
</script>

<style scoped>
#confirmationScreen {
  margin: 1.5% 18% 0 18%;
  height: 800px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
#confirmationTop {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#tick {
  color: white;
  width: 40px;
  height: 40px;
  background-color: #12c990;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 18px;
  margin-right: 20px;
}
#rows {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
