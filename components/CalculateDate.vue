<template>
  <div class="order">
    <b-row class="justify-content-md-center order-shadow">
      <b-col col lg="11">
        <h3 class="order-title">Узнайте срок поверки вашего водосчетчика</h3>
          <b-row class="justify-content-md-center">
            <b-col col lg="11">
              <b-form>
                <b-form-group label="Тип прибора:">
                  <b-form-radio-group id="date_radio" v-model="selected" :options="options" name="dateRadio"/>
                </b-form-group>
                <b-form-group description="Выберите дату" label="Дата установки или последней поверки счетчика:">
                  <b-form-input 
                    class="input-date"
                    max="2027-04-20"
                    type="date" 
                    name="dateChange"
                    @change="inputDateCheck"
                    required
                    v-model="firstDate"/>
                  <b-button
                  variant="warning"
                  id="btn_dummy"
                  class="btn-check btn_cube btn_md"
                  disabled
                  >
                    Выберите дату
                  </b-button>  
                  <b-button
                    id="btn_date"
                    type="button"
                    class="btn-check btn_cube btn_md"
                    variant="warning"
                    v-on:click="dateCheck"
                    v-b-modal.modal-calculate
                    hidden>Узнать
                  </b-button>
                </b-form-group>
              </b-form>
                <b-modal id="modal-calculate" size="lg" title="Расчет выполнен" centered>
                  <b-row v-bind:class="{ hidden: activeOrders }">
                    <b-col cols="5">
                      <p class="card-text">Следующая поверка вашего счетчика: </p>
                      <p class="card-text">{{ body.verificationDate }} <span class="grey">(осталось дней: {{ day }})</span> </p>
                    </b-col>
                    <b-col cols="7">
                      <b-form method="post" v-on:submit.prevent="postCalculate">
                        <b-form-group label="Введите номер:" description="Уведомление о сроке поверки бесплатно для всех лиц.">
                          <b-form-input
                            class="input-check"
                            type="text" 
                            name="name" 
                            v-model="body.phone" 
                            v-mask="'# (###) ###-##-##'" 
                            placeholder="Например: 8 (999) 999-99-99"
                            pattern=".{17}"              
                            required
                          />                            
                          <b-button
                            id="btn_calculate"
                            type="submit" 
                            class="btn_cube btn_md btn-check" 
                            variant="warning">
                            Отправить
                          </b-button>
                        </b-form-group>
                      </b-form>
                    </b-col>
                  </b-row>                  
                  <div class="ok" v-bind:class="{ hidden: hiddenOrders }">
                    <p class="ok_order"> Спасибо! Ваша Заявка принята</p>
                  </div>
                  <div slot="modal-footer">
                    <p style="color:red">{{errors}}</p> 
                  </div>
                </b-modal>
            </b-col>
          </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
moment.locale('ru');

export default {
  data () {
    return {
      body: {
        verificationDate: '',
        phone: ''
      },
      firstDate: '',
      selected: 'hot',
      day: '',
      errors: '',
      activeOrders: false,
      hiddenOrders: true,
      options: [
        { text: 'Счетчик горячей воды', value: 'hot'},
        { text: 'Счетчик холодной воды', value: 'cold'}
      ]
    }
  },
  methods: {
    dateCheck () {
      if (this.selected == 'hot') {
        var year = 4;
      } else {
        var year = 6;
      }
      var checkDate = moment(this.firstDate);
      var nowDate = moment();
      var dateSubstract = moment(checkDate).subtract('days', 1);
      var dateAdd = moment(dateSubstract).add('years', year);
      this.body.verificationDate = moment(dateAdd).calendar();
      
      var duration = moment.duration(dateAdd.diff(nowDate));
      this.day = Math.round(duration.asDays());
    },
    postCalculate() {
      document.getElementById('btn_calculate').disabled = true;
      document.getElementById('btn_calculate').innerHTML = 'Подождите...';
      axios.post('http://localhost:3331/calculate', this.body, {  
      })
      .then(response => {
        this.activeOrders=true,
        this.hiddenOrders=false,
        this.btn=false,
        document.getElementById('btn_calculate').innerHTML = 'Отправить';
        document.getElementById('btn_calculate').disabled = false;
      })
      .catch(error => {
        this.errors= 'Произошла ошибка, попробуйте еще раз',
        document.getElementById('btn_calculate').innerHTML = 'Отправить';     
        document.getElementById('btn_calculate').disabled = false;
      })
    },
    inputDateCheck() {
      document.getElementById('btn_date').removeAttribute("hidden");
      document.getElementById('btn_dummy').setAttribute("hidden", "hidden");
    }
  }
}
</script>

<style>
.order-shadow {
  margin: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  padding: 3rem;
}
.grey {
  color: grey;
}
.input-date {
  width: 70%;
  float: left;
}
.input-check {
  width: 62%;
  float: left;
}
.btn-check {
  margin-left: 1rem;
}
.order-title {
  border-bottom: 2px solid;
  padding-bottom: 0.5rem;
  text-align: center;
}
</style>


