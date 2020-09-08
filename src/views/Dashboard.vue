<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <dSidebar />
      <div class="dashboard-right">
        <dMenu />
        <router-view class="dashboard-right"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import dMenu from "../components/dMenu";
import dSidebar from "../components/dSidebar";

export default {
  components: {
    dMenu,
    dSidebar
  }
};
</script>
<style lang="scss">
.dashboard {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.699),
    rgba(255, 255, 255, 0.486)
  );
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;

  &-content {
    display: flex;
    flex-direction: row;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
  &-right {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 500px) {
    margin-top: 0;
  }
}
</style>