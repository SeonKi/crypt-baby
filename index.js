const express = require('express')
const app = express()
const request = require('request')
const PriceServices = require('./Services/PriceServices')
const fs = require('fs')
const http = require('http')
let io = require('socket.io-client')
const socket = io('wss://streamer.cryptocompare.com')

let subscription = ['2~Kraken~ETH~BTC','2~Kraken~XMR~BTC','2~Kraken~SC~BTC','2~Kraken~ANS~BTC','2~Kraken~ANS~BTC','2~Kraken~STRAT~BTC','2~Kraken~BTC~USD','2~Kraken~XEM~BTC',
'2~Yunbi~ETH~CNY','2~Yunbi~SC~CNY','2~Yunbi~ANS~CNY','2~Yunbi~GNT~CNY','2~Yunbi~REP~CNY',
'2~Coinone~ETH~KRW','2~Coinone~BTC~KRW','2~Coinone~XRP~KRW','2~Coinone~ETC~KRW',
'2~OKCoin~LTC~CNY','2~OKCoin~ETH~CNY','2~OKCoin~BTC~CNY',
'2~BitTrex~ETH~BTC','2~BitTrex~XMR~BTC','2~BitTrex~SC~BTC','2~BitTrex~ANS~BTC','2~BitTrex~ANS~BTC','2~BitTrex~STRAT~BTC','2~BitTrex~BTC~USD','2~BitTrex~XEM~BTC',
'2~Poloniex~ETH~BTC','2~Poloniex~XMR~BTC','2~Poloniex~SC~BTC','2~Poloniex~ANS~BTC','2~BitTrex~STRAT~BTC','2~BitTrex~XEM~BTC'
]

socket.emit('SubAdd', {subs:subscription} );

socket.on('m', function (data) {
  fs.appendFile('./dump.txt', `${data}|`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  });

//PriceServices.getPrices()
//PriceServices.getAllCoinMetaInfo()
