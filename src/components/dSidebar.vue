<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <router-link class="sidebar-user" to="/dashboard">
        <img src="../assets/avatar.png" alt />
      </router-link>
      <router-link class="sidebar-link" to="/dashboard">
        <img src="../assets/icons/home.svg" alt />
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
export default {
  methods: {
    logout() {
      localStorage.removeItem("userlogged");
      this.$router.push("/login");
    }
  }
};
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
    flex-direction: row;
    min-height: 100px;
    justify-content: center;
    padding: 50px 5px;
    width: 100%;
  }

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
      width: unset;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
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
      margin-right: 20px;
    }
    img {
      width: 30px;
      margin-bottom: 40px;
      @media (max-width: 500px) {
        width: 25px;
        margin-bottom: 0;
      }
    }
  }
  a {
    margin-bottom: 50px;
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100px;
    flex-direction: row;
  }

  .logout {
    width: unset;
    .dmenu-btn {
      img {
        @media (max-width: 500px) {
          width: 30px;
          margin-bottom: -5px;
        }
      }
    }
  }
}
</style>