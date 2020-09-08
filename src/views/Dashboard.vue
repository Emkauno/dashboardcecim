<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <dSidebar />
      <div class="dashboard-right">
        <dMenu />
        <transition name="fade" mode="out-in">
          <router-view class="dashboard-right"></router-view>
        </transition>
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
    rgba(255, 255, 255, 0.299),
    rgba(255, 255, 255, 0.286)
  );
  backdrop-filter: blur(10px);
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translatey(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>