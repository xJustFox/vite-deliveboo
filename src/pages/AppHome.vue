<script>
export default {
    name: 'Home'
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
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

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

    @media (max-width: 768px) {
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

</style>