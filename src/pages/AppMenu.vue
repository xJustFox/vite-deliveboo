<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMenu',
    data() {
        return {
            store,
            dishes: [],
            restaurants: []
        }
    },
    created() {
        this.getMenu();
        this.getRestaurants()
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
        getRestaurants() {
            axios.get(`${this.store.baseUrl}/api/restaurants/${this.$route.params.slug}`).then(response => {
                this.restaurants = response.data.results;
            })
        },
        // Incrementa la quantità del piatto
        incrementQuantity(dish) {
            dish.quantityToAdd++;
        },
        // Decrementa la quantità del piatto
        decrementQuantity(dish) {
            if (dish.quantityToAdd > 1) {
                dish.quantityToAdd--;
            }
        },
        // Funzionamento Cart
        addToCart(product) {
            if (!product) {
                this.showErrorModal('Seleziona un prodotto.');
                return;
            }

            // Controlla se la quantità è valida
            if (product.quantityToAdd <= 0) {
                this.showErrorModal('Inserisci una quantità valida.');
                return;
            }

            // Controlla se il carrello è vuoto o se il ristorante del prodotto corrisponde al ristorante degli altri elementi nel carrello
            if (this.store.cart.length === 0 || this.store.cart[0].restaurant.slug === product.restaurant.slug) {
                let found = false;

                // Controlla se il prodotto è già presente nel carrello
                this.store.cart.forEach((item) => {
                    if (item.name === product.name) {
                        item.quantity += parseInt(product.quantityToAdd); // Aggiunge la quantità selezionata
                        found = true;
                    }
                });

                // Se il prodotto non è già nel carrello, lo aggiunge con una quantità di 1
                if (!found) {
                    this.store.cart.push({ ...product, quantity: parseInt(product.quantityToAdd) });
                }

                this.saveCart(); // Salva il carrello dopo l'aggiunta del prodotto
            } else {
                const orderRestaurant = ;
                this.showErrorModal('Non puoi aggiungere prodotti da ristoranti diversi allo stesso carrello. Clicca il pulsante per tornare al ristorante precedente e proseguire con l\'ordine.');

                const btn = document.getElementById('buttonModal');
                btn.addEventListener('click', function () {
                    // Reindirizza alla pagina del ristorante
                    window.location.href = orderRestaurant;
                })
            }

            this.store.getTotalPrice();
        },
        // Funzione per mostrare il modale di errore
        showErrorModal(message) {
            // Seleziona l'elemento con l'id errorMessage e imposta il testo del messaggio di errore
            const errorMessageElement = document.getElementById('errorMessage');
            if (errorMessageElement) {
                errorMessageElement.textContent = message;
            }

            // Seleziona l'elemento con l'id errorModal e mostra il modale di errore
            const errorModalElement = document.getElementById('errorModal');

            if (errorModalElement) {
                errorModalElement.style.display = 'block';
            }

        },
        closeErrorModal() {
            const errorModalElement = document.getElementById('errorModal')
            errorModalElement.style.display = 'none';
        },
        // Funzione per salvare il carrello nel localStorage
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
        },
        getImage(img) {
            let image;

            if (img != null && img.includes('https') == false || img.includes('http') == false) {
                image = `${this.store.baseUrl}/storage/${img}`;
            }
            else if (img.includes('https')) {
                image = img;
            }
            else {
                image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
            }

            return image;
        }
    },

}
</script>

<template lang="">
    <div class="container-fluid">
        <div class="row">
            <div v-for="restaurant in restaurants" :key="restaurant.id" class="col-12">
                <div class="d-flex justify-content-center" v-if="restaurant.main_image != null">
                    <div class="jumbotron jumbotron-fluid" :style="{ backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${restaurant.main_image})`}">
                        <div class="container">
                            <div class="display-4 super-ocean">
                                {{ restaurant.name }}
                            </div>
                            <p class="lead super-ocean">
                                {{ restaurant.address }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-lg mb-2">
        <div class="row">
            <div class="col-12">
                <h2 class="super-ocean">Menù</h2>
            </div>

            <div  class="col-12 col-md-6 col-lg-4 my-2" v-for="dish in dishes" :key="dish.id">
                <div class="card h-100">
                    <div>
                        <div v-if="dish.image != null" class="text-center">
                            <img class="img-fluid" :src="getImage(dish.image)" alt="">
                        </div>
                        <div class="card__title mt-5">
                            <h2>{{dish.name}}</h2>
                        </div>
                        <div class="card__subtitle mt-3">{{dish.description}}</div>
                    </div>
                    <div class="card__wrapper">
                        <div class="card__price text-center">{{dish.price}}€</div>
                        <div class="d-flex justify-content-between align-items-center mt-3">

                            <!-- INPUT NUMBER SPAN -->
                            <div class="wrapper">
                                <span class="minus" @click="decrementQuantity(dish)">-</span>
                                <span class="num">{{ dish.quantityToAdd }}</span>
                                <span class="plus" @click="incrementQuantity(dish)">+</span>
                            </div>

                            
                            <button class="add_btn btn" @click="addToCart(dish)">Aggiungi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ERROR MODAL -->
    <div class="modal" id="errorModal" style="display: none;" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fs-3 super-ocean">Attenzione</h5>
              <button type="button" class="btn-close" @click="closeErrorModal()"></button>
            </div>
            <div class="modal-body">
                <p id="errorMessage"></p>
                <button id="buttonModal" class="btn btn-modal mb-2">Torna al ristorante</button>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    background-size: cover;
    color: white;
    width: 100%;
    height: 350px;
    margin-top: 2.5rem;
    background-position: center;
    color: #DA643F;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
}

.card {
    --main-color: #fff;
    --bg-color: rgba(255, 255, 255, 0.05);
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
        max-height: 95px;
        overflow: hidden;
        overflow-y: auto;
        padding-right: 5px;
    }

    .card__price {
        font-weight: 600;
        font-size: 22px;
        color: var(--main-color);
    }

    .add_btn {
        background-color: $my_orange;
        color: #fff;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            color: #DA643F;
            background-color: #fff;
        }
    }
}

.wrapper {
    height: 50px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background-color: #434343;
    color: white;
}

.wrapper span {
    width: 100%;
    text-align: center;
    cursor: pointer;
    user-select: none;
}

.wrapper span.num {
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    pointer-events: none;
}

#errorModal {
    .modal-content {
        backdrop-filter: blur(25px);
        background-color: rgba(255, 255, 255, 0.05);
        color: white;

        .super-ocean {
            font-size: 25px;
            color: #DA643F;
        }

        .modal-header {
            border: 0;
        }

        .modal-body {
            padding: 5px 16px;
        }

        .btn-modal {
            background-color: #DA643F;
            color: #fff;
            float: right;
        }
    }
}
</style>