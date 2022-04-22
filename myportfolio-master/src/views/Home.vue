<template>
<body>
  <!-- space beneath header -->
  <div id="space">
    <h1>Welcome to my portfolio, go ahead and explore!</h1>
  </div>
  <!-- Box containing slideshow -->
  <kinesis-container class="slideshowBox">
    <kinesis-element :strength="10" type="depth" transformOrigin="50% 100%" class="slideshow">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img class="slidephoto" :src="currentImg" />
        </div>
      </transition-group>
    </kinesis-element>
    <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </kinesis-container>
  <!-- Gridbox containing the three subpage boxes -->
  <div id="homeBox">
    <!-- Gridbox for About -->
    <kinesis-container id="homeBox">
      <!-- borderbox for subpage boxes -->
      <kinesis-element class="borderbox" :strength="20">
        <!-- About subpage box -->
        <kinesis-container id="About">
          <div id="aboutPicture" v-bind:class="{change: aboutchange}">
            <img src="@/assets/About.png" alt />
          </div>
          <div id="aboutText" v-on:click="aboutchange = !aboutchange">
            <kinesis-element>
              <h1>ABOUT</h1>
            </kinesis-element>
          </div>
          <h3>Get to know me!</h3>
        </kinesis-container>
      </kinesis-element>
      <!-- About subpage button -->
      <kinesis-container id="kBtn">
        <kinesis-element type="depth" axis="x" :strength="30">
          <kinesis-container id="borderbox">
            <router-link id="aboutButton" tag="button" to="/about">
              <h2>Click Here</h2>
            </router-link>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-container>
    <!-- Gridbox for Creations -->
    <kinesis-container id="homeBox">
      <kinesis-element class="borderbox" :strength="20">
        <!-- Creations subpage box -->
        <kinesis-container id="Creations">
          <div id="creationsPicture" v-bind:class="{change: creationschange}">
            <img src="@/assets/Creations.png" alt />
          </div>
          <div id="creationsText" v-on:click="creationschange = !creationschange">
            <kinesis-element>
              <h1>CREATIONS</h1>
            </kinesis-element>
          </div>
          <h3>Check out my works!</h3>
        </kinesis-container>
      </kinesis-element>
      <!-- Creations subpage button -->
      <kinesis-container id="kBtn">
        <kinesis-element type="depth" axis="x" :strength="30">
          <kinesis-container id="borderbox">
            <router-link id="creationsButton" tag="button" to="/creations">
              <h2>Click Here</h2>
            </router-link>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-container>
    <!-- Gridbox for Contact -->
    <kinesis-container id="homeBox" class="contactSpan">
      <kinesis-element class="borderbox" :strength="20">
        <!-- Contact subpage box -->
        <kinesis-container id="Contact">
          <div id="contactPicture" v-bind:class="{change: contactchange}">
            <img src="@/assets/Contact.png" alt />
          </div>
          <div id="contactText" v-on:click="contactchange = !contactchange">
            <kinesis-element>
              <h1>CONTACT</h1>
            </kinesis-element>
          </div>
          <h3>Get a hold of me!</h3>
        </kinesis-container>
      </kinesis-element>
      <!-- Contact subpage button -->
      <kinesis-container id="kBtn">
        <kinesis-element type="depth" axis="x" :strength="30">
          <kinesis-container id="borderbox">
            <router-link id="contactButton" tag="button" to="/contact">
              <h2>Click Here</h2>
            </router-link>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-container>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      aboutchange: false,
      creationschange: false,
      contactchange: false,
      images: [
        require("@/assets/poster/tomie111.png"),
        require("@/assets/doubleExposure1.jpg"),
        require("@/assets/poster/junjiIto.jpg"),
        require("@/assets/poster/tomie11.png"),
        require("@/assets/photography/park2.jpg"),
        require("@/assets/selfIllustration1.png"),
        require("@/assets/photography/park1.jpg"),
        require("@/assets/promo/highPink.png"),
        require("@/assets/photography/park3.jpg"),
        require("@/assets/infomercial/infomercialThumbnail1.png"),
        require("@/assets/photography/park5.jpg"),
        require("@/assets/contact/CV1.png"),
        require("@/assets/contact/BcardBack.png"),
        require("@/assets/photography/park4.jpg"),
        require("@/assets/contact/BcardFront.png")
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 12000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";

* {
  box-sizing: border-box;
}
// gradient background //
body {
  background-image: linear-gradient(
    map-get($colorscheme, Primary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Octonary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Primary)
  );
  // top spacing //
  #space {
    margin: 80px auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  // Container for slideshow //
  .slideshowBox {
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 600px;
    z-index: 1;
    animation: appear 0.8s ease-out;
    border: solid 2px map-get($colorscheme, Tertiary);
    // slideshow //
    .slideshow {
      height: 800px;
      width: 1200px;
      // to center images of slideshow //
      .slidephoto {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      //slide effect //
      .fade-enter-active,
      .fade-leave-active {
        transition: all 0.9s ease;

        visibility: visible;
        position: absolute;
        width: 100%;
        opacity: 1;
      }
      //slide effect//
      .fade-enter,
      .fade-leave-to {
        visibility: hidden;
        width: 100%;
        opacity: 0;
      }
      // images placement correction //
      img {
        margin-top: 50%;
        margin-left: 50%;
        min-width: 100vw;
        max-width: 200%;
        min-height: 100%;
        transform: translate(-50%, -50%);
      }
    }
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 16px;
      background-color: map-get($colorscheme, Quinary);
      color: map-get($colorscheme, Quaternary);
      font-weight: bold;
      font-size: 40px;
      transition: 0.7s ease;
      text-decoration: none;
      user-select: none;
      -webkit-text-stroke: 1px map-get($colorscheme, Secondary);
    }
    .next {
      right: 0;
      border-radius: 50px 0px 0px 50px;
    }
    .prev {
      left: 0;
      border-radius: 0px 50px 50px 0px;
    }
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.9);
      color: map-get($colorscheme, Tertiary);
    }
  }
  // Properties for gridnetwork for three subpages boxes //
  #homeBox {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-auto-rows: 450px;
    padding: 1rem;
    justify-content: center;
    align-content: center;
    // Properties for each gridbox //
    #aboutButton,
    #creationsButton,
    #contactButton {
      border: none;
      height: 100px;
      width: 200px;
      cursor: pointer;
      animation: bgcpulse 3s infinite alternate-reverse;
      clip-path: polygon(50% 100%, 100% 57%, 94% 22%, 6% 22%, 0 57%);
    }
    // Properties for buttons on top of the subpage gridboxes //
    #kBtn {
      position: absolute;
      z-index: 2;
      margin-top: 350px;
      left: 50%;
      margin-left: -103px;
      // To create border on clip path button //
      #borderbox {
        background-color: map-get($colorscheme, Secondary);
        clip-path: polygon(50% 100%, 100% 57%, 94% 22%, 6% 22%, 0 57%);
        height: 106px;
        width: 206px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: appear 2s ease-in;
      }
    }
    // GRID CONTAINER. Borderbox to create border on clip path subpage gridbox //
    .borderbox {
      animation: appear 1s ease-in;
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: map-get($colorscheme, Secondary);
      clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);
      height: 100%;
      width: 100%;
      animation: appear 1s ease-in;
      // Contact gridbox scaling //
      #Contact {
        grid-column: span 2;
      }
      // Properties for each subpage gridbox //
      #About,
      #Creations,
      #Contact {
        animation: hbpulse 20s infinite alternate-reverse;
        position: relative;
        z-index: 1;
        height: 98%;
        width: 98%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        border: solid map-get($colorscheme, Secondary) 2px;
        background-color: map-get($colorscheme, Quaternary);
        grid-column: span 1;
        clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);
        // Properties for description inside each subpage gridbox //
        h3 {
          color: map-get($colorscheme, Primary);
          margin-top: -35px;
          padding-bottom: 45px;
          font-size: 14px;
        }
        // Properties for img container in each gridbox //
        #aboutPicture,
        #creationsPicture,
        #contactPicture {
          padding-top: 50px;
          height: 55%;
          width: 102%;

          // Properties for img in each gridbox //
          img {
            margin-bottom: 4%;
            max-height: 80%;
            display: block;
            margin: 5% auto;
          }
        }
        // Properties for text area //
        #aboutText,
        #creationsText,
        #contactText {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: map-get($colorscheme, Primary);
          width: 100%;
          height: 15%;
          margin-bottom: 8%;
          border-top: solid map-get($colorscheme, Secondary) 1px;
        }
      }
    }
  }
}
// to change color, to specify write name of class or id next to .change //
.change {
  color: map-get($colorscheme, Tertiary);
  background-color: map-get($colorscheme, Tertiary);
}

