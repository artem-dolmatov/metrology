<template>
  <div class="footer_page">
    <b-row>
      <b-col cols='12' lg='6' class="footer-logo">
        <img src="~assets/logo.png" alt="МЦСМ">
      </b-col>
      <b-col cols='12' lg='6'>
        <div class="footer_phone">
          <a href="tel:83452388589" class="tel">8 (3452) 38-85-89</a>
          <p>Межрегиональный центр стандартизации и метрологии</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.footer_page {
  padding: 1rem;
  border-top: 1px solid #80808085;
  background-image: url(~assets/pattern_4.png);
}
.footer_phone {
  float: right;
  text-align: right;
}
@media (max-width: 960px) {
  .footer_phone {
    padding-top: 1rem;
    text-align: center;
  }
  .footer-logo {
    text-align: center;
  }
}
</style>
