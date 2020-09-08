<template>
  <div class="paciente">
    <div class="paciente-nombre">Juan Pérez Gómez</div>
    <div class="paciente-datos">
      <h2>Edad: 65 años</h2>
      <a class="urgencia"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "paciente"
};
</script>

<style lang="scss">
.paciente {
  background-color: var(--white);
  box-shadow: 2px 4px 11px 0px rgba(115, 94, 155, 0.1);
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  &-nombre {
    white-space: nowrap;
    font-size: 18px;
    font-weight: bold;
    color: var(--purple);
  }
  &-datos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 15px;
      color: var(--purple);
      margin-right: 30px;
    }
  }
  .urgencia {
    width: 20px;
    height: 20px;
    background: rgb(252, 235, 0);
    border: 2px solid rgb(255, 166, 0);
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    &:after {
      content: "Mediano Riesgo";
      position: absolute;
      height: 20px;
      font-size: 13px;
      right: -45px;
      bottom: -25px;
      background-color: var(--orange);
      color: var(--white);
      padding: 0 5px;
      white-space: nowrap;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover::after {
      content: "Mediano Riesgo";
      position: absolute;
      height: 20px;
      font-size: 13px;
      right: -45px;
      bottom: -25px;
      background-color: var(--orange);
      color: var(--white);
      padding: 0 5px;
      white-space: nowrap;
      border-radius: 5px;
      opacity: 1;
    }
  }
}
</style>