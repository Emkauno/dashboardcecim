<template>
  <div class="examenes">
    <h1 class="examen-h1">Historial de exámenes de paciente</h1>
    <Examenes
      title="Endoscopía"
      motivoconsulta="Dolor Gastroesofágico"
      fecha="20/11/20"
      :style="purple"
    />
    <Examenes title="Hemograma" motivoconsulta="Control colesterol" ok fecha="15/09/20" />
    <Examenes title="Cirugía" motivoconsulta="Quiste en zona lumbar" ok fecha="18/05/16" />
    <Examenes
      title="Fractura de clavícula"
      motivoconsulta="Dolor Gastroesofágico"
      fecha="24/10/95"
      ok
    />
    <Examenes title="Traumatología" motivoconsulta="Fractura de Fémur" ok fecha="24/10/95" />
  </div>
</template>

<script>
import Examenes from "../components/Examenes";

export default {
  data() {
    return {
      purple:
        "backgroundColor: var(--purple); color: var(--white); transform: scale(1.02)"
    };
  },
  components: {
    Examenes
  }
};
</script>

<style lang="scss">
.examenes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
}
.examen-h1 {
  margin: 25px 5px;
  font-size: 25px;
}
</style>