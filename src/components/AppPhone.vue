<script>
export default {
    name: 'AppPhone'
}
</script>
<template lang="">
    <div class="container p-5 mt-4 mb-4">
        <div class="row">
            <div class="col-12 d-flex justify-content-center col-lg-5 d-block d-lg-none">
                <img class="phone-responsive" src="/public/img/phone.png" alt="">
            </div>
            <div class="col-12 col-lg-7 pt-5 d-lg-block pt-lg-0">
                <h1 class="text-white display-7 text-center text-lg-start">
                    Mangia con gusto, ordina con <span class="super-ocean text-orange fs-1">Delive</span><span class="super-ocean text-gold fs-1">Boo</span> ogni giorno!
                </h1>
                <p class="text-lightgray pt-2 text-center text-lg-start">
                    Grazie a DeliveBoo, puoi goderti i tuoi piatti preferiti senza dover uscire di casa. La comodità di ordinare online si unisce al piacere del buon cibo, rendendo ogni pasto un momento da ricordare.
                </p>
            </div>
            <div class="col-lg-5 d-none d-lg-block">
                <img class="phone" src="/public/img/phone.png" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container {
        position: relative;
        background-color: #1e1e1e;
        border: 1px solid transparent;
        border-radius: 15px;

        .text-orange {
            color: #DA643F;
            font-size: 30px;
        }

        .text-gold {
            color: #E1B137;
            font-size: 30px;
        }

        .text-lightgray {
            color: lightgray;
            font-size: 18px;
        }

        .phone {
            width: 200px;
            position: absolute;
            right: 170px;
            top: -100px;
        }

        .phone-responsive {
            width: 180px;
        }
    }

    @media screen and (max-width:1199px){
        .phone {
            right: 100px;
        }
    }

    @media screen and (max-width:991px){
        .container {
            background-color: transparent;
        }

        .text-lightgray {
            font-size: 15px;
        }
    }
</style>