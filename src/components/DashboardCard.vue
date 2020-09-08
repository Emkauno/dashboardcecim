<template>
  <div class="dashcard">
    <div class="card-examen">
      <h1>{{ title }}</h1>
      <div class="info">
        <h2>Examen complementario {{ status }}</h2>
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
  name: "dashcard",
  props: {
    title: String,
    status: String,
    fecha: String
  }
};
</script>

<style lang="scss">
.dashcard {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  background: var(--white);
  border-radius: 8px;
  color: var(--black);
  box-shadow: 2px 4px 11px 0px rgba(115, 94, 155, 0.2);
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: var(--purple);
    color: white;
    transform: scale(1.02);
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
}
.card-examen {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  border-radius: 8px;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 80%;
  }

  h1 {
    font-size: 20px;
    width: 25%;
    text-align: left;
    font-weight: 400;
    @media (max-width: 500px) {
      width: 100%;
      text-align: center;
      font-size: 22px;
      margin-top: 0;
    }
  }
  h2 {
    font-size: 16px;
    white-space: nowrap;
    font-weight: 400;
  }
  p {
    font-size: 15px;
    margin-left: 10px;
    text-align: center;
    font-weight: 300;
  }
}
</style>