<template>
  <div id="app">
    <myHeader id="myHeader"></myHeader>
    <myContent id="myContent"></myContent>
    <myFooter id="myFooter"></myFooter>
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  components: {
    myHeader: Header,
    myContent: Content,
    myFooter: Footer
  }
};
</script>



<style lang="scss">
@import "./src/scss/variables.scss";

body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

h1 {
  margin: 0 auto;
}
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: map-get($colorscheme, Primary);
  color: map-get($colorscheme, Tertiary);
  p {
    font-family: "Nova Mono", monospace;
  }
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: map-get($colorscheme, Secondary);
}
::-webkit-scrollbar-thumb {
  height: 110px;
  background: map-get($colorscheme, Primary);
}
::-webkit-scrollbar-thumb:hover {
  background: map-get($colorscheme, Tertiary);
}
</style>

