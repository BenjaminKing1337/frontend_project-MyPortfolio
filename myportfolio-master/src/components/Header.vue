<template>
  <header v-if="!$route.meta.hide">
    <router-link to="/">
      <div id="logo">
        <img src="@/assets/logoblack.png" height="50" width="auto" alt="Logo" />
        <h1>
          Benjamin King
          <kinesis-container class="animationBox">
            <kinesis-element class="animationBox" :strength="-15" axis="y" type="depth">
              <svg class="animation" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" />
                <circle cx="170" cy="170" r="135" />
                <circle cx="170" cy="170" r="110" />
                <circle cx="170" cy="170" r="85" />
              </svg>
            </kinesis-element>
          </kinesis-container>
        </h1>
      </div>
    </router-link>
    <div id="headerSpace"></div>
    <div id="nav">
      <router-link class="navHome" to="/home">Home |</router-link>
      <div class="dropdown">
        <button class="dropbtn">
          <div id="icon"></div>
        </button>

        <div class="dropdown-content">
          <router-link to="/about">
            <a href="#">About</a>
          </router-link>
          <router-link to="/creations">
            <a href="#">Creations</a>
          </router-link>
          <router-link to="/contact">
            <a href="#">Contact</a>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";

header {
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: map-get($colorscheme, Primary);
  z-index: 2;
  a {
    text-decoration: none;
  }
  #logo {
    display: flex;
    align-items: center;
    padding: 10px;
    flex-grow: 1;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      color: map-get($colorscheme, Tertiary);
      animation: 1s ease-out 0s 1 slideInFromLeft;
      transition: 0.8s ease-in-out;
      // Size of circle animation //
      .animation {
        max-width: 3rem;
      }
      circle {
      stroke: map-get($colorscheme, Tertiary);
    }
    }
    
    
  }
  img {
    animation: 2s ease-out 0s 1 slideInFromTop;
    transition: 0.8s ease-in-out;
  }
  img:hover {
    transform: rotate(1440deg);
  }
  h1:hover {
    transform: translateX(30px);
  }

  #headerSpace {
    flex-grow: 11;
  }
  #nav {
    display: flex;
    flex-grow: 1;
    animation: 1s ease-out 0s 1 slideInFromRight;
    transition: 0.8s ease-in-out;

    .navHome:hover {
      transform: translateX(-30px) scale(2, 2);
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-weight: bold;
      color: map-get($colorscheme, Secondary);

      &.router-link-exact-active {
        color: map-get($colorscheme, Primary);
      }
    }
    #icon {
      margin: auto 1px;
      background-color: black;
      height: 30px;
      width: 30px;
      clip-path: polygon(100% 25%, 50% 80%, 0 25%);
      animation: bgcpulse 4s ease-out 3s infinite alternate-reverse;
    }
  }
}

/* Dropdown button */
.dropdown .dropbtn {
  text-decoration: none;
  font-weight: bold;
  display: flex;
  font-size: 20px;
  border: none;
  outline: none;
  color: map-get($colorscheme, Secondary);
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}
/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: map-get($colorscheme, Septenary);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: map-get($colorscheme, Secondary);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: map-get($colorscheme, Primary);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
  margin-left: -90px;
}
</style>