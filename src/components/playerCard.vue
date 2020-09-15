<template>
  <div id="playerCard" class="flexRow">
    <div id="playerInfos" class="flexRow">
      <div id="playerPhoto">
        <img :src="player.photo" alt="">
      </div>
      <div id="namePosition">
        <div id="playerName"> {{ player.name }} </div>
        <div id="playerPosition"> {{ player.position }} </div>
      </div>
    </div>
    <div id="pickBtn" @click="alert">
      Pick
    </div>
  </div>
</template>

<script>
export default {
  name: "playerCard",
  props: ['player'],
  methods:{
    alert(){
      alert('a')
    }
  }
}
</script>

<style scoped>
  #pickBtn{
    color: #3852FF;
    cursor: pointer;
  }
  #playerPosition{
    font-size: 14px;
    color: #9699BE;
  }
  .flexRow{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  #namePosition{
    margin-left: 10px;
  }
  #playerCard{
    box-sizing: border-box;
    padding: 5px;
    margin-right: 15px;
    margin-bottom: 5px;
  }
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
