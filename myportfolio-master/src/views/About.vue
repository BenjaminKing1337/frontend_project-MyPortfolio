<template>
<body>
    <!-- gridbox with elements -->
    <kinesis-container id="gridBox">
      <!-- professional image container -->
      <kinesis-container id="img1">
        <kinesis-element :strength="30">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth" transformOrigin="50% 100%">
              <img id="imgOne" src="@/assets/me/meHome.jpg" alt />
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
      <!-- professional text container -->
      <div id="textBox1" class="textfield">
        <kinesis-container>
          <kinesis-element :strength="30">
            <h1>Hello there!</h1>
          </kinesis-element>
        </kinesis-container>
        <kinesis-container>
          <kinesis-element :strength="10">
            <p>My name is Benjamin, and it is my utmost pleasure to have you here on my website!</p>
          </kinesis-element>
          <kinesis-element :strength="-10">
            <p>I am a 26 year old Multimedia student at Business Academy South West, on a journey to becoming a full on webdesigner with focus on user experience, interface and front-end coding in general.</p>
          </kinesis-element>
          <kinesis-element :strength="10">
            <p>On the side, I work at the nordic electronics giant, Elgiganten. I do costumer service and warranty handling as well as extensive aftersales procedures.</p>
          </kinesis-element>
        </kinesis-container>
      </div>
      <!-- leisure image slideshow container -->
      <kinesis-container id="img2">
        <kinesis-element :strength="30">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth" transformOrigin="50% 100%">
              <transition-group name="fade" tag="div">
                <div v-for="i in [currentIndex]" :key="i">
                  <img id="imgTwo" :src="currentImg" />
                </div>
              </transition-group>
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
      <!-- leisure text container -->
      <div id="textBox2" class="textfield">
        <kinesis-container>
          <kinesis-element :strength="30">
            <h1>My Personal Life</h1>
          </kinesis-element>
        </kinesis-container>
        <kinesis-container>
          <kinesis-element :strength="20">
            <p>During my free time I attend more interests than I got time for. I enjoy analysis and take great pleasure in most types of media, as well a inspiration.</p>
          </kinesis-element>
          <kinesis-element :strength="-20">
            <p>I am a fan of patterns and systems, and there's nothing I like more than to make connections. I like to travel and I get around a lot due to international family.</p>
          </kinesis-element>
        </kinesis-container>
      </div>
      <!-- summary text container -->
      <div id="textBox3" class="textBox3">
        <kinesis-container>
          <kinesis-element :strength="30">
            <h1>My Portfolio</h1>
          </kinesis-element>
        </kinesis-container>
        <kinesis-container class="textBox3">
          <kinesis-element class="textBox3" :strength="-20">
            <br />
            <p>This page is one of my biggest projects yet, and even though the design decision isn't truly reflective of my creative thinking, due to time constraints and a deadline amidst a pandemic, it IS a testament to my curiousity.</p>
          </kinesis-element>
          <kinesis-element class="textBox3" :strength="20">
            <p>Being of a curious nature I have always gone to great lengths to satisfy it and luckily I am particularly curious about the different aspects of styling a webpage as is evident by some of my 'experiments' on this site, which in my own opinion is overdone, but nevertheless done to learn and hone my skills through experience.</p>
          </kinesis-element>
          <kinesis-element class="textBox3" :strength="-20">
            <p>On this site you will find a couple of my works, selected by yours truly, to give an impression of my various skills. Outside of working in software, I like to write creatively. Check out some of my poems!</p><br>
          </kinesis-element>
          <kinesis-element class="textBox3" :strength="30">
            <kinesis-element type="depth" :strength="20">
              <div
                id="vwButton"
                tag="button"
                onclick="window.open('https://hellopoetry.com/benjamin-king/');"
                target="_blank"
              >
                <h2>
                  View
                  <br />Poetry
                </h2>
              </div>
            </kinesis-element>
          </kinesis-element>
        </kinesis-container>
      </div>
      <!-- self illustration image container -->
      <kinesis-container id="img3">
        <kinesis-element :strength="30">
          <img class="img3" src="@/assets/selfIllustration.png" alt />
        </kinesis-element>
      </kinesis-container>
    </kinesis-container>
