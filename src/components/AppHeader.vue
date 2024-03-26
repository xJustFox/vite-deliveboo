<script>

import { store } from '../store.js'

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            flagActive: 0,
            navLinks: [
                {
                    name: 'home',
                    label: 'Home'
                },
                {
                    name: 'restaurants',
                    label: 'Ristoranti'
                },
                {
                    name: 'contacts',
                    label: 'Contatti'
                }
            ]
        }
    },
    methods:{
        getActiveLink(index){
            this.flagActive = index
        }
    }
}
</script>
<template>
    <header>
        <div class="container-fluid px-4 py-2 d-flex justify-content-between">

            <!-- Logo -->
            <div class="d-flex align-items-center super-ocean">
                <a href="/">
                    <img class="logo_deliveboo me-2" src="../../public/img/Logo.png" alt="">
                </a>
                <a class="text-decoration-none text-orange" href="/">{{ 'Delive' }}</a>
                <a class="text-decoration-none text-gold" href="/">{{ 'Boo' }}</a>
            </div>

            <!-- Center Links -->
            <div class="d-none d-md-block">
                <ul class="d-flex align-items-center list-unstyled h-100">
                    <!-- Home Link -->
                    <li class="px-2" v-for="link, index in navLinks">
                        <router-link :class="this.flagActive == index ? 'active-link' : ''" class="my-nav-link super-ocean" :to="{ name: link.name }" @click="getActiveLink(index)">{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>

            <!-- Right Menu -->
            <div class="d-flex align-items-center">
                <a class="shopping-cart" href="">
                    <i class="fa-solid fa-cart-shopping fs-xl"></i>
                </a>

                <ul class="d-flex align-items-center list-unstyled m-0 ps-3">
                    <!-- Authentication Links -->
                    <li class="d-md-none">
                      <label class="popup">
                        <input type="checkbox">
                        <div class="burger" tabindex="0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <nav class="popup-window">
                          <ul>
                            <li class="px-2" v-for="link, index in navLinks">
                                <router-link :class="this.flagActive == index ? 'active-link' : ''" class="my-nav-link super-ocean" :to="{ name: link.name }" @click="getActiveLink(index)">{{ link.label }}</router-link>
                            </li>
                          </ul>
                        </nav>
                      </label>
                    </li>
                  </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: transparent;

    .logo_deliveboo {
        width: 50px;
        height: 50px;
    }

    .bg-darkgray {
        background-image: linear-gradient(13deg, #181818, #181818, #181818, #DA643F);
    }

    .text-orange {
        color: #DA643F;
        font-size: 30px;
    }

    .text-gold {
        color: #E1B137;
        font-size: 30px;
    }

    .my-nav-link {
        font-size: 23px;
        padding-right: 10px;
        color: white;
        text-decoration: none;

        &:hover {
            color: #DA643F;
        }
    }

    .shopping-cart{
        text-decoration: none;
        color: white;
        i{
            font-size: 25px 
        }
    }

    .active-link {
        color: #DA643F;
    }


    // HAMBURGER-BUTTON

  .popup {
    --burger-line-width: 1.125em;
    --burger-line-height: 0.125em;
    --burger-offset: 0.625em;
    --burger-bg: rgba(0, 0, 0, .15);
    --burger-color: #fff;
    --burger-line-border-radius: 0.1875em;
    --burger-diameter: 2.125em;
    --burger-btn-border-radius: calc(var(--burger-diameter) / 2);
    --burger-line-transition: .3s;
    --burger-transition: all .1s ease-in-out;
    --burger-hover-scale: 1.1;
    --burger-active-scale: .95;
    --burger-enable-outline-color: var(--burger-bg);
    --burger-enable-outline-width: 0.125em;
    --burger-enable-outline-offset: var(--burger-enable-outline-width);
    /* nav */
    --nav-padding-x: 0.25em;
    --nav-padding-y: 0.625em;
    --nav-border-radius: 0.375em;
    --nav-border-color: #ccc;
    --nav-border-width: 0.0625em;
    --nav-shadow-color: rgba(0, 0, 0, .2);
    --nav-shadow-width: 0 1px 5px;
    --nav-bg: #eee;
    --nav-font-family: Menlo, Roboto Mono, monospace;
    --nav-default-scale: .8;
    --nav-active-scale: 1;
    --nav-position-left: 0;
    --nav-position-right: unset;
    /* title */
    --nav-title-size: 0.625em;
    --nav-title-color: #777;
    --nav-title-padding-x: 1rem;
    --nav-title-padding-y: 0.25em;
    /* nav button */
    --nav-button-padding-x: 1rem;
    --nav-button-padding-y: 0.375em;
    --nav-button-border-radius: 0.375em;
    --nav-button-font-size: 12px;
    --nav-button-hover-bg: #DA643F;
    --nav-button-hover-text-color: #fff;
    --nav-button-distance: 0.875em;
    /* underline */
    --underline-border-width: 0.0625em;
    --underline-border-color: #ccc;
    --underline-margin-y: 0.3125em;
    z-index: 999;
  }


  nav.popup-window {
    font-family: 'Audiowide', system-ui;
  }

  .popup {
    display: inline-block;
    text-rendering: optimizeLegibility;
    position: relative;
  }

  .popup input {
    display: none;
  }

  .burger {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: var(--burger-bg);
    width: var(--burger-diameter);
    height: var(--burger-diameter);
    border-radius: var(--burger-btn-border-radius);
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: var(--burger-transition);
    outline: var(--burger-enable-outline-width) solid transparent;
    outline-offset: 0;
  }

  .burger span {
    height: var(--burger-line-height);
    width: var(--burger-line-width);
    background: var(--burger-color);
    border-radius: var(--burger-line-border-radius);
    position: absolute;
    transition: var(--burger-line-transition);
  }

  .burger span:nth-child(1) {
    top: var(--burger-offset);
  }

  .burger span:nth-child(2) {
    bottom: var(--burger-offset);
  }

  .burger span:nth-child(3) {
    top: 50%;
    transform: translateY(-50%);
  }

  .popup-window {
    transform: scale(var(--nav-default-scale));
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: var(--nav-padding-y) var(--nav-padding-x);
    background: rgb(0 0 0 / 85%);
    font-family: var(--nav-font-family);
    color: var(--nav-text-color);
    border-radius: var(--nav-border-radius);
    box-shadow: var(--nav-shadow-width) var(--nav-shadow-color);
    border: var(--nav-border-width) solid #343a40;
    top: calc(var(--burger-diameter) + var(--burger-enable-outline-width) + var(--burger-enable-outline-offset));
    left: -75px;
    right: var(--nav-position-right);
    transition: var(--burger-transition);
  }

  .popup-window legend {
    padding: var(--nav-title-padding-y) var(--nav-title-padding-x);
    margin: 0;
    color: var(--nav-title-color);
    font-size: var(--nav-title-size);
    text-transform: uppercase;
  }

  .popup-window ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .popup-window ul button {
    outline: none;
    width: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: var(--burger-color);
    font-size: var(--nav-button-font-size);
    padding: var(--nav-button-padding-y) var(--nav-button-padding-x);
    white-space: nowrap;
    border-radius: var(--nav-button-border-radius);
    cursor: pointer;
    column-gap: var(--nav-button-distance);
    font-size: 16px;
  }

  .popup-window ul li:nth-child(1) svg,
  .popup-window ul li:nth-child(2) svg {
    color: cornflowerblue;
  }

  .popup-window ul li:nth-child(4) svg,
  .popup-window ul li:nth-child(5) svg {
    color: rgb(153, 153, 153);
  }

  .popup-window ul li:nth-child(7) svg {
    color: red;
  }

  .popup-window hr {
    margin: var(--underline-margin-y) 0;
    border: none;
    border-bottom: var(--underline-border-width) solid var(--underline-border-color);
  }

  /* actions */

  .popup-window ul button:hover,
  .popup-window ul button:focus-visible,
  .popup-window ul button:hover svg,
  .popup-window ul button:focus-visible svg {
    color: var(--nav-button-hover-text-color);
    background: var(--nav-button-hover-bg);
  }

  .burger:hover {
    transform: scale(var(--burger-hover-scale));
  }

  .burger:active {
    transform: scale(var(--burger-active-scale));
  }

  .burger:focus:not(:hover) {
    outline-color: var(--burger-enable-outline-color);
    outline-offset: var(--burger-enable-outline-offset);
  }

  .popup input:checked+.burger span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .popup input:checked+.burger span:nth-child(2) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }

  .popup input:checked+.burger span:nth-child(3) {
    transform: translateX(calc(var(--burger-diameter) * -1 - var(--burger-line-width)));
  }

  .popup input:checked~nav {
    transform: scale(var(--nav-active-scale));
    visibility: visible;
    opacity: 1;
    z-index: 999;
  }

  // END HAMBURGER-BUTTON

}
</style>