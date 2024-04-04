<script>
import { store } from '../store';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import axios from 'axios';

export default {
    name: 'AppTypologyCarousel',
    data() {
        return {
            store,
            restaurants: [],
            filteredRestaurants: [],
            flagFiltered: false,
            typologies: [],
            breakpoints: {
                376: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                // 700px and up
                668: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                // 1024 and up
                960: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                1200: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                }
            },
        }
    },
    components: {
        Carousel,
        Slide,
    },
    created() {
        this.getRestaurants();
        this.getTypologies();
    },
    methods: {
        // Recupero le tipologie dei ristoranti e le assegno alla variabile typologies
        getTypologies() {
            axios.get(`${this.store.baseUrl}/api/typologies`).then(response => {
                this.typologies = response.data.results;
                this.typologies = this.typologies.sort((a, b) => a.name.localeCompare(b.name))
            })
        },
        // Recupero tutti i ristornati e gli assegno alla variabile restaurants
        getRestaurants() {
            axios.get(`${this.store.baseUrl}/api/restaurants`).then(response => {
                this.restaurants = response.data.results;
            })
        },
        // Recupero la tipologia che vuole l'utente 
        searchRestaurants() {
            this.flagFiltered = false;
            let selectedTypes = [];

            let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            checkboxes.forEach(function (checkbox) {
                selectedTypes.push(checkbox.value);
            });

            if (selectedTypes.length === 0) {
                this.filteredRestaurants = [];
                return; // Esci dalla funzione se nessuna tipologia è stata selezionata
            }

            this.filteredRestaurants = this.restaurants.filter(function (restaurant) {
                return selectedTypes.every(function (type) {
                    // Verifica se ogni tipologia selezionata è presente nel ristorante
                    return restaurant.typologies.some(function (typology) {
                        return typology.slug === type;
                    });
                });
            });

            this.flagFiltered = true;
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
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
    },
}
</script>

<template lang="">
    <div class="">
        <div class="row">
            <div class="col-12 my-2">
                <div class="d-flex justify-content-end">
                    <div class="btnPrev me-3" @click="prev"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="btnNext" @click="next"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>

            <div class="col-12 col-md-3 col-lg-2">
                <ul class="list-unstyled typology-list d-flex d-md-block m-0">
                    <li v-for="(typology, index) in typologies" :key="index">
                        <label class="container">
                            <input type="checkbox" :value="typology.slug" @click="searchRestaurants()"/>
                            <div class="checkmark">
                              <p class="No name">{{typology.name}}</p>
                              <p class="Yes name">{{typology.name}}</p>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>

            <div class="col-12 col-md-9 col-lg-10 h-320 my-2">
                <Carousel ref="carousel" :breakpoints="breakpoints" >
                    <Slide v-for="restaurant in (flagFiltered == true ? filteredRestaurants : restaurants)" :key="restaurant">
                        <div class="card">
                            <div class="content">
                              <div class="back">
                                <div class="back-content" :style="{ backgroundImage: 'url(' + getImage(restaurant.main_image) + ')' }">
                                    <div class="bg-opacity w-100">
                                        <div class="super-ocean">{{ restaurant.name }}</div>
                                        <div class="badge bg-orange mb-1 me-1" v-for="(item, index) in restaurant.typologies" :key="index">{{item.name}}</div>
                                    </div>
                                    <span class="bg-opacity position-absolute">
                                    </span>
                                </div>
                              </div>
                              <div class="front">
                                
                                <div class="img">
                                  <div class="circle">
                                  </div>
                                  <div class="circle" id="right">
                                  </div>
                                  <div class="circle" id="bottom">
                                  </div>
                                </div>
                                
                                <div class="front-content">
                                    <small class="badge">
                                        <div>{{ restaurant.name }}</div>
                                        <div>{{ restaurant.address }}</div> 
                                    </small>
                                    <div class="description">
                                        <router-link class="btn-menu" :to="{ name: 'menu-restaurant', params: {slug: restaurant.slug} }">Menù</router-link>
                                    </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                    </Slide>
                </Carousel>

                <div v-if="restaurants.length <= 0 && flagFiltered == false || filteredRestaurants.length <= 0 && flagFiltered == true " class="d-flex justify-content-center align-items-center h-100 super-ocean ">
                    <span class="carouselError">Non ci sono ristoranti con questa categoria</span>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.h-320 {
    height: 320px;
}

.bg-orange{
    background-color: #DA643F;
}

.bg-opacity{
    background-color: rgba(0, 0, 0, 0.5);
}

.super-ocean {
    color: #DA643F;
    font-size: 2rem;
    width: 100%;

    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
}

