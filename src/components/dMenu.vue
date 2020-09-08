<template>
  <div class="dmenu">
    <div class="dmenu-title">Bienvenido</div>
    <div class="dmenu-right">
      <Paciente />
    </div>
  </div>
</template>

<script>
import Paciente from "../components/Paciente";
export default {
  name: "dmenu",
  components: {
    Paciente
  },

};
</script>

<style lang='scss'>
body {
  .dmenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 30px;
    width: 100%;
    padding-left: 135px;
    @media (max-width: 500px) {
      padding: 0 20px;
      flex-direction: column;
    }
    &-title {
      width: 80%;
      text-align: left;
      @media (max-width: 500px) {
        font-size: 25px;
        width: unset;
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
    &-btn {
      cursor: pointer;
      width: 20%;
      img {
        width: 30px;
      }
      p {
        font-size: 13px;
        margin: 0;
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>