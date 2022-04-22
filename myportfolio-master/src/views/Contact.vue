<template>
<body>
  <div id="gridBoxNet">
    <!-- row of logos -->
    <kinesis-container id="logoAnimation">
      <kinesis-element :strength="20" type="depth" axis="x">
        <kinesis-container class="intro">
          <kinesis-element tag="img" :strength="20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="-20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="-20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="-20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="-20" :src="logo" class="absolute" />
          <kinesis-element tag="img" :strength="20" :src="logo" class="absolute" />
        </kinesis-container>
      </kinesis-element>
    </kinesis-container>
    <!-- gridbox with all the contents of contact page-->
    <div class="gridbox">
      <!-- intro text box -->
      <kinesis-container id="introText">
        <kinesis-element type="depth" :strength="20">
          <h1>So you wish to get in contact with me?</h1>
          <br />
          <!-- paragraph box -->
          <div id="pBox">
            <p>Here you will find my</p>
            <p id="glowtext">Video CV</p>
            <p>, my</p>
            <p id="glowtext" class="glowtext1">Written CV</p>
            <p>and my</p>
            <p id="glowtext">Business Card</p>
            <p>.</p>
          </div>
          <!-- circle loading animation -->
          <kinesis-container class="animationBox">
            <kinesis-element class="animationBox" :strength="80" axis="x">
              <svg class="animation" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" />
                <circle cx="170" cy="170" r="135" />
                <circle cx="170" cy="170" r="110" />
                <circle cx="170" cy="170" r="85" />
              </svg>
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
      <!-- video cv box -->
      <kinesis-container id="videoCV">
        <div>
          <iframe
            src="https://youtube.com/embed/qZ1HTOcKf-E"
            alt="Video CV"
            height="100%"
            width="100%"
          />
        </div>
        <!-- video cv text -->
        <kinesis-element id="textfield">
          <h2>My Video CV</h2>
          <p>Made with limitations in terms of location due to filming taking place at the beginning of the corona pandemic. Here is a quick introduction of me as a person and a glimpse into my main values, with links to my social media at the end.</p>
        </kinesis-element>
      </kinesis-container>
      <!-- written cv box -->
      <kinesis-container id="CV">
        <kinesis-element :strength="30">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth" transformOrigin="50% 100%">
              <img src="@/assets/contact/CV.png" alt="Written CV" />
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
      <!-- written cv text box -->
      <kinesis-container id="cvText">
        <kinesis-element :strength="30">
          <kinesis-container>
            <kinesis-element id="textfield" :strength="10" type="depth" transformOrigin="50% 100%">
              <h1>My Written CV</h1>
              <p>Here we have my curriculum vitae. It contains a short description of my intentions, details my education, work experience and capabilities.</p>
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
      <!-- business card text box -->
      <kinesis-container id="bsCardText">
        <kinesis-element id="textfield" :strength="30">
          <kinesis-container>
            <kinesis-element :strength="-50" transformOrigin="150% 150%" axis="x">
              <h1>My Business Card</h1>
            </kinesis-element>
            <kinesis-element :strength="50" transformOrigin="150% 150%" axis="x">
              <p>Designed with simplicity in mind and made to reflect the style of my written CV. I chose the black background color to make it stand out and go easier on the eyes, and the light-blue to have a nice contrast.</p>
            </kinesis-element>
            <kinesis-element :strength="-50" transformOrigin="150% 150%" axis="x">
              <h2>Click on the business card to see the other side!</h2>
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
      <!-- business card box -->
      <kinesis-container id="businessCard">
        <kinesis-element :strength="30">
          <kinesis-container>
            <kinesis-element>
              <img
                v-on:click="toggle()"
                :src="myImage"
                alt="Business Card Front"
                height="100%"
                width="100%"
              />
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logoblack.png"),
      myImage: require("@/assets/contact/BcardFront.png"),
      side: true
    };
  },
  methods: {
    toggle: function() {
      this.side = !this.side;
      if (this.side == true) {
        this.myImage = require("@/assets/contact/BcardFront.png");
      } else {
        this.myImage = require("@/assets/contact/BcardBack.png");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
// Background gradient and centering//
body {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
    map-get($colorscheme, Primary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Octonary),
    map-get($colorscheme, Primary),
    map-get($colorscheme, Primary)
  );
  // To set the text background contrast and aligning everything //
  #textfield {
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
      max-width: 500px;
      padding: 10px;
      text-align: left;
    }
  }
  // container for entire grid network seperate from body tag //
  #gridBoxNet {
    padding-top: 50px;
    margin: 0 auto;
    // top row of logoes //
    #logoAnimation {
      display: flex;
      justify-content: center;
      align-items: center;
      // logo placement //
      .intro {
        height: 100px;
        width: 800px;
        .absolute {
          border: solid 2px map-get($colorscheme, Tertiary);
          max-height: 50%;
          max-width: 50%;
          left: 50%;
          margin: auto -100px;
        }
      }
    }
    // Container for paragraphs //
    #pBox {
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      // To make the three words glow and spacing//
      #glowtext {
        margin-left: 4px;
        animation: tcpulse 3s infinite alternate-reverse;
      }
      // spacing //
      .glowtext1 {
        margin-right: 4px;
      }
    }
    // Gridbox containing each segment //
    .gridbox {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: 300px;
      gap: 5rem;
      padding: 5rem;
      // intro text properties //
      #introText {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: appear 0.5s ease-in;
      }
      // video cv properties //
      #videoCV {
        animation: appear 0.8s ease-in;
        iframe {
          min-height: 250px;
          border: solid map-get($colorscheme, Tertiary);
        }
      }
      // written cv properties //
      #CV {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        grid-row: span 3;
        animation: appear 1.1s ease-in;
        img {
          max-height: 100%;
          max-width: 100%;
          border: solid map-get($colorscheme, Primary);
        }
      }
      // written cv text box //
      #cvText {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: appear 1.4s ease-in;
      }
      // business card text box //
      #bsCardText {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: appear 1.7s ease-in;
      }
      // business card box //
      #businessCard {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: appear 2s ease-in;
        img {
          border: solid map-get($colorscheme, Tertiary);
        }
      }
    }
  }
}

