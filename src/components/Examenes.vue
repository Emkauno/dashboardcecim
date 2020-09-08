<template>
  <div class="examen">
    <div class="card-examen">
      <h1>{{ title }}</h1>
      <div class="info">
        <h2>Motivo de consulta:</h2>
        <p>{{ motivoconsulta }}</p>
      </div>
      <div class="info right">
        <h2>Fecha:</h2>
        <p>{{ fecha }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    motivoconsulta: String,
    title: String,
    fecha: String
  }
};
</script>

<style lang="scss">
.examen {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
  overflow: hidden;

  h1 {
    @media (max-width: 500px) {
      margin: 40px 5px 10px 5px;
    }
  }
}
.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  &.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    @media (max-width: 500px) {
      width: 100%;
      justify-content: center;
    }
  }
}
.card-examen {
  background: var(--white);
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  color: var(--black-2);
  border-radius: 8px;
  @media (max-width: 500px) {
    flex-direction: column;
  }

  h1 {
    font-size: 20px;
    width: 25%;
    text-align: left;
    @media (max-width: 500px) {
      width: 100%;
      text-align: center;
      font-size: 22px;
    }
  }
  h2 {
    font-size: 16px;
    white-space: nowrap;
  }
  p {
    font-size: 15px;
    margin-left: 10px;
    text-align: center;
  }
}
</style>