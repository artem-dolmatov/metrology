<template>
  <div>
    <h1 class="license_title">Наши документы</h1>
    <b-row class="row_padding">
      <b-col>
        <h4 class="title_doc">Приказ об аккредитации</h4>
        <img class="img_width" src="~assets/prikaz.jpg" alt="Приказ об аккредитации">
      </b-col>
      <b-col>
        <div>
          <img class="rosacred" src="~assets/rosakreditacia.png" alt="Россакредитация">
          <p>Представленная нами информация отражена в реестре аккредитованных лиц в области обеспечения единства измерений на сайте
            <a href="http://188.254.71.82/fsa_raoei_pub/register/3/view/14438" target="_blank">Росаккредитации</a>
          </p>
        </div>
        <h4 class="title_doc">Аттестат аккредитации</h4>
        <img class="img_width" src="~assets/attestat.jpg" alt="Аттестат аккредитации">
      </b-col>
      <b-col>
        <h4 class="title_doc">Свидетельство о поверке</h4>
        <img class="img_width" src="~assets/certificate.jpg" alt="Свидетельство о поверке">
      </b-col>
    </b-row>
  </div>
</template>

<style>
.license_title{
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid #80808085;
}
.img_width {
  max-width: 100%;
  box-shadow: 0 20px 40px rgba(0,0,0,.4);
}
.title_doc {
  text-align: center;
}
.rosacred {
  margin-left: 15%;
}
.row_padding {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>