// When Screen is less than 800px wide //
@media only screen and (max-width: 800px) {
  #gridbox {
    gap: 1rem !important;
    #introText,
    #videoCV,
    #CV,
    #cvText,
    #bsCardText,
    #businessCard {
      grid-row: span 1;
      grid-column: span 2;
    }
    #videoCV {
      margin-bottom: -100px;
    }
    .animationBox {
      width: 50%;
      margin: 0 auto;
    }
  }
  #CV {
    align-items: flex-end !important;
    img {
      height: 80% !important;
      width: 80% !important;
    }
  }
}
// When Screen is less than 825px wide //
@media only screen and (max-width: 850px) {
  #bsCardText {
    h1 {
      margin-top: 150px;
    }
  }
}
// When Screen is less than 925px wide //
@media only screen and (max-width: 925px) {
  #bsCardText {
    transform: translate(0%, 25%) !important;
    h2 {
      transform: translate(-135%, -150%) !important;
    }
  }
  #cvText {
    transform: translate(0%, 60%) !important;
  }
}
// When Screen is less than 1850px wide //
@media only screen and (max-width: 1850px) {
  #cvText {
    margin-top: 200px !important;
  }
  #gridBoxNet {
    max-width: 1200px !important;
    margin: 0 auto;
  }
  #businessCard {
    max-width: 80%;
    margin: 0 auto;
  }
}
// When Screen is more than 800px wide //
@media only screen and (min-width: 800px) {
  #businessCard {
    grid-column: span 2;
    align-items: flex-end !important;
  }
  #CV {
    grid-row: span 2 !important;
    align-items: flex-start !important;
  }
  #cvText {
    margin-top: 60px;
  }
}
// When Screen is more than 1000px wide //
@media only screen and (min-width: 1000px) {
  #businessCard {
    grid-row: span 1 !important;
    align-items: center !important;
  }
}
// When Screen is more than 1850px wide //
@media only screen and (min-width: 1850px) {
  #introText {
    grid-column: span 2;
  }
  #videoCV {
    grid-row: span 2 !important;
    grid-column: span 2;
    iframe {
      min-height: 530px !important;
    }
  }
  .gridbox {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)) !important;
    grid-auto-rows: 350px !important;
  }
}
</style>