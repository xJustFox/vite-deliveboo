<script>

import { store } from '../store.js'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container-fluid px-4 py-2">
            <div class="row">
                <div class="col-3">
                    <div class="d-flex align-items-center super-ocean">
                        <div>
                            <img class="logo_deliveboo" src="/public/img/Logo.png" alt="">
                        </div>
                        <div class="ms-4">
                            <span class="text-orange">Delive</span>
                            <span class="text-gold">Boo</span>
                        </div>
                    </div>
                </div>
                <div class="col-7 d-flex justify-content-center align-items-center">
                    <ul class="list-unstyled d-flex align-items-center mt-1">
                        <li class="pe-5 fw-bold super-ocean" v-for="item, index in store.menuItems" :key="index">
                            <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    header{
        background-color: transparent;

        .logo_deliveboo {
            width: 50px;
            height: 50px;
        }

        .text-orange {
            color: #DA643F;
            font-size: 30px;
        }

        .text-gold {
            color: #E1B137;
            font-size: 30px;
        }

        ul {
            a{
                text-decoration: none;
                color: #fff;
                font-size: 23px;

                &:hover{
                    color: #DA643F;
                }
            }
        }

        i {
            color: #fff;
            font-size: 20px;

            &:hover{
                color: #DA643F;
                cursor: pointer;
            }
        }
    }
</style>