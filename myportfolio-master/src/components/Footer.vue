<template>
  <footer v-if="!$route.meta.hide">
    <kinesis-container class="absolute">
      <kinesis-element v-if="!$route.meta.hide1" class="borderbox" type="depth" :strength="20" axis="y">
        <router-link id="Button" tag="button" to="/home">
          <h2>Return Home</h2>
        </router-link>
      </kinesis-element>
    </kinesis-container>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  background-color: map-get($colorscheme, Primary);
}
.absolute {
  position: absolute;
  z-index: 2;
  left: 50%;
  margin-left: -132px;
  .borderbox {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 84px;
    width: 264px;
    background-color: map-get($colorscheme, Secondary);
    clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);

    #Button {
      margin: 10px;
      text-align: center;
      height: 80px;
      width: 260px;
      font-size: 20px;
      cursor: pointer;
      animation: bgcpulse 3s infinite alternate-reverse;
      clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);

      &.router-link-exact-active {
        color: map-get($colorscheme, Primary);
        display: none;
        &.router-link-exact-active .borderbox {
          visibility: hidden;
        }
      }
    }
  }
}
</style>