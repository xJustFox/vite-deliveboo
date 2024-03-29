<script>
export default {
    name: 'AppPaymentError'
}
</script>
<template>
    <div class="container-lg d-flex justify-content-center align-items-center" >

     <div class="row bg-dark p-3 d-flex justify-content-center flex-wrap m-5">
          <div class="col-12 text-center">
               <i class="fa-regular fa-circle-xmark text-danger py-4"></i>
          </div>
          <div class="col-12 text-center">
               <h1 class="text-danger">Transazione Fallita</h1>
          </div>
          <div class="col-12 text-center pb-4">
               <h5>Purtroppo il tuo pagamento non è andato a buon fine</h5>
          </div>

          <!-- reindirizzare alla pagina di pagamento -->
          <div class="col-12 text-center pb-4">
               <a href="/credentials">
               <button  class="btn btn-outline-light">Torna indietro</button></a>
          </div>


     </div>
        
    </div>
</template>

<style scoped lang="scss">

.row{
     border: 5px solid red;

     .fa-circle-xmark{
          font-size: 70px;
     }
}
</style>