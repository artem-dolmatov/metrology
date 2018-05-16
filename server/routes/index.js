var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/call', function(req, res){
  var api_key = 'key-430a017b2d04af9af2d9cfd80e7a2c08';
  var domain = 'sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'metrology.site <postmaster@sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org>',
    to: 'tmn-as72@yandex.ru',
    subject: 'Заказ звонка',
    html: "Номер телефона: " + req.body.phone
  };

  mailgun.messages().send(data, function (error, body) {
    if(!error)
      res.send("Mail Sent");
    else
      res.send("Mail not sent")
  });
});

router.post('/check', function(req, res){
  var api_key = 'key-430a017b2d04af9af2d9cfd80e7a2c08';
  var domain = 'sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'metrology.site <postmaster@sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org>',
    to: 'tmn-as72@yandex.ru',
    subject: 'Заказ Поверки',
    html: "Имя: " + req.body.name + " <br /> " +
    "Количество счетчиков: " + req.body.counter + " <br /> " +
    "Номер телефона: " + req.body.phone
  };

  mailgun.messages().send(data, function (error, body) {
    if(!error)
      res.send("Mail Sent");
    else
      res.send("Mail not sent")
  });
});

router.post('/calculate', function(req, res){
  var api_key = 'key-430a017b2d04af9af2d9cfd80e7a2c08';
  var domain = 'sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'metrology.site <postmaster@sandboxc1a42f17212546f1b27b27d149b04546.mailgun.org>',
    to: 'tmn-as72@yandex.ru',
    subject: 'Расчет даты поверки',
    html: "Номер телефона: " + req.body.phone + "<br/>" +
    "Дата следующей поверки: " + req.body.verificationDate
  };

  mailgun.messages().send(data, function (error, body) {
    if(!error)
      res.send("Mail Sent");
    else
      res.send("Mail not sent")
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
