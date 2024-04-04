<script>

export default {
    name: 'AppContacts',
    components: {
    }
}


</script>
<template lang="">
        <div class="container py-5">
            <div clas="row bg-dark p-3">
                <div class="col-12  bg-dark p-4 d-flex flex-wrap ">
                    <div class="col-12 col-md-10">
                        <h1 class="fw-bolder">Chi siamo</h1>
                        <p>Siamo un team dinamico e appassionato di sviluppatori, formati da Boolean. Uniamo diverse competenze tecniche e  creative
                             per portare alla vita soluzioni innovative. Il nostro obiettivo è creare progetti che non solo dimostrino le nostre 
                             abilità tecniche ma che abbiano anche un impatto reale sulle persone e sulle aziende.
                        </p>
                    </div>
                    <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
                        <img class="imgn" src="../../public/img/chi-siamo.png" alt="">
                    </div>
                </div>

                <div class="col-12  bg-dark p-4 d-flex flex-wrap my-5">
                    <div class="col-12 col-md-10">
                        <h1 class="fw-bolder">Il Nostro Progetto: 
                            <a class="text-decoration-none text-orange super-ocean" href="/">{{ 'Delive' }}</a>
                            <a class="text-decoration-none text-gold super-ocean" href="/">{{ 'Boo' }}</a>
                        </h1>
                        <p>DeliveBoo nasce dall'idea di rivoluzionare l'esperienza di ordinazione cibo online, offrendo un'interfaccia utente intuitiva,
                            processi di pagamento semplificati e una gestione efficiente degli ordini sia per i clienti che per i ristoranti.
                             Simulando   la popolare piattaforma Deliveroo, DeliveBoo mira a superare le aspettative degli utenti in termini di 
                             usabilità e funzionalità.
                        </p>
                        <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img class="imgn" src="../../public/img/progetto-deliveboo.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-12  bg-dark p-4 d-flex flex-wrap ">
                    <div class="col-12 col-md-10">
                    <h1 class="fw-bolder">Scopo del Progetto</h1>
                    <p>Il nostro progetto si propone di:Offrire un'esperienza utente senza paragoni nel mondo delle consegne di cibo online.
                        Semplificare il processo di ordinazione e pagamento, rendendolo più accessibile e meno dispendioso in termini di tempo.
                        Creare un collegamento diretto e efficiente tra i ristoranti e i loro clienti, migliorando la qualità del servizio.
                    </p>
                </div>
                <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
                        <img class="imgn" src="../../public/img/scopo-progetto.png" alt="">
                </div>
                </div>

                <div class="col-12  bg-dark p-4 d-flex flex-wrap my-5">
                    <div class="col-12 col-md-10">
                    <h1 class="fw-bolder">Tecnologie Utilizzate
                    </h1>
                    <p>Per realizzare DeliveBoo, abbiamo impiegato alcune delle tecnologie più avanzate nel campo dello sviluppo web:
                        <ul>
                            <li><strong>Vite-Vue:</strong> Per un'interfaccia utente reattiva e dinamica, che si adatta perfettamente alle esigenze degli utenti.</li>
                            <li><strong>Braintree:</strong> Per offrire un sistema di pagamento sicuro e versatile, che supporta diverse modalità di transazione.</li>
                            <li><strong>Laravel:</strong> Come framework backend, per una logica di business robusta e performante.</li>
                            <li><strong>Bootstrap:</strong> Per garantire un design responsive e accattivante, che rende il sito accessibile da qualsiasi dispositivo.</li>
                        </ul>
                    </p>
                </div>
                <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
                        <img class="tech" src="../../public/img/tech.png" alt="">
                    </div>
                </div>
                
                <div class="col-12 bg-dark p-4">
                    <h1 class="fw-bolder">Contatti</h1>
                    <p>Siamo entusiasti dell'opportunità di collaborare con aziende che condividono la nostra visione. Per discutere di potenziali collaborazioni o per saperne di più su DeliveBoo e il nostro team, non esitare a contattarci su LinkedIn:
                        
                        <div class="d-flex justify-content-around py-4 align-items-center flex-column flex-md-row">
                            <a class="text-orange" href="https://www.linkedin.com/in/guido-roland-daversa-schiavoni-50143524a/">
                                <img src="https://media.licdn.com/dms/image/D4D03AQGhHTQB-OXRsw/profile-displayphoto-shrink_200_200/0/1710708091527?e=1717632000&v=beta&t=vxqruO_FzRlvx_tISytEon99dnsiSD5gLUbo83zmZMc">
                                <h5>Guido Roland Daversa Schiavoni</h5>
                            </a>   
                            <a class="text-orange" href="https://www.linkedin.com/in/alessandrotardio21/">
                                <img src="https://media.licdn.com/dms/image/D4D03AQHyPiuHi1sLAg/profile-displayphoto-shrink_200_200/0/1674748379026?e=1717632000&v=beta&t=gzHzZvt4c9ovttTdChDEkEBL6bRXogrpKwTM1DgaK0s">
                                <h5>Alessandro Tardio</h5>
                            </a> 
                            <a class="text-orange" href="https://www.linkedin.com/in/giovanni-d-ubaldo-976203254/">
                                <img src="https://media.licdn.com/dms/image/D4D03AQEMRDfOaH5NCQ/profile-displayphoto-shrink_800_800/0/1712223401874?e=1717632000&v=beta&t=z5IwO5ieKgehSq08E9Q7vNUa5u-RWMrHP-02LM0APcc">
                                <h5>Giovanni D'Ubaldo</h5>
                            </a>  
                            <a class="text-orange" href="https://www.linkedin.com/in/fabio-muzzu-3a93332ba/">
                                <img src="https://media.licdn.com/dms/image/D4D03AQHSa8DWpZyG0A/profile-displayphoto-shrink_200_200/0/1710258214637?e=1717632000&v=beta&t=fHpsxtXF-f1fzH30BXYIs0-Ac45x3asOjUXOr0JyKhU">
                                <h5>Fabio Muzzu</h5>
                            </a>  
                            <a class="text-orange" href="https://www.linkedin.com/in/tomas-darienko-5a8b63140/">
                                <img src="https://media.licdn.com/dms/image/D4D03AQFOjsPMiLEzDw/profile-displayphoto-shrink_800_800/0/1710519768941?e=1717632000&v=beta&t=o64OeifPLQ7QfCsjsrm2ERUICLNbTquv3PTu79OSNLA">
                                <h5>Tomas Darienko</h5>
                            </a>                       
                        </div>
                        <div class="text-center">
                        Attendiamo con interesse l'opportunità di far crescere insieme i nostri futuri.
                        </div>
                    </p>
                </div>
                
            </div>
        </div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 40px;
}

strong {
    font-size: 20px;
}

.text-gold {
  color: #E1B137;
  font-size: 30px;
}
.col-md-10,
.col-12 {
    border-radius: 20px;
}
a{

    img {
        width: 150px;
        margin-bottom: 10px;
        border-radius: 50%;
        border: 1px solid #e5653e
    }
}

.imgn{
    width: 120px;
}
.tech{
    max-width: 150px;
    max-height: 150px;
}


.d-flex {
    a {
        max-width: 160px;
        text-align: center;
        text-decoration: none;
        
        .text-orange {
            color: #DA643F;
            font-size: 30px;
          }
        .text-gold {
            color: #E1B137;
            font-size: 30px;
}
    }
}
</style>