.btn-menu {
    width: 100% !important;
    text-decoration: none;
    color: white;
    display: block;
    background-color: #DA643F;
    border-radius: 5px;
    padding: 5px 0;

    &:hover {
        transform: scale(1.1);
    }
}

.btnNext,
.btnPrev {
    padding: 5px 10px;
    border-radius: 100%;
    background-color: #DA643F;


    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    .fa-chevron-right::before,
    .fa-chevron-left::before {
        font-size: 25px;
        color: white;
        vertical-align: middle;
    }
}

.typology-list {
    max-height: 320px;
    overflow-x: scroll;

    li {
        white-space: nowrap;
        text-align: center;
        margin: 10px;

    }

    @media screen and (min-width: 768px) {
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .container {
        padding: 0;
        font-size: larger;
        --UnChacked-color: #DA643F;
        --chacked-color: #421f14;
        --font-color: white;
        --chacked-font-color: var(--font-color);
        --icon-size: 1.5em;
        --anim-time: 0.2s;
        --anim-scale: 0.1;
        --base-radius: 0.8em;
    }

    .container {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        user-select: none;
        fill: var(--font-color);
        color: var(--font-color);
    }

    /* Hide the default checkbox */
    .container input {
        display: none;
    }

    /* Base custom checkbox */
    .checkmark {
        background: var(--UnChacked-color);
        border-radius: var(--base-radius);
        width: 100%;
        padding: 0px 10px;
        display: flex;
        justify-content: center;
    }

    .name {
        margin: 0 0.25em;
    }

    .Yes {
        width: 0;
    }

    .name.Yes {
        display: none;
    }

    /* action custom checkbox */
    .container:hover .checkmark,
    .container:hover .icon,
    .container:hover .name {
        transform: scale(calc(1 + var(--anim-scale)));
    }

    .container:active .checkmark,
    .container:active .icon,
    .container:active .name {
        transform: scale(calc(1 - var(--anim-scale) / 2));
        border-radius: calc(var(--base-radius) * 2);
    }

    .checkmark::before {
        content: "";
        opacity: 0.5;
        transform: scale(1);
        border-radius: var(--base-radius);
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }

    .checkmark:hover:before {
        background-color: hsla(0, 0%, 50%, 0.2);
    }

    .container input:checked+.checkmark:before {
        animation: boon calc(var(--anim-time)) ease;
        animation-delay: calc(var(--anim-time) / 2);
    }

    /* When the checkbox is checked*/
    .container input:checked+.checkmark {
        --UnChacked-color: var(--chacked-color);
        fill: var(--chacked-font-color);
        color: var(--chacked-font-color);
    }

    .container input:checked~.checkmark .No {
        width: 0;
    }

    .container input:checked~.checkmark .name.No {
        display: none;
    }

    .container input:checked~.checkmark .Yes {
        width: var(--icon-size);
    }

    .container input:checked~.checkmark .name.Yes {
        width: auto;
        display: unset;
    }

    /*Animation*/
    .container,
    .checkmark,
    .checkmark:after,
    .icon,
    .checkmark .name {
        transition: all var(--anim-time);
    }

    /*Unuse*/
    @keyframes icon-rot {
        50% {
            transform: rotateZ(180deg) scale(calc(1 - var(--anim-scale)));
            border-radius: 1em;
        }

        to {
            transform: rotate(360deg);
            border-radius: var(--base-radius);
        }
    }

    /*Unuse*/
    @keyframes boo {
        80% {
            transform: scale(1.4);
        }

        99% {
            transform: scale(1.7);
            border: 2px solid var(--UnChacked-color);
        }

        to {
            transform: scale(0);
        }
    }

}

.card {
    width: 100% !important;
    background-color: transparent;
    overflow: visible;
    width: 190px;
    height: 320px;
}

.content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
}

.front,
.back {
    background-image: none;
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
}

.back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
}

.back-content {
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 99%;
    height: 99%;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 30px;
}

.card:hover .content {
    transform: rotateY(180deg);
}

@keyframes rotation_481 {
    0% {
        transform: rotateZ(0deg);
    }

    0% {
        transform: rotateZ(360deg);
    }
}

.front {
    transform: rotateY(180deg);
    color: white;
}

.front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.front-content .badge {
    white-space: wrap;
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: 100%;
}

.description {
    width: 100%;
    backdrop-filter: blur(5px);
    border-radius: 5px;
}

.title {
    font-size: 11px;
    max-width: 100%;
}

.front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
}

#bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
}

#right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
}

@keyframes floating {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>