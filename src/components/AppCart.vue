<script>
import { store } from '@/store';
export default {
    name: 'AppCart',
    data() {
        return {
            store,
        }
    },
    mounted() {
        this.store.getTotalPrice()
        this.loadCart();
    },
    methods: {
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
        // Funzione per rimuovere un elemento dal carrello
        removeFromCart(index) {
            this.store.cart.splice(index, 1); // Rimuove l'elemento dal carrello utilizzando l'indice
            this.saveCart(); // Salva il carrello dopo la rimozione dell'elemento
            this.store.getTotalPrice();
        },
        // Funzione per aggiornare la quantità dell'elemento direttamente nel carrello
        updateCart(index) {
            // Assicura che la quantità non sia inferiore a 1
            if (this.store.cart[index].quantity < 1) {
                this.store.cart[index].quantity = 1;
            }
            this.saveCart();
            this.store.getTotalPrice();
        },
        // Funzione per salvare il carrello nel localStorage
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
        },
        getPriceProduct(price, quantity) {
            // Calcoliamo il prezzo del singolo prodotto moltiplicando il prezzo per la quantità
            return (price * quantity).toFixed(2).replace('.', ',');
        },
        // Funzione per caricare il carrello dal localStorage
        loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            this.store.cart = cart;
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
        }
    }
}
</script>

<template lang="">
    <div class="dropdown-center">
        <div class="shopping-cart" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-cart-shopping fs-xl"></i>
            <i v-show="this.store.cart.length > 0" class="fa-solid fa-circle"></i>
        </div>
        <div class="dropdown-menu">
            <div class="d-flex flex-column justify-content-center p-2  w-100" id="cart">
                <ul class=" list-unstyled" id="cart-items">
                  <li class="text-white d-flex flex-column" v-for="(item, index) in this.store.cart" :key="index">
                    <div class="row w-100">
                        <div class="col-4 p-0">
                            <img class="w-100" :src="getImage(item.image)" alt="">
                        </div>
                        <div class="col-8 p-0 position-relative">
                            <div>{{ item.name }}</div>
                            <div>Prezzo: {{ getPriceProduct(item.price, item.quantity)}} €</div>
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
                <div class="text-white text-end px-3">Totale: {{this.store.totalPrice}}€</div>
                <router-link class="check-out"  :to="this.store.cart.length > 0 ? '/credentials' : '#' ">Check out</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.shopping-cart {
    text-decoration: none;
    color: white;
    padding: 5px;

    
    .fa-circle{
        &::before{
            position: absolute;
            top: 0;
            right: 0px;
            color: #ff5907;
            font-size: 8px;
            border: 0.2px solid black;
            border-radius: 100%;
        }
    }
    
    .fa-cart-shopping {
        font-size: 25px
    }
}

.dropdown-menu {
    transform: translate(-255px, 40px) !important;
    background-color: #212121;
    width: 350px;

    @media screen and (min-width: 768px) {
        transform: translate(-350px, 40px) !important;
        width: 390px;
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

    a.check-out.disabled {
        text-decoration: none;
    }

    .check-out {
        background-color: #DA643F;
        color: #fff;
        text-align: center;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 20px;
        padding: 5px 0;
        margin-top: 10px;

        &:hover {
            background-color: #fff;
            color: #DA643F;
            cursor: pointer;
        }

    }
    
    a.check-out {
        text-decoration: none;
    }
}
</style>