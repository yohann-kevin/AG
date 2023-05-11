<template>
  <footer class="footer">
    <div class="footer-law">
      <v-img
        alt="AG Scouting"
        class="ag-logo"
        contain
        :src="('/public/assets/logo-ag.png')"
      />
    </div>
    <h4>
      Powered and designed by 
      <a
        href="https://www.linkedin.com/in/yohann-perriguey-8a91351a0/"
        target="_blank"
        class="dev-link"
      >
        ©hygitale
      </a>
    </h4>
   
    <div class="footer-btns">
      <v-btn
        text
        to="/Mentions-legales"
      >
        Mentions légales
      </v-btn>
      <v-btn
        text
        to="/Rgpd"
      >
        RGPD
      </v-btn>
    </div>
  </footer>
</template>



<script>
export default {

}
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
  transition: scale-transition;
  width:80px;
  height:78px;
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
.footer-btns {
  display: flex;
  flex-direction: column;
}
}

/* footer telephone */
@media only screen and (max-width: 480px) {
  .footer h4 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  }
</style>