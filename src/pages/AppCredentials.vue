<script>
import { store } from '../store.js';
export default {
  name: 'AppCredentials',
  data() {
    return {
      store,
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
      intervalId: null,

      // dati della form
      formData: {
        name: '',
        email: '',
        delivery_address: '',
        phone_num: ''
      },
      errors: {}
    };
  },
  mounted() {
    this.loadCart();
    this.store.getTotalPrice()
  },
  methods: {
    // Validazione del Form
    validateForm() {
      this.errors = {};

      // Name
      if (!this.formData.name) {
        this.errors.name = 'Il campo nome è obbligatorio.';
      } else if (this.formData.name.length > 100) {
        this.errors.name = 'Il campo nome non può superare i 100 caratteri.';
      }

      // Email
      if (!this.formData.email) {
        this.errors.email = 'Il campo email è obbligatorio.';
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.errors.email = 'Inserisci un indirizzo email valido.';
      }

      // Address
      if (!this.formData.delivery_address) {
        this.errors.delivery_address = 'Il campo indirizzo di spedizione è obbligatorio.';
      } else if (this.formData.delivery_address.length > 150) {
        this.errors.delivery_address = 'Il campo indirizzo di spedizione non può superare i 150 caratteri.';
      }

      // Phone Num
      if (!this.formData.phone_num) {
        this.errors.phone_num = 'Il campo numero di telefono è obbligatorio.';
      } else if (this.formData.phone_num.length < 8 || this.formData.phone_num.length > 30) {
        this.errors.phone_num = 'Il numero di telefono deve essere lungo tra 8 e 30 caratteri.';
      }

      if (Object.keys(this.errors).length === 0) {
        // Reindirizza a una pagina utilizzando il router
        this.store.userData = [];
        this.store.userData = this.formData;
        this.saveUserData();
        if(this.store.cart.length > 0) {
          this.$router.push('/payment');
        }
      }
    },
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.store.cart));
    },
    loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            this.store.cart = cart;
    },
    saveUserData(){
      localStorage.setItem("userData", JSON.stringify(this.store.userData))
    },
    getImage(img) {
        let image;

        if (img != null && img.includes('https') == false) {
            image = `${this.store.baseUrl}/storage/${img}`;
        }
        else if (img.includes('https')){
            image = img;
        }
        else {
            image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
        }

        return image;
    },
    // Incrementa la quantità del piatto
    incrementQuantity(dish) {
            dish.quantity++;

            this.saveCart();
            this.store.getTotalPrice();
    },
    // Decrementa la quantità del piatto
    decrementQuantity(dish) {
        if (dish.quantity > 1) {
            dish.quantity--;

            this.saveCart();
            this.store.getTotalPrice();
        }
    },
    removeFromCart(index) {
        this.store.cart.splice(index, 1); // Rimuove l'elemento dal carrello utilizzando l'indice
        this.saveCart(); // Salva il carrello dopo la rimozione dell'elemento
        this.store.getTotalPrice();
    },
    updateCart(index) {
      // Assicura che la quantità non sia inferiore a 1
      if (this.store.cart[index].quantity < 1) {
          this.store.cart[index].quantity = 1;
      }
      this.saveCart();
      this.store.getTotalPrice();
    },
    getPriceProduct(price, quantity) {
      // Calcoliamo il prezzo del singolo prodotto moltiplicando il prezzo per la quantità
      return (price * quantity).toFixed(2).replace('.', ',');
    },
  }
}
</script>
<template lang="">
    <div class="position">
      <div class="box">
          <div class="inner-box">
            <div class="forms-wrap">

              <!-- INSERIMENTO CREDENZIALI -->
              <form action="index.html" autocomplete="off" class="sign-in-form">

                <div class="logo">
                  <img src="../../public/img/Logo.png" alt="DeliveBoo" />
                  <h4 class="super-ocean pt-3 ps-2"><span class="text-orange">Delive</span><span class="text-gold">Boo</span></h4>
                </div>

                <div class="text-white fs-5 fw-bold pt-3 pt-lg-0">
                    Inserisci le tue credenziali
                </div>

                <div class="actual-form">
                  <!-- Campo nome -->
                  <div class="input-wrap">
                    <input type="text" v-model="formData.name" class="input-field" name="name" placeholder="Nome" autocomplete="off" required/>
                    <label for="name"></label>
                  </div>
                  <div v-if="errors.name" class="error">{{ errors.name }}</div>

                  <!-- Campo email -->
                  <div class="input-wrap">
                    <input type="email" v-model="formData.email" class="input-field" name="email" placeholder="Email" autocomplete="off" required/>
                    <label for="email"></label>
                  </div>
                  <div v-if="errors.email" class="error">{{ errors.email }}</div>

                  <!-- Campo indirizzo di spedizione -->
                  <div class="input-wrap">
                    <input type="text" v-model="formData.delivery_address" class="input-field" name="delivery_address" placeholder="Indirizzo di spedizione" autocomplete="off" required/>
                    <label for="delivery_address"></label>
                  </div>
                  <div v-if="errors.delivery_address" class="error">{{ errors.delivery_address }}</div>

                  <!-- Campo numero di telefono -->
                  <div class="input-wrap">
                    <input type="text" v-model="formData.phone_num" class="input-field" name="phone_num" placeholder="Telefono" autocomplete="off" required />
                    <label for="phone_num"></label>
                  </div>
                  <div v-if="errors.phone_num" class="error">{{ errors.phone_num }}</div>

                  <!-- Utilizziare @click="validateForm()" per richiamare la funzione di validazione prima dell'invio dei dati -->
                  <button type="button" :class="this.store.cart.length <= 0 ? 'disabled' : 'btn'" class="btn sign-btn text-center text-decoration-none" @click="validateForm()">Prosegui al pagamento</button>
              </div>
            </form>
          </div>

          <!-- RIEPILOGO ORDINE -->
          <div class="order">
            <div class="overflow m-3 px-2">
              <ul class=" list-unstyled" id="cart-items">
                    <li class="text-white d-flex flex-column pt-3" v-for="(item, index) in this.store.cart" :key="index">
                      <div class="row w-100">
                          <div class="col-4 p-0">
                              <img class="w-100 rounded-4 pe-2" :src="getImage(item.image)" alt="">
                          </div>
                          <div class="col-8 p-0 position-relative">
                              <div>{{ item.name }}</div>
                              <div>{{ getPriceProduct(item.price, item.quantity)}} €</div>
                              <!-- INPUT NUMBER SPAN -->
                              <div class="counter">
                                  <span class="min" @click="decrementQuantity(item)"><i class="fa-solid fa-minus"></i></span>
                                  <span class="num">{{ item.quantity }}</span>
                                  <span class="plus" @click="incrementQuantity(item)"><i class="fa-solid fa-plus"></i></span>
                              </div>

                              <div class="trash" @click="removeFromCart(index)"><i class="fa-solid fa-trash"></i></div>
                          </div>
                      </div>
                      <hr>
                    </li>
                </ul>
            </div>
              <div class="d-flex align-items-end justify-content-center">
                <div class="text-white fs-5 fw-bold px-3 pt-4">Totale: {{this.store.totalPrice}}€</div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 0.8rem;
  padding: 5px 0;
}

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
  margin-bottom: 15px;
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
  padding: 10px;
  background-color: #DA643F;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  margin-top: 1rem;
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

main.sign-up-mode .order {
  left: 0%;
}

.order {
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

  .overflow {
    overflow-y: scroll;
    height: 420px;
  }

  .counter{
        max-width: 100px;
        margin-top: 10px;
        display: flex;
        background-color: #DA643F;
        border-radius: 5px;
    
        .min,
        .num,
        .plus{
            width: calc(100% / 3);
            padding: 5px 0px;
            font-size: 15px;
            text-align: center;
            border-radius: 5px;

            i{
                vertical-align: middle;
            }
        }

        .min:hover,
        .plus:hover{
            background-color: #96442c;
            cursor: pointer;
        }
    }
  
    .trash{
        position: absolute;
        bottom: 0;
        right: 0;

        i{
            font-size: larger;
            &:hover{
                color: rgb(169, 2, 2);
                cursor: pointer;
            }
        }

    }
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

  .order {
    position: revert;
    height: auto;
    width: 100%;
    padding: 3rem 2rem;
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

  .order {
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