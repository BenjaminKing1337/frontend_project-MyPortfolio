<template>
<body>
  <!-- gradient beneath header -->
  <div class="gradient"></div>
  <!-- stars background -->
  <div class="stars"></div>
  <!-- twinkle background -->
  <div class="twinkling"></div>
  <!-- intro to creations -->
  <kinesis-container class="containerIntro">
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
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>Welcome to my Creations</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>Look on my works, ye Mighty, and despair!</p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container id="doubleButtons">
        <kinesis-element type="depth" :strength="20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('.container1')">
            <h3>
              Park
              <br />Photography
            </h3>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="-20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('#doubleExposure')">
            <h3>
              Double Exposure
              <br />Portrait
            </h3>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('#highPink')">
            <h3>
              High Pink
              <br />Commercial
            </h3>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="-20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('#designPoster')">
            <h3>
              Junji Ito
              <br />Poster
            </h3>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('#solarAnimation')">
            <h3>
              Solar
              <br />Animation
            </h3>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="-20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('#selfIllustration')">
            <h3>
              Self
              <br />Illustration
            </h3>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="20" axis="y">
          <div id="dlButton" tag="button" @click="smoothScroll('#lovecraftInfomercial')">
            <h3>
              Lovecraft
              <br />Infomercial
            </h3>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Photography creation -->
  <kinesis-container class="containerPhoto">
    <kinesis-element :strength="100" class="container1">
      <kinesis-container class="kContainer">
        <!-- 5th photo -->
        <kinesis-element
          tag="img"
          :strength="-20"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
          :src="img1"
          class="absolute"
          :maxX="22"
          :minX="-22"
        />
        <!-- 4th photo -->
        <kinesis-element
          tag="img"
          :strength="-10"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
          :src="img2"
          class="absolute"
          :maxX="12"
          :minX="-12"
        />
        <!-- 3rd photo -->
        <kinesis-element
          tag="img"
          :strength="20"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
          :src="img3"
          class="absolute"
          :maxX="22"
          :minX="-22"
        />
        <!-- 2nd photo -->
        <kinesis-element
          tag="img"
          :strength="10"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
          :src="img4"
          class="absolute"
          :maxX="12"
          :minX="-12"
        />
        <!-- center photo -->
        <kinesis-element
          tag="img"
          :strength="5"
          type="depth"
          transformOrigin="0% 50%"
          :src="img5"
          class="absolute"
        />
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Photography</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>
            From a project about Vognsbølparken, Esbjerg. The scope of the assignment had me work with designing a webpage for park goers.
            <br />
            <br />We had to document the site with photographs and this is a small sample of my best shots.
          </p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container>
        <kinesis-element :strength="30">
          <div id="dlButton" tag="button">
            <a href="parkphotos.zip" download="Park Photos.zip">
              <h2>
                Album
                <br />Download
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Double Exposure creation -->
  <kinesis-container class="container">
    <kinesis-element :strength="100">
      <kinesis-container id="creationsBox">
        <kinesis-element :strength="20">
          <kinesis-container id="doubleExposure">
            <div id="doubleExposurePicture">
              <!-- the image -->
              <img src="@/assets/doubleExposure.jpg" alt />
            </div>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Double Exposure Portrait</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>
            A Self portrait created in photoshop. I wanted to reference my inner thoughts with the imagery in the exposure.
            <br />
            <br />Being stuck inside my head can sometimes feel like a lonely astronaut drifting in space or like looking into the vast unknown of the universe and feeling the insignificance of your own being in comparison with everything else.
          </p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container>
        <kinesis-element :strength="30">
          <div id="dlButton" tag="button">
            <a href="doubleExposure.jpg" download="doubleExposure.jpg">
              <h2>
                Image
                <br />Download
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Promo Commercial creation -->
  <kinesis-container class="container">
    <kinesis-element :strength="100">
      <kinesis-container id="creationsBox">
        <kinesis-element :strength="20">
          <kinesis-container id="highPink">
            <div id="highPinkPicture">
              <!-- the video -->
              <iframe
                src="https://youtube.com/embed/w9Rvv1bOnUQ"
                alt="High Pink Commercial"
                min-width="100%"
                min-height="100%"
                controls
                poster="@/assets/promo/highPink.png"
              />
            </div>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Short Promo Commercial</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>
            A group project in which we were to create a product commercial, with me acting as director, writing screenplay, shotlist and actor contract.
            <br />
            <br />The message of the commercial, if not clear enough from the clip, is that the main character is experiences bad luck three times in a row only to flip his luck after drinking the fictive product. You then see him having great luck in the following same three endeavors.
          </p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container id="doubleButtons">
        <kinesis-element type="depth" :strength="20">
          <div id="dlButton" tag="button">
            <a
              href="highPinkDocuments.pdf"
              download="High Pink - Script, Shotlist and Actor Contract.pdf"
            >
              <h2>
                Download
                <br />PDF
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Design Poster creation -->
  <kinesis-container class="containerPoster">
    <kinesis-element :strength="100">
      <kinesis-container id="creationsBox">
        <kinesis-element :strength="20">
          <kinesis-container id="designPoster">
            <div id="designPosterPicture">
              <!-- the images -->
              <img src="@/assets/poster/tomie.png" alt />
              ""
              <img src="@/assets/poster/junjiIto.jpg" alt />
              ""
              <img src="@/assets/poster/tomie1.png" alt />
            </div>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Design Poster</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>A project where we had to pick a graphical designer and recreate a poster about them in their style.</p>
          <p>Born in Japan in 1963, when manga and anime were on the rise after WWII, Junji found his place in the world by drawing. The things he would draw would take on a style of their own. He was inspired by Japanese Horror writer Kazuo Umezu, and by his older sisters’ drawings. He has also admitted taking great inspiration from the likes of H.P. Lovecraft and like him, his worlds are full of dread and existential horror. He is most known for creating cult classic manga, such as “Gyo”, “Uzumaki”, “Enigma of Amigara Fault” and “Tomie”, but has quite recently won the Eisner Award for his manga adaptation of the famous Mary Shelley’s Frankenstein. Junji has also worked in the video game industry, on the cancelled Silent Hills, as well as Death Stranding.</p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container id="doubleButtons">
        <kinesis-element type="depth" :strength="20">
          <div id="dlButton" tag="button">
            <a href="tomie.png" download="Tomie Split.png">
              <h2>
                Download
                <br />Wallpaper2
              </h2>
            </a>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="-20">
          <div id="dlButton" tag="button">
            <a href="junjiIto.jpg" download="Junji Ito Poster.jpg">
              <h2>
                Download
                <br />Poster
              </h2>
            </a>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="20">
          <div id="dlButton" tag="button">
            <a href="tomie1.png" download="Tomie Blood.png">
              <h2>
                Download
                <br />Wallpaper2
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Solar Animation creation -->
  <kinesis-container class="containerSolar">
    <kinesis-element :strength="100">
      <kinesis-container id="creationsBox">
        <kinesis-element :strength="20">
          <kinesis-container id="solarAnimation">
            <div id="solarAnimationPicture">
              <!-- the animation -->
              <div id="solarcontainer">
                <div class="planetPosition">
                  <div class="mercury-orbit"></div>
                  <div class="venus-orbit"></div>
                  <div class="earth-orbit"></div>
                  <div class="mars-orbit"></div>
                  <div class="jupiter-orbit"></div>
                  <div class="saturn-orbit"></div>
                  <div class="uranus-orbit"></div>
                  <div class="neptune-orbit"></div>

                  <div class="Star">
                    <div class="smallPlanet Mercury">
                      <img class="planets" src="@/assets/planets/MERCURY.svg" alt="Planet Mercury" />
                    </div>
                    <div class="smallPlanet Venus">
                      <img class="planets" src="@/assets/planets/VENUS.svg" alt="Planet Venus" />
                    </div>
                    <div class="smallPlanet Earth">
                      <img class="planets" src="@/assets/planets/EARTH.svg" alt="Planet Earth" />
                    </div>
                    <div class="smallPlanet Mars">
                      <img class="planets" src="@/assets/planets/MARS.svg" alt="Planet Mars" />
                    </div>
                    <div class="smallPlanet Jupiter">
                      <img class="planets" src="@/assets/planets/JUPITER.svg" alt="Planet Jupiter" />
                    </div>
                    <div class="smallPlanet Saturn">
                      <img class="planets" src="@/assets/planets/SATURN.svg" alt="Planet Saturn" />
                    </div>
                    <div class="smallPlanet Uranus">
                      <img class="planets" src="@/assets/planets/URANUS.svg" alt="Planet Uranus" />
                    </div>
                    <div class="smallPlanet Neptune">
                      <img class="planets" src="@/assets/planets/NEPTUNE.svg" alt="Planet Neptune" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Solar System Animation</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>
            Cartoonized animation of our solar system created entirely with html and scss. The relations between spin and rotate matches that of the real life counterparts.
            <br />
            <br />I made this for a project about a space themed website created specifically for the target group of the magazine, Science Illustrated.
            <br />
            <br />I also created the animated SVGs of star constellations you see on the zodiac sign part of the website that can be viewed below.
          </p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container id="doubleButtons">
        <kinesis-element type="depth" :strength="-20">
          <div id="dlButton" tag="button">
            <a href="solarAnimation.zip" download="Solar Animation.zip">
              <h2>
                Download
                <br />Code
              </h2>
            </a>
          </div>
        </kinesis-element>
        <kinesis-element type="depth" :strength="20">
          <div
            id="dlButton"
            class="btn"
            tag="button"
            onclick="window.open('http://solarverse.netlify.app');"
            target="_blank"
          >
            <a>
              <h2>
                View
                <br />Website
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Self Illustration creation -->
  <kinesis-container class="containerSelf">
    <kinesis-element :strength="100">
      <kinesis-container id="creationsBox">
        <kinesis-element :strength="20">
          <kinesis-container id="selfIllustration">
            <div id="selfIllustrationPicture">
              <!-- the image -->
              <img src="@/assets/selfIllustration.png" alt />
            </div>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Self Illustration</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>
            Illustration of myself created with adobe illustrator. It was one of my first experiences with Adobe Illustrator and I spent many attempts and a very long time on this final one.
            <br />
            <br />The reason for the trident is simply that people often think I look like or remind them of Jason Momoa, and therefore often call me Aquaman.
          </p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container>
        <kinesis-element type="depth" :strength="-20">
          <div id="dlButton" tag="button">
            <a href="selfIllustration.png" download="Self Illustration.png">
              <h2>
                Download
                <br />Illustration
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
  <!-- Lovecraft Infomercial creation -->
  <kinesis-container class="container">
    <kinesis-element :strength="100">
      <kinesis-container id="creationsBox">
        <kinesis-element :strength="20">
          <kinesis-container id="lovecraftInfomercial">
            <div id="lovecraftInfomercialPicture">
              <!-- the video -->
              <iframe
                src="https://youtube.com/embed/ooTb8SgoLYA"
                alt
                width="100%"
                height="100%"
                controls
              />
            </div>
          </kinesis-container>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
    <!-- the circles -->
    <kinesis-element :strength="50" axis="y">
      <div class="circle circle1"></div>
    </kinesis-element>
    <kinesis-element :strength="140" axis="y">
      <div class="circle circle2"></div>
    </kinesis-element>
    <kinesis-element :strength="80" axis="y">
      <div class="circle circle3"></div>
    </kinesis-element>
    <kinesis-element :strength="180" axis="y">
      <div class="circle circle4"></div>
    </kinesis-element>
    <kinesis-element :strength="110" axis="y">
      <div class="circle circle5"></div>
    </kinesis-element>
    <!-- the text -->
    <kinesis-element id="myHeading">
      <kinesis-container>
        <kinesis-element>
          <h1>My Lovecraft Infomercial</h1>
        </kinesis-element>
      </kinesis-container>
      <br />
      <kinesis-container>
        <kinesis-element>
          <p>
            Another group project about making an infomercial about an arbitrary subject.
            <br />
            <br />I proposed the theme of H.P. Lovecraft, his unique genre of writing, and his vast influence on society since. I wrote the script, the shotlist and did the voiceover.
          </p>
        </kinesis-element>
      </kinesis-container>
      <br />
      <!-- the button -->
      <kinesis-container id="doubleButtons">
        <kinesis-element type="depth" :strength="20">
          <div id="dlButton" tag="button">
            <a
              href="lovecraftInfomercialDocuments.pdf"
              download="Lovecraft Infomercial - Script and Shotlist.pdf"
            >
              <h2>
                Download
                <br />PDF
              </h2>
            </a>
          </div>
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
</body>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
export default {
  name: "kContainer",
  data() {
    return {
      img1: require("@/assets/photography/park1.jpg"),
      img2: require("@/assets/photography/park2.jpg"),
      img3: require("@/assets/photography/park3.jpg"),
      img4: require("@/assets/photography/park4.jpg"),
      img5: require("@/assets/photography/park5.jpg")
    };
  },
  methods: {
    smoothScroll(el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: 0 },
        ease: "power2"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
// Body property to align text on buttons and position for star bg to work //

body {
  position: relative;
  text-align: center;
  // Space below header to fade together with body //
  .gradient {
    position: absolute;
    height: 100px;
    width: 100%;
    background-image: linear-gradient(
      map-get($colorscheme, Primary),
      map-get($colorscheme, Senary),
      map-get($colorscheme, Senary),
      map-get($colorscheme, Senary)
    );
    z-index: 1;
  }
  // Background properties for twinkling stars //
  .stars,
  .twinkling {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  // the stars //
  .stars {
    background: #000 url(../assets/planets/stars.png) repeat top center;
    z-index: 0;
  }
  // the twinkling //
  .twinkling {
    background: transparent url(../assets/planets/twinkling.png) repeat top
      center;
    animation: move-twink-back 200s linear infinite;
  }
}
// Information field properties for each creation //
#myHeading {
  position: relative;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  animation: appear 0.3s ease-in;
  // Outlining fonts so they are visible when it overlays an image due to kinesis movement //
  h1 {
    font-size: 50px;
    color: map-get($colorscheme, Primary);
    animation: appear 1s ease-in;
    padding: 10px;
    border-radius: 30px;
    background-color: map-get($colorscheme, Quinary);
   
  }
  // Paragraph properties //
  p {
    border-radius: 30px;
    background-color: map-get($colorscheme, Quinary);
    color: map-get($colorscheme, Primary);
    max-width: 400px;
    text-align: left;
    padding: 10px;
    animation: appear 2s ease-in;
    -webkit-text-stroke: 0.3px map-get($colorscheme, Secondary);
  }
  // For row display when there's several downloads //
  #doubleButtons {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    animation: appear 1.5s ease-in;
  }
  // The button for download //
  #dlButton {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 120px;
    font-size: 10px;
    cursor: pointer;
    animation: bgcpulse 3s infinite alternate-reverse;
    clip-path: polygon(50% 0%, 100% 43%, 94% 78%, 6% 78%, 0% 43%);
    a {
      text-decoration: none;
      font-size: 10px;
      color: map-get($colorscheme, Secondary);
    }
    .btn {
      color: map-get($colorscheme, Secondary) !important;
    }
  }
}
// Accented image borders //
img,
iframe {
  border: solid map-get($colorscheme, Primary) 3px;
}
// Container properties for each creation. Plus circles //
.container,
.containerPoster,
.containerPhoto,
.containerSolar {
  position: relative;
  z-index: 1;
  height: 600px;
  padding: 15rem 0;
  margin-bottom: 25vh;
  animation: appear 1s ease-in;
  animation-delay: 2s;
  iframe {
    min-height: 350px;
    min-width: 550px;
  }
  // Kinesis element for photography //
  .container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
  }
  // The circle properties //
  .circle {
    position: absolute;
    border-radius: 100%;
  }
  // The first circle of each creation container //
  .circle.circle1 {
    border: 10px solid map-get($colorscheme, Primary);
    opacity: 0.6;
    width: 4vw;
    height: 4vw;
    left: 10%;
    top: 25%;
    z-index: -1;
  }

  // The second circle of each creation container //
  .circle.circle2 {
    border: 15px solid map-get($colorscheme, Primary);
    opacity: 0.6;
    width: 8vw;
    height: 8vw;
    right: 2%;
    bottom: 17%;
    z-index: -1;
  }
  // The third circle of each creation container //
  .circle.circle3 {
    background-color: map-get($colorscheme, Primary);
    opacity: 0.6;
    width: 5vw;
    height: 5vw;
    left: 20%;
    bottom: 27%;
    z-index: -1;
  }
  // The fourth circle of each creation container //
  .circle.circle4 {
    background-color: map-get($colorscheme, Primary);
    opacity: 0.3;
    width: 3vw;
    height: 3vw;
    top: 80%;
    left: 70%;
    z-index: -1;
  }
  // The fifth circle of each creation container //
  .circle.circle5 {
    border: 15px solid map-get($colorscheme, Primary);
    background-color: map-get($colorscheme, Nonary);
    opacity: 0.3;
    width: 6vw;
    height: 6vw;
    top: 78%;
    left: 36%;
    z-index: -1;
  }
}
// Accounting for smaller container pushed from top with margin //
.containerIntro {
  height: 400px;
  margin-top: 150px;
  h3 {
    color: map-get($colorscheme, Secondary);
  }
  circle {
    stroke: map-get($colorscheme, Tertiary);
    animation: preloader 15s infinite ease-in-out;
  }
}
// Kinesis container for photography //
.kContainer {
  position: relative;
  z-index: 2;
  height: 500px;
  width: 800px;
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
    max-width: 100%;
  }
}
// Accounting for text length in design poster creation //
.containerPoster {
  height: 1200px;
}
// Accounting for foldout kinesis animation //
.containerPhoto {
  height: 600px;
}
.containerSolar {
  height: 1000px;
}

