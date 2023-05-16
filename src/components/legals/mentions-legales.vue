<template>
  <v-container class="legal-container">
    <h2 class="legal-title">
      MENTIONS LÉGALES
    </h2>
    <v-card class="legal-card">
      <h3 class="legal-subtitle">
        Informations importante
      </h3>
      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
      </p>
    </v-card>

    <v-card class="legal-card">
      <h3 class="legal-subtitle">
        Edition du site
      </h3>
  
      <p>
        Le présent site, accessible à l’URL <a
          href="https://www.ag-scouting.com/"
          target="_blank"
        >AG Scouting</a> , est édité par :
      </p>
  
      <ul>
        <li>Nom : Morgane Cordier</li>
        <li>Nationalité : Française (France)</li>
        <li>Date de naissance : 27/02/1997</li>
        <li>Résidant : 88 Rue Irene Joliot Curie 56000 VANNES</li>
      </ul>
    </v-card>
  
    <v-card class="legal-card">
      <h3 class="legal-subtitle">
        Hébergement
      </h3>
  
      <p>
        Le Site est hébergé par la société Netlify, située au 44 Montgomery Street, Suite 300, San Francisco, California 94104.
      </p>
  
      <p>
        Pour contacter Netlify, vous pouvez utiliser les coordonnées suivantes :
      </p>
  
      <ul>
        <li>Téléphone :  <a href="tel:+14156911573">+1 415 691 1573</a></li>
      </ul>
    </v-card>
  
    <v-card class="legal-card">
      <h3 class="legal-subtitle">
        Directeur de publication
      </h3>
  
      <p>
        Le Directeur de la publication du Site est Morgane Cordier.
      </p>
    </v-card>
  
    <v-card class="legal-card">
      <h3 class="legal-subtitle">
        Nous contacter
      </h3>
  
      <p>
        Vous pouvez nous contacter par email à l'adresse suivante : <a href="mailto:agscouting.app@gmail.com">agscouting.app@gmail.com</a>
      </p>
  
      <p>
        Vous pouvez également nous envoyer un courrier à l'adresse suivante :
      </p>
  
      <ul>
        <li>88 Rue Irène Joliot Curie</li>
        <li>56000 Vannes</li>
      </ul>
    </v-card>
  
    <v-card
      class="
          legal-card"
    >
      <h3 class="legal-subtitle">
        Données personnelles
      </h3>
  
      <p>
        Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
      </p>
    </v-card>
  </v-container>
</template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
.legal-container {
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.legal-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.legal-card {
  width: 32%;
  margin-bottom: 40px;
  padding: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.legal-subtitle {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.legal-card p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.legal-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
.legal-card a {
  text-decoration: none;
  color: aqua;
  transition: color 0.5s;
 
}
.legal-card a:hover {
  color: #00008b;
}

.legal-card li {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 5px;
}
</style>
