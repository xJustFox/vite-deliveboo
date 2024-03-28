<script>
import { store } from '/src/store.js';

export default {
    name: 'AppCard',

    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="col-12 col-lg-4  p-0 ">
        <div class="content d-flex justify-content-center">
            <div class="boxCard text-white">

                <!-- Back Card -->
                <div class="backCard">
                    <div class="textBackCard">
                        <div class="cvcCard">{{store.cvc}}</div>
                    </div>
                </div>

                <!-- Front Card -->
                <div class="frontCard" >
                    <div class="textFrontCard">
                        <img class="logoCard" src="/src/assets/card-logo.svg" alt="">
                        <div class="numberCard">{{store.number}}</div>
                        <div class="nameCard">{{store.name}}</div>
                        <div class="dateCard">{{store.month}}/{{store.year}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.content{
    background-image: url('../../assets/bg-main-mobile.png');
    background-size: cover;
    height: 230px;
      
    
    .boxCard{
        position: relative;
        width: 380px;
        height: 100%;
        
        .textBackCard,
        .textFrontCard{
            position: relative;
            height: 100%;
        }
        .backCard,
        .frontCard{
            width: 300px;
            height: 165px;
            position: absolute;
        }
        
        .backCard{
            background-image: url('src/assets/bg-card-back.png');
            background-size: cover;
            top: 30px;
            right: 10px;
            .cvcCard{
                position: absolute;
                right: 35px;
                top: 70px;
            }
        
        }
        
        .frontCard{
            background-image: url('src/assets/bg-card-front.png');
            background-size: cover;
            top: 54%;
            right: 70px;

            .logoCard{
                width: 90px;
                padding: 18px;
            }
            .numberCard{
                font-size: x-large;
                position: absolute;
                left: 18px;
                top: 55%;
            }

            .nameCard,
            .dateCard{
                font-size: smaller;
                position: absolute;
                top: 80%;
            }
            .nameCard{
                left: 18px;
            }

            .dateCard{
                right: 18px;
            }
        }

    }

}
    
</style>