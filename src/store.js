import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    cart: [],
    totalPrice: 0,
    clientToken: null,
    braintreeError: null,

    getTotalPrice() {
        this.totalPrice = 0;
        let cart = JSON.parse(localStorage.getItem('cart')) || []; // Otteniamo il carrello dal localStorage
        
        // Iteriamo attraverso ogni elemento nel carrello
        cart.forEach(element => {
            // Calcoliamo il prezzo del singolo prodotto moltiplicando il prezzo per la quantità
            let productPrice = element.price * element.quantity;
            // Aggiungiamo il prezzo del singolo prodotto al totale
            this.totalPrice += productPrice;
        });

        // Restituiamo il totale, assicurandoci di formattarlo correttamente
        this.totalPrice = this.totalPrice.toFixed(2).replace('.', ',');
    },
})