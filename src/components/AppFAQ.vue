<script>
export default {
    name: 'AppFAQ'
}
</script>
<template lang="">
    <section class="faq_margin pt-5 my-5" id="faq_section" >
            <div class="row">
                <!-- Sezione domande frequenti  -->
                <div class="col-12 col-lg-6 text-lg-start text-center">
                    <h2>Domande frequenti</h2>
                </div>
                <div class="col-12 col-lg-6 d-lg-flex justify-content-end d-none">
                    <router-link class="btn-menu text-decoration-none super-ocean" :to="{ name: 'contacts' }">Contattaci</router-link>
                </div>

                <!-- Sezione accordion FAQ -->    
                <div class="row py-4">
                    <div class="col">
                        <div class="tabs">
                            <div class="tab">
                                <input type="checkbox" id="chck1">
                                <label class="tab-label fs-5" for="chck1">Come funziona DeliveBoo?</label>
                                <div class="tab-content">
                                    Acquista i tuoi piatti preferiti, effettua il pagamento e attendi la consegna.
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck2">
                                <label class="tab-label fs-5" for="chck2">Quanto costa DeliveBoo?</label>
                                <div class="tab-content">
                                    Se sei un ristoratore, verifica i piani di abbonamento.
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck3">
                                <label class="tab-label fs-5" for="chck3">Perchè scegliere DeliveBoo?</label>
                                <div class="tab-content">
                                    Velocità, semplicità e qualità sono i nostri punti di forza.
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck4">
                                <label class="tab-label fs-5" for="chck4">Quante volte a settimana consegna DeliveBoo?</label>
                                <div class="tab-content">
                                    7 giorni su 7, le giornate in cui siamo operativi!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 d-flex justify-content-center d-flex d-lg-none">
                    <router-link class="btn-menu text-decoration-none super-ocean" :to="{ name: 'contacts' }">Contattaci</router-link>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>

#faq_section{
    .my_bg_black{
    background-color: #DA643F;
}

    .btn-menu{
        color: white;
        white-space: nowrap;
        text-align: center;
        font-size: large;
        padding: 10px 15px;
        margin: 10px;
        border-radius: 30px;
        background-color: #DA643F;
        cursor: pointer;

        &:hover{
            background-color: #fff;
            color: #DA643F;
        }
    }

    h2{
        font-size: 40px;
    }
}

$midnight: #212121;
$clouds: #ecf0f1;
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: #DA643F
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: #fff;
    background: #DA643F;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: #DA643F;
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}



</style>