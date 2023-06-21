<template>
  <footer class="footer">
    <div class="footer-law">
      <router-link to="/">
        <v-img
          alt="AG Scouting"
          class="ag-logo"
          contain
          :src="formatImageSource('/public/assets/logo-ag.png')"
          width="80"
          height="78"
        />
      </router-link>
    </div>
    <h4>
      Powered and designed by 
      <!-- <a
        href="https://www.linkedin.com/in/yohann-perriguey-8a91351a0/"
        target="_blank"
        class="dev-link"
      > -->
      <a class="dev-link">
        ©hygitale
      </a>
    </h4>
   
    <div class="footer-btns">
      <ul class="footer-btns-list">
        <li>
          <v-btn
            text
            to="/legal"
          >
            Mentions légales
          </v-btn>
        </li>
        <li>
          <v-btn
            text
            to="/rgpd"
          >
            RGPD
          </v-btn>
        </li>
        <li>
          <v-btn
            text
            to="/cgu"
          >
            CGU
          </v-btn>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import utils from '../../utils/utils.js';

export default {
  data: () => ({
    formatImageSource: utils.formatImageSource,
  }),
};
</script>

<style>
.footer {
  background-color: #fff;
  box-shadow: 0px 1px 10px 10px rgb(0 0 0 / 20%);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-law {
  display: flex;
  align-items: center;
}

.ag-logo {
  margin-right: 20px;
  transition: scale;
  
}

.footer h4 {
  font-style: italic;
  font-weight: 300;
 text-align: center;
  
}

.dev-link {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87) !important;
  text-decoration: none;
}

.footer-btns {
  display: flex;
  align-items: center;
}

.footer-btns-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-btns-list li {
  margin-bottom: 0px;
}

/* footer tablette */
@media only screen and (max-width: 768px)
{
.footer {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.ag-logo {
  margin: 10px auto;
}
.footer-btns-list li {
  text-align: center;
}
}

/* footer telephone */
@media only screen and (max-width: 480px) {
  .footer h4 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .footer-btns-list li {
  text-align: center;
}
  }
</style>