</body>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/me/meAmsterdam.png"),
        require("@/assets/me/meDarum.png"),
        require("@/assets/me/meEsbjerg.png"),
        require("@/assets/me/meLaRochelle.png"),
        require("@/assets/me/meMontSaintMichel.png")
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
@import "@/scss/variables.scss";
html, body {
    overflow: visible;
}
// gradient background //
body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    map-get($colorscheme, Primary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Octonary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Primary)
  );
  // fade in animations //
  #img1 {
    animation: appear 1s ease-in;
  }
  #textBox1 {
    animation: appear 1.5s ease-in;
  }
  #img2 {
    animation: appear 2s ease-in;
  }
  #textBox2 {
    animation: appear 2.5s ease-in;
  }
  #textBox3 {
    animation: appear 3s ease-in;
  }
  #img3 {
    animation: appear 3.5s ease-in;
  }
  // To set the text background contrast and aligning everything //
  .textfield {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    // headers //
    h1,
    h2,
    h3 {
      border-radius: 30px;
      background-color: map-get($colorscheme, Quinary);
      color: map-get($colorscheme, Tertiary);
      padding: 10px;
    }
    // paragraph //
    p {
      border-radius: 30px;
      background-color: map-get($colorscheme, Quinary);
      color: map-get($colorscheme, Tertiary);
      padding: 10px;
    }
  }
  // global image properties for this body //
  img {
    max-width: 100%;
    max-height: 100%
  }
    // grid properties for the six elements //
    #gridBox {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      grid-auto-rows: 450px;
      
      // image properties //
      #img1,
      #img2,
      #img3 {
        margin: 20px 50px;
      }
      // text properties //
      #textBox1,
      #textBox2,
      #textBox3 {
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin: auto 50px;
      }
      #img3 {
        grid-row: span 2;
      }
      #img1,
      #img2 {
        max-width: 550px;
      }
      #imgOne,
      #imgTwo {
        border: solid map-get($colorscheme, Secondary);
        -webkit-box-shadow: 5px 5px 5px 0px #000000,
          inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(255, 155, 69, 0);
        box-shadow: 25px 25px 25px 0px #000000, inset 4px 4px 15px 0px #000000,
          5px 5px 15px 5px rgba(255, 155, 69, 0);
      }
      // container for slideshow //
      #img2 {
        height: 339px;
        //slideshow effect//
        .fade-enter-active,
        .fade-leave-active {
          overflow: hidden;
          visibility: visible;
          position: absolute;
          width: 100%;
          opacity: 1;
        }
        //slideshow effect//
        .fade-enter,
        .fade-leave-to {
          visibility: hidden;
          width: 100%;
          opacity: 0;
        }
      }
      .textBox3 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        h1,
        p {
          border-radius: 30px;
          background-color: map-get($colorscheme, Quinary);
          padding: 10px;
        }
        // The button for download //
        #vwButton {
          margin-top: 150px;
          background-color: none;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 80px;
          width: 120px;
          font-size: 10px;
          cursor: pointer;
          animation: bgcpulse 3s infinite alternate-reverse;
          clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);
          h2 {
            background-color: none;
          }
        }
      }
    }
  }
// When Screen is less than 1020px wide //
@media only screen and (max-width: 1020px) {
  #img1, #img2, #img3 {
    margin: 0 auto !important;
  }
  .img3 {
  padding-top: 150px !important;
  padding-bottom: 100px;
  max-height: 600px !important;
  }
}
// When Screen is more than 1020px wide //
@media only screen and (min-width: 1020px) {
  #gridBox {
    width: 1100px;
  }
  #textBox3 {
    grid-row: span 2;
    grid-column: span 1 !important;
  }
  #img1,
  #img2 {
    width: 450px !important;
  }
}
// When Screen is more than 1900px wide //
@media only screen and (min-width: 1900px) {
  #gridBox {
    width: 100%;

  }
  #textBox3 {
    grid-column: span 2 !important;
    margin-top: 250px !important;
  }
  #img3 {
    grid-column: span 2 !important;
    width: 800px !important;
    grid-row: span 1 !important;
  }
  .img3 {
    max-height: 1000px !important;
  }
}
</style>
