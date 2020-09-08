<template>
  <div class="home">
    <h1 class="home-h1">Últimos registros de paciente</h1>
    <DashboardCard title="Endoscopía" status="agendado" fecha="20/11/20" />
    <DashboardCard title="Electrocardiograma" status="agendado" fecha="18/11/20" />
    <DashboardCard title="Hemograma" status="agendado" fecha="12/10/20" />
    <DashboardCard title="Neurología" status="agendado" fecha="09/10/20" />
  </div>
</template>

<script>
import DashboardCard from "../components/DashboardCard";
export default {
  name: "dashboard",
  components: {
    DashboardCard
  }
};
</script>

<style lang='scss'>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
}
.home-h1 {
  margin: 25px 5px;
  font-size: 25px;
}
</style>