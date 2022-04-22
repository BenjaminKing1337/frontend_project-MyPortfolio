<template>
<body onload="window.scroll(0, 100)">
  <router-link to="/home">
    <div id="page">
      <!-- Welcome text box with circles -->
      <div id="textBox">
        <!-- Circle loading animation -->
        <kinesis-container class="animationBox">
          <kinesis-element class="animationBox" :strength="50">
            <svg class="animation" viewBox="0 0 340 340">
              <circle cx="170" cy="170" r="160" />
              <circle cx="170" cy="170" r="135" />
              <circle cx="170" cy="170" r="110" />
              <circle cx="170" cy="170" r="85" />
            </svg>
          </kinesis-element>
        </kinesis-container>
        <!-- W container -->
        <kinesis-container id="w">
          <kinesis-element id="w" :strength="50">
            <h1>W</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- E container -->
        <kinesis-container id="e">
          <kinesis-element id="e" :strength="50">
            <h1>e</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- L container -->
        <kinesis-container id="l">
          <kinesis-element id="l" :strength="50">
            <h1>l</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- C container -->
        <kinesis-container id="c">
          <kinesis-element id="c" :strength="50">
            <h1>c</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- O container -->
        <kinesis-container id="o">
          <kinesis-element id="o" :strength="50">
            <h1>o</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- M container -->
        <kinesis-container id="m">
          <kinesis-element id="m" :strength="50">
            <h1>m</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- 2nd E container -->
        <kinesis-container id="e2">
          <kinesis-element id="e2" :strength="50">
            <h1>e</h1>
          </kinesis-element>
        </kinesis-container>
        <!-- Circle loading animation -->
        <kinesis-container class="animationBox">
          <kinesis-element class="animationBox" :strength="50">
            <svg class="animation" viewBox="0 0 340 340">
              <circle cx="170" cy="170" r="160" />
              <circle cx="170" cy="170" r="135" />
              <circle cx="170" cy="170" r="110" />
              <circle cx="170" cy="170" r="85" />
            </svg>
          </kinesis-element>
        </kinesis-container>
      </div>
      <!-- Enter site button -->
      <kinesis-container class="appear">
        <kinesis-element
          id="enterButton"
          :strength="50"
          axis="x"
          type="depth_inv"
          transformOrigin="50% 100%"
        >ENTER</kinesis-element>
      </kinesis-container>
    </div>
  </router-link>
</body>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "./src/scss/variables.scss";

// To remove underline and set starting color before animation //
a {
  text-decoration: none;
  color: map-get($colorscheme, Primary);
}
// Frontpage properties //
#page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    map-get($colorscheme, Octonary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Octonary)
  );
  font-size: 60px;
  padding: 200px;
  padding-top: 350px;
  .animation {
    animation: appear 1.3s ease-in;
    max-width: 15rem;
  }
  // Text box for the word Welcome //
  #textBox {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
    gap: 5rem;
    width: 90%;
    h1 {
      animation: appear 1s ease-in;
      text-align: center;
    }
    #w {
      animation: cpulse 1s ease-in 1.5s infinite alternate-reverse;
    }
    #e {
      animation: cpulse 1s ease-in 1.7s infinite alternate-reverse;
    }
    #l {
      animation: cpulse 1s ease-in 1.9s infinite alternate-reverse;
    }
    #c {
      animation: cpulse 1s ease-in 2.1s infinite alternate-reverse;
    }
    #o {
      animation: cpulse 1s ease-in 2.3s infinite alternate-reverse;
    }
    #m {
      animation: cpulse 1s ease-in 2.5s infinite alternate-reverse;
    }
    #e2 {
      animation: cpulse 1s ease-in 2.7s infinite alternate-reverse;
    }
  }
  // button appear //
  .appear {
    animation: appear 1.5s ease-in;
  }
  // Enter page button //
  #enterButton {
    height: 150px;
    width: 300px;
    color: map-get($colorscheme, Primary);
    background-color: map-get($colorscheme, Tertiary);
    margin: 100px auto;
    font-size: 50px;
    font: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: bgcpulse 3s infinite alternate-reverse;
    clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);
    transition: 1s all ease;
  }
  #enterButton:hover {
    transform: translateZ(100px) scale(20, 20);
  }
}
// When Screen is less than 600px wide //
@media only screen and (max-width: 600px) {
  #textBox {
    font-size: 30px;
  }
}
// When Screen is less than 920px wide //
@media only screen and (max-width: 920px) {
  #w,
  #e,
  #l,
  #c,
  #o,
  #m,
  #e2,
  .animationBox {
    grid-column: span 2 !important;
  }
  #textBox {
    gap: 30px !important;
    font-size: 45px;
  }
}
// When Screen is more than 920px wide //
@media only screen and (min-width: 920px) {
  body {
    height: 100vh;
  }
  #textBox {
    width: 600px !important;
  }
}
// When Screen is more than 1500px wide //
@media only screen and (min-width: 1500px) {
  body {
    height: 100vh;
  }
  #textBox {
    display: flex !important;
    width: 100% !important;
    font-size: 150%;
    justify-content: center;
  }
}
</style>