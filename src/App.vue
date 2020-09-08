<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");

:root {
  --white: #ffffff;
  --purple: #667acd;
  --purple-light: #f5f6fc;
  --gray: #faf7f5;
  --orange: #f18200;
  --black: #040404;
}

html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
* {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  background: var(--white);
  height: 100%;
  background: url(assets/background.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  font-family: "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
