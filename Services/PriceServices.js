'use strict'

const request = require('request')


const currencies = ['ETH','BTC','ANS','SC','XEM','STRAT','XRP','XMR']


const getPrices = function() {
    currencies.map(sym => request(`https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=BTC,USD,EUR`, (error, response, body) => {
            if(!error && response.statusCode == 200){
                console.log(body)
            }
        })
    )}

const getAllCoinMetaInfo = function() {
    request(`https://www.cryptocompare.com/api/data/coinlist/`, (error, response, body) => {
        if(!error && response.statusCode == 200){
            console.log(body)
        }
    })

}


module.exports = {
    getPrices,
    getAllCoinMetaInfo
}
