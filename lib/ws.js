// this monitors shit

const WebSocket = require('ws');
 
const btcWS = new WebSocket('wss://api.gemini.com/v1/marketdata/btcusd');
const ethWS = new WebSocket('wss://api.gemini.com/v1/marketdata/ethusd');

 
btcWS.on('message', function incoming(btcData) {
  console.log('btcData: ', btcData);
})

ethWS.on('message', function incoming(ethData) {
  console.log('ethData: ', ethData);
})