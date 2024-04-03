<script>

import { store } from '../store.js'

export default {
     name: 'App',
     data() {
          return {
               store,
               flagActive: 0,
               footerLinks: [
                    {
                         name: 'home',
                         label: 'Home'
                    },
                    {
                         name: 'contacts',
                         label: 'Contatti'
                    }
               ]
          }
     },
     methods: {
          getActiveLink(index) {
               this.flagActive = index
          }
     }
}
</script>
<template>
     <footer>
        <div class="container">
            <div class="row">

                <!-- Logo -->
                <div class="col-3 py-5 d-lg-block d-md-none d-sm-none d-none">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <img class="img-fluid" src="../../public/img/Logo.png" alt="">
                    </div>
                </div>

                <!-- Links section -->
                <div class="col-lg-7 col-md-12 col-sm-12 d-flex flex-wrap py-5">
                    <div class="col-lg col-md-6 col-6 text-white">
                        <h5>Servizi</h5>
                        <hr class="hr_footer">
                        <ul class="list-unstyled">
                            <li><a class="text-decoration-none" href="#">Terms & Conditions</a></li>
                            <li><a class="text-decoration-none" href="#">Privacy Policy</a></li>
                            <li><a class="text-decoration-none" href="#">Mappa del sito</a></li>
                            <li><a class="text-decoration-none" href="#">Norme sui cookie</a></li>
                        </ul>
                    </div>
                    <div class="col-lg col-md-6 col-6 text-white">
                         <h5>Prodotti</h5>
                         <hr class="hr_footer">
                         <ul class="list-unstyled">
                              <li><a class="text-decoration-none" href="#">App Mobile</a></li>
                             <li><a class="text-decoration-none" href="#">Abbonamenti</a></li>
                             <li><a class="text-decoration-none" href="#">App Desktop</a></li>
                         </ul>
                    </div>
                    <div class="col-lg col-md-6 col-6 text-white">
                         <h5>Supporto</h5>
                         <hr class="hr_footer">
                         <ul class="list-unstyled">
                             <li><a class="text-decoration-none" href="#">Email</a></li>
                             <li><a class="text-decoration-none" href="#">Location</a></li>
                             <li><a class="text-decoration-none" href="#">Centro assistenza</a></li>
                             <li><a class="text-decoration-none" href="#">Lavora con noi</a></li>
                             <li><a class="text-decoration-none" href="#">Informazioni su DeliveBoo</a></li>
                         </ul>
                    </div>
                    <div class="col-lg col-md-6 col-6 text-white">
                        <h5>Sito</h5>
                        <hr class="hr_footer">
                        <ul class="list-unstyled text-white">
                            <li v-for="link, index in footerLinks">
                                <router-link class="text-decoration-none" :to="{ name: link.name }">{{ link.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Subscribe section -->
                <div class="col-lg-2 col-md-12 col-sm-12 d-flex py-5 text-white">
                    <div>
                        <h5>Socials</h5>
                        <div class="my-2">
                            <a class="text-white" href="">
                                <i class="fab fa-facebook p-2 me-1 my-1 "></i>
                            </a>
                            <a class="text-white" href="">
                                <i class="fab fa-twitter p-2 me-1 my-1 "></i>
                            </a>
                            <a class="text-white" href="">
                                <i class="fab fa-linkedin-in p-2 me-1 my-1 "></i>
                            </a>
                            <a class="text-white" href="">
                                <i class="fab fa-twitter p-2 me-1 my-1 "></i>
                            </a>
                            <a class="text-white" href="">
                                <i class="fab fa-instagram p-2 me-1 my-1 "></i>
                            </a>
                        </div>
                        <!-- <div class="mt-5">
                            <h5 class="pb-3">Iscriviti</h5>
                            <div class="d-flex">
                                <input type="email" class="form-control rounded me-3 pe-5 " id="newsletter" placeholder="Inserisci la tua email">
                                <button class="rounded sub_btn text-white px-4" type="button">Subscribe</button>
                            </div>
                        </div> -->
                    </div>
                </div>

                <hr class="text-white bottom_hr">

                <!-- Copyright -->
                <div class="col-12 d-flex justify-content-center my-3 text-white">
                    <span>&#169 Made with &#9829 by Team 4</span>
                </div>

            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
footer{
    background-color: $my_orange;

    img{
        width: 60%;
        filter: brightness(0) invert(1);
    }

    .sub_btn{
        background-color: $my_grey;
        border-color: $my_gold;
    }

    i{
        border: 1px solid;
        border-radius: 50%;
    }

    a, i{
        color: white;
        text-decoration: none;

        &:hover{
            color: $my_gold;
        }
    }

    li{
     margin-right: 5px;
    }

    .hr_footer{
        width: 50%;
    }

}
</style>