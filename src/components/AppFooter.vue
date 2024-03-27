<script>

import { store } from '../store.js'

export default {
     name: 'App',
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
          

               <div class="container-fluid px-4 py-2 d-flex ">

                    <!-- Logo -->
                    <div class="d-flex col-4 align-items-center p-3 flex-wrap">
                         <div class="col-12 d-flex col-4 align-items-center">

                              <a href="/">
                                   <img class="logo_deliveboo me-2" src="../../public/img/Logo.png" alt="">
                              </a>
                              <a class="text-decoration-none text-white super-ocean" href="/">{{ 'DeliveBoo' }}</a>
                         </div>
                         
                         <div class="col-12 py-4 fw-bolder">
                              <p>Cibo sano per una Vita sana</p>
                         </div>
                    </div>
                    

                    <!-- Center Links -->
                    <div class="col-8 p-5">
                         <ul class="d-flex align-items-center list-unstyled  justify-content-evenly">
                              <!-- Home Link -->
                              <li class="px-2">
                                   <router-link class="my-nav-link super-ocean abs" :to="{ name: navLinks[0].name }" @click="getActiveLink(index)">
                                        {{ navLinks[0].label }}
                                   </router-link>    
                                   <ul class="list-unstyled">
                                        <li>menu</li>
                                        <li>carrello</li>
                                   </ul>
                              </li>
                              <li class="px-2">
                                   <router-link class="my-nav-link super-ocean abs" :to="{ name: navLinks[1].name }" @click="getActiveLink(index)">
                                        {{ navLinks[1].label }}
                                   </router-link>    
                                   <ul class="list-unstyled">
                                        <li>email</li>
                                        <li>cellulare</li>
                                        <li>fax</li>
                                        <li>piccione</li>
                                   </ul>
                              </li>
                              
                         </ul>
                    </div>

                    
               </div>
     </footer>
</template>

<style lang="scss" scoped>
footer {
     background-color: #e45327;
     
     

     .logo_deliveboo {
          width: 100px;
          height: 100px;
          filter: brightness(0) invert(1);
     }

    
     .col-8{
          position: relative;

          .abs{
               position: absolute;
               top: 10px;
          }
     }

     .text-white {
          color: #ffffff;
          font-size: 50px;
     }


     .my-nav-link {
          font-size: 23px;
          padding-right: 10px;
          color: white;
          text-decoration: none;

          &:hover {
               color: #000000;
          }
     }

    

     


    


}
</style>