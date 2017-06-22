'use strict'
const express = require('express')
const app = express()
const request = require('request')
const PriceServices = require('./Services/PriceServices')
const fs = require('fs')
const http = require('http')
let io = require('socket.io-client')
const socket = io('wss://streamer.cryptocompare.com')

let subscription = ['2~BitFinex~BTC~USD','2~Coinbase~BTC~USD','2~Coinone~BTC~KRW','2~Kraken~BTC~USD','2~OKCoin~BTC~CNY','2~BitTrex~BTC~USD','2~BTCC~BTC~CNY','2~Korbit~BTC~KRW',
'2~Kraken~ETH~BTC','2~Poloniex~ETH~BTC','2~BitTrex~ETH~BTC','2~Yunbi~ETH~CNY','2~Coinbase~ETH~USD','2~OKCoin~ETH~CNY','2~Korbit~ETH~KRW',
'2~BitTrex~XMR~BTC','2~Poloniex~XMR~BTC','2~Bitfinex~XMR~BTC','2~Kraken~XMR~BTC',
'2~Yunbi~ANS~BTC','2~BitTrex~ANS~BTC',
'2~BitTrex~XRP~BTC','2~Coinone~XRP~KRW','2~Poloniex~XRP~BTC'
]

socket.emit('SubAdd', {subs:subscription} );

socket.on('m', function (data) {
  fs.appendFile('./dump.txt', `${data}|`, function (err) {
  if (err) throw err;
});
  });

//PriceServices.getPrices()
//PriceServices.getAllCoinMetaInfo()
