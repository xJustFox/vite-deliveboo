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
        getTypologies() {
            axios.get(`${this.store.baseUrl}/api/typologies`).then(response => {
                this.typologies = response.data.results;
            })
        },

        getRestaurants() {
            axios.get(`${this.store.baseUrl}/api/restaurants`).then(response => {
                this.restaurants = response.data.results;
            })
        },

        getRestaurantsTypology(slug) {
            axios.get(`${this.store.baseUrl}/api/restaurants/typologies/${slug}`).then(response => {
                this.restaurants = [];
                this.restaurants = response.data.results;
            })
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
                <ul class="list-unstyled typology-list d-flex d-md-block">
                    <li @click="getRestaurants()">Tutti</li>
                    <li v-for="(typology, index) in typologies" :key="index" @click="getRestaurantsTypology(typology.slug)">{{typology.name}}</li>
                </ul>
            </div>

            <div class="col-12 col-md-9 col-lg-10 h-300 my-2">
                <Carousel ref="carousel" :breakpoints="breakpoints" >
                    <Slide v-for="restaurant in restaurants" :key="restaurant">
                        <div class="card">
                            <div class="content">
                              <div class="back">
                                <div class="back-content" :style="{ backgroundImage: 'url(' + restaurant.main_image + ')' }">
                                    <span class="super-ocean">{{ restaurant.name }}</span>
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
                                    <div class="title text-center">
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                    </Slide>
                </Carousel>

                <div v-if="restaurants.length <= 0" class="d-flex justify-content-center align-items-center h-100 super-ocean">Non ci sono ristoranti con questa categoria</div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.h-300 {
    height: 300px;
}

.super-ocean {
    color: #DA643F;
    font-size: 2rem;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;

    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
}

.btn-menu{
    width: 100% !important;
    text-decoration: none;
    color: white;
    display: block;
    background-color: #DA643F;
    border-radius: 5px;
    padding: 5px 0;

    &:hover{
        transform:scale(1.1);
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
    max-height: 300px;
    overflow-x: scroll;

    li {
        white-space: nowrap;
        text-align: center;
        font-size: large;
        padding: 5px 10px;
        margin: 10px;
        border-radius: 10px;
        background-color: #DA643F;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }

    }

    @media screen and (min-width: 768px) {
        overflow-y: scroll;
        overflow-x: hidden;
    }
}

.card {
    width: 100% !important;
    padding: 0 5px;
    background-color: transparent;
    overflow: visible;
    width: 190px;
    height: 300px;
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