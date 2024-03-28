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
    }
}
</script>

<template lang="">
    <div class="dropdown-center">
        <div class="shopping-cart" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-cart-shopping fs-xl"></i>
        </div>
        <div class="dropdown-menu">
            <div class="d-flex flex-column justify-content-center p-2" id="cart">
                <ul class=" list-unstyled" id="cart-items">
                  <li class="text-white d-flex flex-column" v-for="(item, index) in this.store.cart" :key="index">
                    <div>{{ item.name }}</div>
                    <div>Prezzo: {{ getPriceProduct(item.price, item.quantity)}} €</div>
                    <!-- Input numerico per modificare la quantità -->
                    <div>
                        <input class="w-25" type="number" v-model="item.quantity" @change="updateCart(index), getTotalPrice()" min="1">
                        <button @click="removeFromCart(index)">Rimuovi</button>
                    </div>
                    <hr>
                  </li>
                </ul>
                <div class="text-white">Totale: {{this.store.totalPrice}}€</div>
                <button>Check out</button>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.shopping-cart {
    text-decoration: none;
    color: white;

    i {
        font-size: 25px
    }
}

.dropdown-menu {
    transform: translate(-140px, 33px) !important;
    background-color: #212121;
    width: 200px;
}
</style>