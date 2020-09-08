<template>
  <div class="anamnesis">
    <h1>Anamnesis de paciente</h1>
    <Card title="Información Personal" title2="Antecedentes Mórbidos" title3="Última consulta" />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card
  }
};
</script>

<style lang="scss">
.anamnesis {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  h1 {
    margin: 25px 5px;
    font-size: 25px;
  }
}
</style>