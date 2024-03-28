<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMenu',
    data() {
        return {
            store,
            dishes: [],
            cart: [],
        }
    },
    created() {
        this.getMenu();
    },
    mounted() {
        this.loadCart();
    },
    methods: {
        getMenu() {
            axios.get(`${this.store.baseUrl}/api/menu/${this.$route.params.slug}`).then(response => {
                this.dishes = response.data.results;

                // aggiungo il campo della quantità da aggiungere settato su 1
                this.dishes.forEach(element => {
                    element.quantityToAdd = 1
                });
            })
        },
        getImage() {
            let image;
            if (this.dishes.image != null) {
                image = `${this.store.baseUrl}/storage/${this.dishes.image}`;
            }
            else {
                image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
            }

            return image;
        },
        // Funzionamento Cart
        addToCart(product) {
            if (!product) {
                alert('Seleziona un prodotto.');
                return;
            }

            // Controlla se la quantità è valida
            if (product.quantityToAdd <= 0) {
                alert('Inserisci una quantità valida.');
                return;
            }

            // Controlla se il carrello è vuoto o se il ristorante del prodotto corrisponde al ristorante degli altri elementi nel carrello
            if (this.cart.length === 0 || this.cart[0].restaurant.slug === product.restaurant.slug) {
                let found = false;

                // Controlla se il prodotto è già presente nel carrello
                this.cart.forEach((item) => {
                    if (item.name === product.name) {
                        item.quantity += parseInt(product.quantityToAdd); // Aggiunge la quantità selezionata
                        found = true;
                    }
                });

                // Se il prodotto non è già nel carrello, lo aggiunge con una quantità di 1
                if (!found) {
                    this.cart.push({ ...product, quantity: parseInt(product.quantityToAdd) });
                }

                this.saveCart(); // Salva il carrello dopo l'aggiunta del prodotto
            } else {
                alert('Non puoi aggiungere prodotti da ristoranti diversi allo stesso carrello.');
            }
        },
        // Funzione per rimuovere un elemento dal carrello
        removeFromCart(index) {
            this.cart.splice(index, 1); // Rimuove l'elemento dal carrello utilizzando l'indice
            this.saveCart(); // Salva il carrello dopo la rimozione dell'elemento
        },
        // Funzione per aggiornare la quantità dell'elemento direttamente nel carrello
        updateCart(index) {
            // Assicura che la quantità non sia inferiore a 1
            if (this.cart[index].quantity < 1) {
                this.cart[index].quantity = 1;
            }
            this.saveCart();
        },
        // Funzione per salvare il carrello nel localStorage
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        // Funzione per caricare il carrello dal localStorage
        loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            this.cart = cart;
        },
    },

}
</script>

<template lang="">
    <div class="container-lg mb-2">
        <div class="row">
            <div class="col-12">
                <h2 class="super-ocean">Carrello</h2>
                <div id="cart">
                    <ul id="cart-items">
                      <li v-for="(item, index) in cart" :key="index">
                        {{ item.name }} - Quantità: {{ item.quantity }} - Prezzo totale: {{ (item.price * item.quantity).toFixed(2).replace('.', ',') }} €
                        <!-- Input numerico per modificare la quantità -->
                        <input type="number" v-model="item.quantity" @change="updateCart(index)" min="1">
                        <button @click="removeFromCart(index)">Rimuovi</button>
                      </li>
                    </ul>
                  </div>
            </div>

            <div class="col-12">
                <h2 class="super-ocean">Menù</h2>
            </div>

            <div class="col-12 col-md-4 col-lg-3 my-2" v-for="dish in dishes" :key="dish.id">
                <div class="card h-100">
                    <div>
                        <div v-if="dish.image != null" class="text-center">
                            <img :src="dish.image" alt="">
                        </div>
                        <div class="card__title mt-5">
                            <h2>{{dish.name}}</h2>
                        </div>
                        <div class="card__subtitle mt-3">{{dish.description}}</div>
                    </div>
                    <div class="card__wrapper">
                        <div class="card__price text-center">{{dish.price}}€</div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="card__counter">
                                <!-- <button class="card__btn">-</button>
                                <div class="card__counter-score">0</div>
                                <button class="card__btn card__btn-plus">+</button> -->
                                <input type="number" v-model="dish.quantityToAdd" min="1">
                            </div>
                            <button class="add_btn btn" @click="addToCart(dish)">Aggiungi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    --main-color: #fff;
    --bg-color: rgba(255, 255, 255, 0.05);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px;
    background: var(--bg-color);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    img {
        height: 150px;
    }

    .card__title {
        font-weight: 600;
        color: var(--main-color);
    }

    .card__subtitle {
        font-weight: 400;
        font-size: 15px;
        color: var(--main-color);
        letter-spacing: 0.5px;
    }

    .card__price {
        font-weight: 600;
        font-size: 22px;
        color: var(--main-color);
    }


    .card__counter {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        padding: 5px;
        background: #666;
        border-radius: 50px;
    }

    .card__counter-score,
    .card__btn {
        font-weight: 600;
        font-size: 22px;
        color: var(--main-color);
    }

    .card__btn {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: none;
        background: transparent;
    }

    .card__btn-plus {
        background: var(--bg-color);
    }

    .add_btn {
        background-color: $my_orange;
        color: #fff;
        border-radius: 50px;
    }
}
</style>