// When Screen is less than 800px wide //
@media only screen and (max-width: 800px) {
  .slideshowBox {
    display: none !important;
  }
  #space {
    height: 200px !important;
  }
}
// When Screen is less than 1020px wide //
@media only screen and (max-width: 1020px) {
  #homeBox {
    margin: auto 150px;
  }
  .contactSpan {
    grid-column: span 1 !important;
  }
  h3 {
    margin-bottom: 10%;
  }
}
// When Screen is less than 1220px wide //
@media only screen and (max-width: 1220px) {
  .slideshowBox {
    width: 800px !important;
  }
  .slideshow {
    width: 800px !important;
  }
}
// When Screen is more than 1020px wide //
@media only screen and (min-width: 1020px) {
  #contactText {
    margin-bottom: 4% !important;
  }
  #Contact {
    h3 {
      margin-bottom: 6% !important;
    }
    img {
      margin: 1% auto !important;
    }
  }
  #About,
  #Creations {
    #aboutText,
    #creationsText {
      margin-bottom: 10% !important;
    }
    h3 {
      margin-bottom: 10% !important;
    }
  }
  .contactSpan {
    grid-column: span 2 !important;
  }
  h3 {
    margin-top: -30px !important;
  }
}
// When Screen is more than 1600px wide //
@media only screen and (min-width: 1600px) {
  .contactSpan {
    grid-column: span 1 !important;
  }
  #contactText {
    margin-bottom: 10% !important;
  }
  #Contact {
    h3 {
      margin-bottom: 10% !important;
    }
    img {
      margin: 5% auto !important;
    }
  }
}
</style>