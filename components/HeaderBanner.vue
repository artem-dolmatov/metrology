<template>
  <div class="banner">
    <b-row>
      <b-col cols='12'>
        <div class="cont">
          <div class="banner_title">
            Поверка счетчиков<br/><small>воды без снятия в Тюмени</small>
          </div>
          <div class="baner-padding">
            <h1 class="banner_title_small">Поверка счетчиков</h1>
            <h4 class="banner_title_small">воды без снятия в Тюмени</h4>
            <h1 class="banner_title_small">от 450 р.</h1>
          </div>
          <div class="banner_text">
            Поверку приборов проводят только квалифицированные метрологи,
            <br/>
            используя
            <b>аттестованные эталоны</b>
          </div>
          <b-button v-b-modal.modal-order class="btn_cube btn_lg mobil" variant="warning">Заказать</b-button>
          <b-modal id="modal-order" centered title="Заказать поверку">
            <b-form v-bind:class="{ hidden: active }" method="post" v-on:submit.prevent="postCheck">
              <b-form-group label="Имя" description="Например: Иван">
                <b-form-input id="name" v-model="body.name" type="text" placeholder="Введите имя" required/>
              </b-form-group>
              <b-form-group label="Какое количество счетчиков нужно поверить?">
                <b-form-radio-group type="radio" v-model="body.counter" id="radios" name="radioCounter" :options="options" required/>
              </b-form-group>
              <b-form-group label="Номер телефона" description="Например: 8 (999) 999-99-99">
                <b-form-input
                id="phone"
                type="text"
                v-model="body.phone"
                v-mask="'# (###) ###-##-##'"
                placeholder="Например: 8 (932) 111-23-44"
                pattern=".{17}"
                required/>
              </b-form-group>
              <div class="center">
                <b-button
                id="btn_order"
                type="submit"
                class="btn_cube btn_md"
                variant="warning">Заказать</b-button>
              </div>
            </b-form>
            <div class="ok" v-bind:class="{ hidden: hidden }">
              <p class="ok_order"> Спасибо! Заявка принята</p>
              <p class="ok_manage">Менеджер свяжеться с Вами в течении 5 минут</p>
            </div>
            <div slot="modal-footer">
              <p style="color:red">{{errors}}</p>
            </div>
          </b-modal>
        </div>
        <div class="badge">
          <div class="badge_top">за 20 минут</div>
          <strong>от 450 р</strong>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      body: {
        name: '',
        phone: '',
        counter: ''
      },
      errors: '',
      active: false,
      hidden: true,
      options: [
        { text: 'Один', value: 'Один'},
        { text: 'Два', value: 'Два'},
        { text: 'Три', value: 'Три'},
        { text: 'Четыре', value: 'Четыре'},
      ]
    }
  },
  methods: {
    postCheck() {
      document.getElementById('btn_order').disabled = true;
      document.getElementById('btn_order').innerHTML = 'Подождите...';
      axios.post('http://88.212.253.194:3041/check', this.body, {
      })
      .then(response => {
        this.active=true,
        this.hidden=false,
        this.btn=false,
        document.getElementById('btn_order').innerHTML = 'Отправить';
        document.getElementById('btn_order').disabled = false;
      })
      .catch(error => {
        this.errors= 'Произошла ошибка, попробуйте еще раз',
        document.getElementById('btn_order').innerHTML = 'Отправить';
        document.getElementById('btn_order').disabled = false;
      })
    }
  }
}
</script>


<style>
  .banner {
    background-image: url(~assets/header-bg.jpg);
    height: 36.6666666667rem;
    background-size: cover;
    background-position: center center;
    position: relative;
  }
  .cont {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .banner_title {
    font-size: 4.5rem;
    color: #fff;
    font-weight: bold;
    line-height: 4.6666666667rem;
    padding-top: 5.3333333333rem;
  }
  .banner_text {
    display: block;
    color: #fff;
    font-size: 1.3333333333rem;
    font-weight: 300;
    line-height: 1.3;
    margin-top: 1rem;
  }
  .btn_cube {
    border-radius: 0;
  }
  .center {
    text-align: center;
  }
  @media (min-width: 1024px) {
    .badge {
      width: 11.3333333333rem;
      height: 11.3333333333rem;
      padding-top: 3.6666666667rem;
      background-color: #fdaf0f;
      border-radius: 13.3333333333rem;
      position: absolute;
      left: 51rem;
      top: 16.3333333333rem;
      text-align: center;
      line-height: 1.2;
      color: #fff;
      font-size: 1.8666666667rem;
    }
    .badge_top {
      font-size: 1.4666666667rem;
      font-weight: bold;
    }
    .btn_lg {
      padding: 16px 32px;
      font-size: 1.7rem;
      line-height: 1.5;
      margin-left: 30rem;
      margin-top: 1rem;
    }
  }
  @media (min-width: 768px) {
    .banner_title_small {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .banner_title_small {
      color: white;
    }
    .badge {
      display: none;
    }
    .btn_lg {
      padding: 16px 32px;
      font-size: 1.7rem;
      line-height: 1.5;
      margin-top: 1rem;
    }
    .banner {
      height: auto;
    }
    .mobil {
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 425px) {
    .baner-padding {
      padding-top: 3rem;
    }
    .btn_cube {
      margin-top: 1rem;
    }
    .banner_title {
      display: none;
    }
    .cont {
      text-align: center;
    }
  }
</style>
