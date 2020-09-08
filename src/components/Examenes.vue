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
        <div class="tick" v-if="ok">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M221.6,338.9c42.6-62.7,84.1-123.9,125.7-185.1c14.4-21.2,28.7-42.6,43.2-63.7c11.1-16.3,21.1-18.2,37.2-7.6
		c8.7,5.7,17.2,11.5,25.7,17.4c16.6,11.6,18.6,21.6,7.1,38.5c-58.9,87-117.9,174-176.9,261c-7.2,10.6-14.4,21.3-21.6,31.9
		c-19.7,28.9-38.5,30.6-63.7,5.5c-31.8-31.7-63.6-63.5-95.3-95.3c-6.3-6.3-12.7-12.4-18.8-18.9c-11.5-12.3-11.4-22.5,0.4-34.8
		c8.2-8.6,16.6-17,25.1-25.1c12.4-11.8,22.5-11.9,34.7,0.1c21.9,21.4,43.4,43.2,65,64.8C213,330.8,216.6,334.1,221.6,338.9z"
              />
            </g>
          </svg>
        </div>
        <div class="tick" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              class="st1"
              d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm121.75 388.414062c-4.160156 4.160157-9.621094 6.253907-15.082031 6.253907-5.460938 0-10.925781-2.09375-15.082031-6.253907l-106.667969-106.664062c-4.011719-3.988281-6.25-9.410156-6.25-15.082031v-138.667969c0-11.796875 9.554687-21.332031 21.332031-21.332031s21.332031 9.535156 21.332031 21.332031v129.835938l100.417969 100.414062c8.339844 8.34375 8.339844 21.824219 0 30.164062zm0 0"
            />
          </svg>
        </div>
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
    fecha: String,
    ok: Boolean,
    active: String
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
    .tick svg .st0 {
      fill: var(--white);
    }
  }
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
    justify-content: flex-start;
    width: 20%;
    @media (max-width: 500px) {
      width: 100%;
      justify-content: center;
    }
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
.tick {
  svg {
    width: 15px;
    margin-left: 50px;
    .st0 {
      fill: var(--purple);
    }
    .st1 {
      width: 10px;
      fill: var(--white);
    }
  }
}
</style>