// Each creation after photography has a grid box //
#creationsBox {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: 500px;
  justify-content: center;
  align-content: center;
  z-index: 1;
  // Creation box for double exposure //
  #doubleExposure {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: appear 1s ease-in;

    #doubleExposurePicture {
      height: 100%;
      width: 100%;
      margin-bottom: 40%;
      margin-top: 1%;
      img {
        border: solid map-get($colorscheme, Tertiary) 3px;
        max-width: 100%;
        max-height: 50rem;
      }
    }
  }
  // Creation box for promo commercial //
  #highPink {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: appear 1s ease-in;
  }
  // Creation box for design poster //
  #designPoster {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: appear 1s ease-in;
    #designPosterPicture {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
      margin-bottom: 1%;
      margin-top: 1%;
      img {
        border: solid map-get($colorscheme, Tertiary) 3px;
        max-height: 100%;
        max-width: 95%;
      }
    }
  }
  // Creation box for solar animation //
  #solarAnimation {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: appear 1s ease-in;
    // Border removal from planets //
    .planets {
      border: none;
    }

    // The orbits //
    .planetPosition {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      width: 800px;
      height: 800px;
      justify-content: center;
      align-items: center;
      .neptune-orbit {
        width: 116%;
        height: 116%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .uranus-orbit {
        width: 104%;
        height: 104%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .saturn-orbit {
        width: 83%;
        height: 83%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .jupiter-orbit {
        width: 62%;
        height: 62%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .mars-orbit {
        width: 49%;
        height: 49%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .earth-orbit {
        width: 40%;
        height: 40%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .venus-orbit {
        width: 31%;
        height: 31%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
      .mercury-orbit {
        width: 24%;
        height: 24%;
        border: 2px map-get($colorscheme, Quaternary) solid;
        opacity: 0.3;
        position: absolute;
        border-radius: 50%;
      }
    }
    // The Sun and planets //
    .Star {
      position: absolute;
      width: 20%;
      height: 20%;
      background-image: url(../assets/planets/SOL.svg);
      animation: spin 120s linear infinite;
      img {
        width: 20%;
      }
      .smallPlanet {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .Mercury {
        animation: spin 10s linear 0s infinite;
        .planets {
          top: -28px;
          width: 15%;
          position: absolute;
          animation: spin-reverse 80s linear infinite;
        }
      }
      .Venus {
        animation: spin 20s linear 0s infinite;
        .planets {
          top: -58px;
          width: 19%;
          position: absolute;
          animation: spin 70s linear infinite;
        }
      }
      .Earth {
        animation: spin 33s linear 0s infinite;
        .planets {
          top: -98px;
          width: 23%;
          position: absolute;
          animation: spin-reverse 25s linear infinite;
        }
      }
      .Mars {
        animation: spin 47s linear 0s infinite;
        .planets {
          top: -130px;
          width: 17%;
          position: absolute;
          animation: spin-reverse 25s linear infinite;
        }
      }
      .Jupiter {
        animation: spin 70s linear 0s infinite;
        .planets {
          top: -202px;
          width: 45%;
          position: absolute;
          animation: spin-reverse 10s linear infinite;
        }
      }
      .Saturn {
        animation: spin 150s linear 0s infinite;
        .planets {
          top: -290px;
          width: 50%;
          position: absolute;
          animation: spin-reverse 20s linear infinite;
        }
      }
      .Uranus {
        animation: spin 110s linear 0s infinite;
        .planets {
          top: -360px;
          width: 31%;
          position: absolute;
          animation: spin 60s linear infinite;
        }
      }
      .Neptune {
        animation: spin 340s linear 0s infinite;
        .planets {
          top: -408px;
          width: 27%;
          position: absolute;
          animation: spin-reverse 50s linear infinite;
        }
      }
    }
  }
  // Creation box for self illustration //
  #selfIllustration {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: appear 1s ease-in;
    #selfIllustrationPicture {
      display: flex;
      justify-content: center;
      height: 200%;
      width: 100%;
      margin-bottom: 1%;
      margin-top: 1%;
      img {
        border: none;
        height: 100%;
        width: auto;
      }
    }
  }
   // Creation box for lovecraft infomercial //
  #lovecraftInfomercial {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: appear 1s ease-in;
    #lovecraftInfomercialPicture {
      display: flex;
      justify-content: center;
      height: 200%;
      width: 100%;
      margin-bottom: 1%;
      margin-top: 1%;
      iframe {
        height: 100%;
        width: auto;
      }
    }
  }

}

// When Screen is less than 800px wide //
@media only screen and (max-width: 800px) {
  #doubleExposure,
  #highPink,
  #designPoster {
    max-height: 300px !important;
    max-width: auto;
    margin: 0;
  }
  .containerPhoto {
    max-width: 200px;
    margin: 100px auto;
  }
  .containerIntro {
    height: 600px;
  }
}
// When Screen is less than 1220px wide //
@media only screen and (max-width: 1220px) {
  .containerPhoto {
    max-width: 600px;
    margin: 100px auto;
  }
}
// When Screen is more than 800px wide //
@media only screen and (min-width: 800px) {
  #creationsBox {
    max-width: 800px !important;
    margin: 0 auto;
  }
  .container {
    min-height: 500px;
  }
  iframe {
    min-height: 500px !important;
    min-width: 800px !important;
  }
}
// When Screen is more than 1220px wide //
@media only screen and (min-width: 1220px) {
  iframe {
    min-height: 600px !important;
    min-width: 1100px !important;
  }
}
// When Screen is more than 1500px wide //
@media only screen and (min-width: 1500px) {
  .container {
    min-height: 800px !important;
    margin: 0 auto;
  }
  h1 {
    font-size: 120px !important;
  }
  .containerPhoto, .containerIntro {
  height: 800px !important;
} }
</style>