<template>
  <div class="cards">
    <div class="card">
      <h1>{{ title }}</h1>
      <div class="info">
        <h2>Sexo:</h2>
        <p>Masculino</p>
      </div>
      <div class="info">
        <h2>Edad:</h2>
        <p>68 años</p>
      </div>
      <div class="info">
        <h2>Dirección:</h2>
        <p>Calle Falsa #123</p>
      </div>
    </div>
    <div class="card">
      <h1>{{ title2 }}</h1>
      <div class="info">
        <h2>Infarto al miocardio</h2>
        <p>12/08/10</p>
      </div>
      <div class="info">
        <h2>Asma</h2>
        <p>Desde los 10 años</p>
      </div>
      <div class="info">
        <h2>Fractura ósea (Fémur)</h2>
        <p>24/10/95</p>
      </div>
    </div>
    <div class="card">
      <h1>{{ title3 }}</h1>
      <div class="info">
        <h2>Dolor estomacal</h2>
        <p>12/01/20</p>
      </div>
      <div class="info">
        <h2>Control médico</h2>
        <p>12/04/19</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    image: String,
    title: String,
    title2: String,
    title3: String,
    sexo: String,
    edad: Number
  }
};
</script>

<style lang="scss">
.cards {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 30px;
  }
}

.card {
  background: var(--white);
  height: 350px;
  padding: 20px;
  width: 30%;
  min-width: 250px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--black-2);
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 25px;
    height: unset;
  }
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 15px;
    margin-left: 10px;
  }
}
</style>