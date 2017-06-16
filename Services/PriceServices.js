const currencies = ['ETH','BTC','ANS','SC','XEM','STRAT','XRP','XMR']


const getPrices = function() {
    currencies.map(sym => request(`https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=BTC,USD,EUR`, (error, response, body) => {
            if(!error && response.statusCode == 200){
                console.log(body)
            }
        })
    )}