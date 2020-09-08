<template>
  <div class="examenes">
    <h1 class="examen-h1">Historial de exámenes de paciente</h1>
    <Examenes title="Endoscopía" motivoconsulta="Dolor Gastroesofágico" fecha="20/09/18" />
    <Examenes title="Hemograma" motivoconsulta="Control colesterol" fecha="25/10/18" />
    <Examenes title="Cirugía" motivoconsulta="Quiste en zona lumbar" fecha="18/05/16" />
    <Examenes
      title="Fractura de clavícula"
      motivoconsulta="Dolor Gastroesofágico"
      fecha="24/10/95"
    />
    <Examenes title="Traumatología" motivoconsulta="Fractura de Fémur" fecha="24/10/95" />
  </div>
</template>

<script>
import Examenes from "../components/Examenes";

export default {
  components: {
    Examenes
  }
};
</script>

<style>
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