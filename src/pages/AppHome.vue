<script>
import AppTypologyCarousel from '../components/AppTypologyCarousel.vue';
import AppPhone from '../components/AppPhone.vue';

export default {
    name: 'Home',
    components:{
        AppTypologyCarousel,
        AppPhone
    }
}

</script>

<template lang="">
    <div class="container-lg pt-2">
        <div class="row">
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center ">
                <div class="col-12">
                    <h1 class="super-ocean text-white text-center text-lg-start">
                        Mangia con passione, comodamente a casa:
                        la tua felicità in ogni piatto
                    </h1>
                </div>
                <div class="col-12">
                    <p class="text-lightgray text-center text-lg-start">
                        Gusti autentici, comodamente a portata di click. Vivere bene non è mai stato così facile!
                    </p>
                </div>

            </div>
            <div class="col-12 col-md-6">
                <img class="img-fluid" src="/public/img/group.png" alt="">
            </div>
        </div>

        <!-- Typology Carousel -->
        <section class="py-5">
            <AppTypologyCarousel></AppTypologyCarousel>
        </section>

        <!-- Terza sezione -->
        <section id="partner_section">
            <div class="row">
        
                <!-- Sezione titoli -->
            
                <div class="col-12 text-center">
                    <div class="mt-5">
                        <h3 class="my_orange">Cosa serviamo</h3>
                    </div>
                    <div  class="text-white super-ocean mb-5">
                        <h1 class="my_title">Il vostro partner preferito per le consegne</h1>
                    </div>
                </div>
        
                <!-- Sezione cards -->

                <!-- Prima card -->
                <div class="col-sm-12 col-md-4 text-center card_margin">
                    <img class="img-fluid" src="/public/img/Risorsa 2ai 1.png" alt="">
                    <div class="text-white super-ocean mt-4">
                        <h2>Consegna veloce</h2>
                    </div>
                    <div>
                        <p>Per ordinare il cibo bastano pochi passaggi</p>
                    </div>
                </div>

                <!-- Seconda card -->
                <div class="col-sm-12 col-md-4 text-center card_margin">
                    <img class="img-fluid" src="/public/img/Risorsa 1ai 1.png" alt="">
                    <div class="text-white super-ocean mt-4">
                        <h2>Ordinare è facile</h2>
                    </div>
                    <div>
                        <p>Consegna sempre puntuale e ancora più veloce</p>
                    </div>
                </div>
                
                <!-- Terza card -->
                <div class="col-sm-12 col-md-4 text-center card_margin">
                    <div class="img_container">
                        <img class="img-fluid" src="/public/img/Group 38.png" alt="">
                    </div>
                    <div class="text-white super-ocean mt-4">
                        <h2>Qualità migliore</h2>
                    </div>
                    <div>
                        <p>Per noi la qualità non è solo veloce, ma anche al primo posto</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Sezione Phone -->
        <section class="pt-5">
            <AppPhone/>
        </section>
        
        <!-- FAQ section -->
        <section class="faq_margin" id="faq_section" >
            <div class="row">

                <!-- Sezione domande frequenti  -->
                <div class="col-sm-12 col-md-4 text-center">
                    <h2>Domande frequenti</h2>
                </div>
                <div class="col-sm-12 col-md-4 text-center">
                    <p class="text-secondary">Controlla le domande frequenti per avere una risposta</p>
                </div>
                <div class="col-sm-12 col-md-4 d-flex justify-content-end">
                    <router-link class="btn-menu text-decoration-none mb-4" :to="{ name: 'contacts' }">Contattaci</router-link>
                </div>

                <!-- Sezione accordion FAQ -->
                <div class="accordion accordion-flush mb-5" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button my_bg_black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Come funziona DeliveBoo?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body my_bg_black text-white">
                                Acquista i tuoi piatti preferiti, effettua il pagamento e attendi la consegna.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed my_bg_black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Quanto costa DeliveBoo?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body my_bg_black text-white">
                                Se sei un ristoratore, verifica i piani di abbonamento.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed my_bg_black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Perché scegliere DeliveBoo?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body my_bg_black text-white">
                                Velocità, semplicità e qualità sono i nostri punti di forza.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed my_bg_black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Quante volte a settimana consegna DeliveBoo?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body my_bg_black text-white">
                                7 giorni su 7, le giornate in cui siamo operativi!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.my_bg_black{
    background-color: $my_black;
}

.faq_margin{
        margin-top: 150px;
}

#partner_section{
    .my_orange{
        color: $my_orange;
    }

    .img_container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
    }

    img{
        height: 60%;
    }

    .card_margin{
        margin-top: 80px;
    }

    .my_title{
        font-size: 40px;
    }

    @media (max-width: 767px) {
        .img_container{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 90%;
        }

        .card_margin{
            margin-top: 0px;
        }
    }
}

#faq_section{
    .btn-menu{
        color: white;
        white-space: nowrap;
        text-align: center;
        font-size: large;
        padding: 10px 15px;
        margin: 10px;
        border-radius: 10px;
        background-color: #DA643F;

        &:hover{
            transform:scale(1.1);
        }
    }

    h2{
        font-size: 40px;
    }

    .accordion{
        --bs-accordion-border-color: #DA643F (--bs-border-color);
    }
    .accordion-button {
        border-bottom: 1px solid #DA643F;

        &:focus {
            box-shadow: none;
            border-color: #E1B137;
        }
    }

}

</style>