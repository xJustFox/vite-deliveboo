<script>
export default {
  name: 'AppCredentials',
  data() {
    return {
      currentImageIndex: 0,
      images: [
        { src: "../../public/img/young-man.png", alt: "" },
        { src: "../../public/img/deliver.png", alt: "" }
      ],
      texts: [
        "Ordina in modo facile e veloce",
        "Consegna veloce, soddisfazione garantita",
      ],
      bullets: Array(2).fill(0),
      intervalId: null
    };
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    moveSlider(index) {
      this.stopRotation();
      this.currentImageIndex = index;
    },
    startRotation() {
      this.intervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 4000);
    },
    stopRotation() {
      clearInterval(this.intervalId);
    }
  }
}
</script>
<template lang="">
    <div class="position">
    <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">

            <!-- LOGIN -->
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="../../public/img/Logo.png" alt="DeliveBoo" />
                <h4 class="super-ocean pt-3 ps-2"><span class="text-orange">Delive</span><span class="text-gold">Boo</span></h4>
              </div>

                <div class="text-white fs-5 fw-bold pt-3 pt-lg-0">
                    Inserisci le tue credenziali
                </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    name="name"
                    placeholder="Nome"
                    autocomplete="off"
                    required
                  />
                  <label for="name"></label>

                </div>

                <div class="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    name="email"
                    placeholder="Email"
                    autocomplete="off"
                    required
                  />
                  <label for="email"></label>
                </div>
                <div class="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    name="address"
                    placeholder="Indirizzo di spedizione"
                    autocomplete="off"
                    required
                  />
                  <label for="address"></label>
                </div>
                <div class="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    name="phone"
                    placeholder="Telefono"
                    autocomplete="off"
                    required
                  />
                  <label for="phone"></label>
                </div>

                <!-- <input type="submit" value="Prosegui al pagamento" class="sign-btn" /> -->
                <router-link class="" :to="{ name: 'confirmed_payment'}">
                  Prosegui al pagamento</router-link>
              </div>
            </form>
          </div>

          <!-- CAROSELLO -->
          <div class="carousel">
        <div class="images-wrapper">
          <img v-for="(image, index) in images" :src="image.src" :class="{ 'image': true, ['img-' + (index + 1)]: true, 'show': index === currentImageIndex }" :alt="image.alt" />
        </div>

        <div class="text-slider">
          <div class="text-wrap">
            <div class="text-group" :style="{ transform: 'translateY(' + (-currentImageIndex * 2.2) + 'rem)' }">
              <h2 v-for="(text, index) in texts" :key="index">{{ text }}</h2>
            </div>
          </div>

          <div class="bullets">
            <span v-for="(bullet, index) in bullets" :key="index" :class="{ 'active': index === currentImageIndex }" @click="moveSlider(index)" :data-value="index + 1"></span>
          </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.position {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: relative;
  width: 100%;
  max-width: 1020px;
  height: 640px;
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 3.3rem;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
}

.inner-box {
  position: absolute;
  width: calc(100% - 4.1rem);
  height: calc(100% - 4.1rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.forms-wrap {
  position: absolute;
  height: 100%;
  width: 45%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transition: 0.8s ease-in-out;
}

form {
  max-width: 260px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;
}

form.sign-up-form {
  opacity: 0;
  pointer-events: none;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  margin-right: 0.3rem;
}

.logo h4 {
  font-size: 1.1rem;
  margin-top: -9px;
  letter-spacing: -0.5px;
  color: #151111;
}

.heading h2 {
  font-size: 2.1rem;
  font-weight: 600;
  color: #151111;
}

.heading h6 {
  color: #bababa;
  font-weight: 400;
  font-size: 0.75rem;
  display: inline;
}

.input-wrap {
  position: relative;
  height: 37px;
  margin-bottom: 2rem;
}

.input-field {
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  padding: 0;
  font-size: 0.95rem;
  color: #fff;
  transition: 0.4s;
}

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #bbb;
  pointer-events: none;
  transition: 0.4s;
}

.input-field.active {
  border-bottom-color: #DA643F;
}

.input-field.active+label {
  font-size: 0.75rem;
  top: -2px;
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: 43px;
  background-color: #DA643F;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 0.8rem;
  margin-bottom: 2rem;
  transition: 0.3s;
}

.sign-btn:hover {
  background-color: #fff;
  color: #DA643F;
}

.text {
  color: #bbb;
  font-size: 0.7rem;
}

.text a {
  color: #bbb;
  transition: 0.3s;
}

.text a:hover {
  color: #8371fd;
}

main.sign-up-mode form.sign-in-form {
  opacity: 0;
  pointer-events: none;
}

main.sign-up-mode {
  opacity: 1;
  pointer-events: all;
}

main.sign-up-mode .forms-wrap {
  left: 55%;
}

main.sign-up-mode .carousel {
  left: 0%;
}

.carousel {
  position: absolute;
  height: 100%;
  width: 55%;
  left: 45%;
  top: 0;
  background-color: #353a3e;
  border-radius: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  transition: 0.8s ease-in-out;
}

.images-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.image {
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  opacity: 0;
  transition: opacity 0.3s, transform 0.5s;
}

.img-1 {
  transform: translate(0, -50px);
}

.img-2 {
  transform: scale(0.4, 0.5);
}

.img-3 {
  transform: scale(0.3) rotate(-20deg);
}

.image.show {
  opacity: 1;
  transform: none;
}

.text-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text-wrap {
  max-height: 2.2rem;
  overflow: hidden;
  margin-bottom: 2.5rem;
}

.text-group {
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translateY(0);
  transition: 0.5s;
}

.text-group h2 {
  line-height: 2.2rem;
  font-weight: 600;
  font-size: 1.6rem;
}

.bullets {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bullets span {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #aaa;
  margin: 0 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.bullets span.active {
  width: 1.1rem;
  background-color: #fff;
  border-radius: 1rem;
}

@media (max-width: 850px) {
  .box {
    height: auto;
    max-width: 550px;
    overflow: hidden;
  }

  .inner-box {
    position: static;
    transform: none;
    width: revert;
    height: revert;
    padding: 2rem;
  }

  .forms-wrap {
    position: revert;
    width: 100%;
    height: auto;
  }

  form {
    max-width: revert;
    padding: 1.5rem 2.5rem 2rem;
    transition: transform 0.8s ease-in-out, opacity 0.45s linear;
  }

  .heading {
    margin: 2rem 0;
  }

  form.sign-up-form {
    transform: translateX(100%);
  }

  main.sign-up-mode form.sign-in-form {
    transform: translateX(-100%);
  }

  main.sign-up-mode form.sign-up-form {
    transform: translateX(0%);
  }

  .carousel {
    position: revert;
    height: auto;
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
  }

  .images-wrapper {
    display: none;
  }

  .text-slider {
    width: 100%;
  }
}

@media (max-width: 530px) {
  main {
    padding: 1rem;
  }

  .box {
    border-radius: 2rem;
  }

  .inner-box {
    padding: 1rem;
  }

  .carousel {
    padding: 1.5rem 1rem;
    border-radius: 1.6rem;
  }

  .text-wrap {
    margin-bottom: 1rem;
  }

  .text-group h2 {
    font-size: 1.2rem;
  }

  form {
    padding: 1rem 2rem 1.5rem;
  }
}
</style>