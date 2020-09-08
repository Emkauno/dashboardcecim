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
  --gray: #faf7f5;
  --gray-light: #eff0f5;
  --white: #ffffff;
  --purple: #6b79e4;
  --purple-light: #e5ecff;
  --purple-bg: #e5ecff;
  --blue: #0184ff;
  --blue-light: #3295f8;
  --orange: #fe7940;
  --black: rgb(8, 8, 26);
  --black-2: rgb(18, 18, 51);
}

html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
* {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background: var(--white);
  height: 100%;
  background: url(assets/background.svg);
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
}
</style>
