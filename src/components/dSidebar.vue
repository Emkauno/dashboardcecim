<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <router-link class="sidebar-user" to="/">
        <img src="../assets/avatar.png" alt />
      </router-link>

      <router-link class="sidebar-link" to="/anamnesis">
        <img src="../assets/icons/medical-history.svg" alt />
      </router-link>
      <router-link class="sidebar-link" to="/examenes">
        <img src="../assets/icons/medical-record.svg" alt />
      </router-link>
    </div>
    <div class="logout">
      <a class="dmenu-btn" @click="logout">
        <img src="../assets/icons/logout.svg" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar-user {
  transform: scale(1);
  transition: all 0.3s ease;
  margin-bottom: 50px;
  @media (max-width: 500px) {
    margin-bottom: 0;
  }
  img {
    width: 100%;
    backface-visibility: hidden;
    @media (max-width: 500px) {
      width: 70px;
      margin-right: 40px;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
}
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  background: url(../assets/bgsidebar.svg);
  background-size: cover;
  border-radius: 8px;
  min-height: 800px;
  width: 100px;
  @media (max-width: 500px) {
    min-height: 100px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  &-link {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-bottom: 30px;
    @media (max-width: 500px) {
      margin-bottom: 0;
      margin-right: 40px;
    }
    img {
      width: 30px;
      @media (max-width: 500px) {
        width: 35px;
      }
    }
  }
  a {
    margin-bottom: 20px;
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100px;
    flex-direction: row;
  }
  .dmenu-btn {
    img {
      @media (max-width: 500px) {
        width: 40px;
      }
    }
  }
}
</style>