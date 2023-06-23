<template>
  <v-container class="cgu-container">
    <h2 class="cgu-title">
      Conditions générales d'utilisation
    </h2>
    <v-card class="cgu-card">
      <h3 class="cgu-subtitle">
        Propriété intellectuelle
      </h3>
      <p>
        Tous les éléments présents sur le site internet <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a> , qu'ils soient visuels ou textuels, sont protégés par le droit de la propriété 
        intellectuelle. Toute reproduction, représentation, modification, diffusion, 
        exploitation commerciale ou non, totale ou partielle 
        d'un élément du site est strictement interdite, 
        sauf autorisation préalable et écrite de la société <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a>.
      </p>
    </v-card>
  
    <v-card class="cgu-card">
      <h3 class="cgu-subtitle">
        Protection des données personnelles
      </h3>
    
      <p>
        La société <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a>
        assure la protection de vos données personnelles 
        conformément aux dispositions légales et réglementaires en vigueur. 
        Les données collectées lors de votre inscription sur 
        le site ne seront utilisées que dans le 
        cadre de votre demande de candidature et 
        ne seront pas communiquées à des tiers sans votre consentement préalable. 
        Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, de limitation, 
        d'opposition et de portabilité en nous contactant à l'adresse e-mail <a href="mailto:ag.scouting@gmail.com">ag.scouting@gmail.com</a>.
      </p>
    </v-card>
    
    <v-card class="cgu-card">
      <h3 class="cgu-subtitle">
        Cookies
      </h3>
    
      <p>
        Le site internet <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a> utilise des cookies pour analyser 
        le trafic sur le site et améliorer votre expérience utilisateur. 
        Les cookies sont des fichiers qui sont stockés sur votre ordinateur 
        ou votre appareil mobile lorsque vous naviguez sur notre site. Vous pouvez accepter 
        ou refuser l'utilisation de cookies à tout moment en modifiant les paramètres de votre navigateur web.
      </p>
    </v-card>
    
    <v-card class="cgu-card">
      <h3 class="cgu-subtitle">
        Inscription
      </h3>
    
      <p>
        En vous inscrivant sur le site internet <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a> , vous reconnaissez avoir pris connaissance et accepté ces conditions générales.
      </p>
    </v-card>
  </v-container>
</template>
    
    <script>
    export default {
    
    }
    </script>
    
  <style>
  .cgu-container {
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .cgu-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .cgu-card {
    width: 42%;
    margin-bottom: 40px;
    padding: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  .cgu-subtitle {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .cgu-card p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  .cgu-card ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }
  .cgu-card a {
    text-decoration: none;
    color: aqua;
    transition: color 0.5s;
  }
  .cgu-card a:hover {
    color: #00008b;
  }
  .cgu-card li {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  @media only screen and (max-width:780px) {
    .cgu-card {
      width: 80%;
    }
  }
  @media only screen and (max-width:480px) {
    .cgu-card {
      width: 100%;
    }
  }
  </style>