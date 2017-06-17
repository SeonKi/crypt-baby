const express = require('express')
const app = express()
const request = require('request')
const PriceServices = require('./Services/PriceServices')
const fs = require('fs')
const http = require('http')
let io = require('socket.io-client')
const socket = io('wss://streamer.cryptocompare.com')

let subscription = ['2~Kraken~ETH~BTC','2~Kraken~XMR~BTC','2~Kraken~SC~BTC']

socket.emit('SubAdd', {subs:subscription} );

socket.on('m', function (data) {
  fs.appendFile('./dump.txt', `${data}|`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  });

//PriceServices.getPrices()
//PriceServices.getAllCoinMetaInfo()
