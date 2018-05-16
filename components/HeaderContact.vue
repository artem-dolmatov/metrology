<template>
  <b-row class="wrap">
    <b-col>
      <span class="logo_img">
        <img src="~assets/logo.png" alt="МЦСМ">
      </span>
      <span class="logo_text">
        Поверка счетчиков воды
        <br/>
        в Тюмени без снятия
      </span>
    </b-col>
    <b-col>
      <div class="_title">
        <span>Межрегиональный центр <br/> стандартизации и метрологии</span>
      </div>
    </b-col>
    <b-col>
      <div class="time">
        <a href="tel:83452388589" class="tel">8 (3452) 38-85-89</a>
        с 9.00 до 21.00 без выходных!
      </div>
      <b-button v-b-modal.modal-contact class="callback_btn btn_cube" variant="warning">Заказать звонок</b-button>
      <b-modal id="modal-contact" centered title="Заказать звонок">
        <b-form v-bind:class="{ hidden: active }" method="post" v-on:submit.prevent="postCall">
          <b-form-group
            label="Номер телефона"
            description="Например: 8 (999) 999-99-99">
            <b-form-input
              type="text"
              name="name"
              v-model="body.phone"
              v-mask="'# (###) ###-##-##'"
              :masked="masked"
              placeholder="Введите номер"
              pattern=".{17}"
              required/>
          </b-form-group>
          <div class="center">
            <b-button
              id="btn_call"
              type="submit"
              class="btn_cube btn_md"
              variant="warning">
              Отправить
              </b-button>
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
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
import VueTheMask from 'vue-the-mask'
import Vue from 'vue'
Vue.use(VueTheMask)
export default {
  data () {
    return {
      body: {
        phone: ''
      },
      masked: true,
      errors: '',
      active: false,
      hidden: true
    };
  },
  methods: {
    postCall() {
      document.getElementById('btn_call').disabled = true;
      document.getElementById('btn_call').innerHTML = 'Подождите...';
      axios.post('http://88.212.253.194:3041/call', this.body, {
      })
      .then(response => {
        this.active=true;
        this.hidden=false;
        this.btn=false;
        document.getElementById('btn_call').innerHTML = 'Отправить';
        document.getElementById('btn_call').disabled = false;
      })
      .catch(error => {
        this.errors= 'Произошла ошибка, попробуйте еще раз';
        document.getElementById('btn_call').innerHTML = 'Отправить';
        document.getElementById('btn_call').disabled = false;
      })
    }
  }
}
</script>

<style>
.ok {
  text-align: center;
}
.ok_order {
  font-size: 1.5rem;
}
.ok_manage {
  font-size: 1.2rem;
}
.hidden {
  display: none;
}
.wrap {
  padding: 1.8rem 1rem;
}
._title {
  text-align: center;
  font-weight: bold;
}
.logo_img {
  display: block;
  width: 11.5333333333rem;
  margin-right: 1.3333333333rem;
  float: left;
  position: relative;
}
.logo_text {
  margin-top: 0.8rem;
  margin-right: 2.5rem;
}
.time {
  font-size: 0.9333333333rem;
  color: #000;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.tel {
  display: block;
  font-size: 1.6rem;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  line-height: 1.3;
}
.tel:hover {
  color: #000;
  text-decoration: none;
}
.callback_btn {
  margin-left: 1rem;
}
.modal-content {
  border-radius: 0;
}
.modal-footer {
  display: block;
  text-align: center;
}
</style>
