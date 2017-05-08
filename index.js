var express = require('express')
var app = express()
var axios = require('axios');

app.get('/authentication', function (req, res) {
  axios({
    method: 'post',
    url: 'https://getpocket.com/v3/oauth/request',
    headers: {
      "Content-Type": "application/json",
      "X-Accept": "X-Accept: application/json"
    },
    data: {
      "consumer_key": "66712-83b51097408ea6623b30893a",
      "redirect_uri": "pocketapp1234:authorizationFinished"
    }
  })
    .then(response => {
      res.json({"d":"1"});
})
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})