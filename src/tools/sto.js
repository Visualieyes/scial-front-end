const moment = require('moment')
let fs = require('fs');

const monthAgo = moment().subtract(1, 'month')

const now = moment()

function between(min, max) {  
    return Math.random() * (max - min) + min
}
const stockData = []

while (monthAgo < now) {
    const timestamp = monthAgo.format('YYYY-MM-DD hh:mm')
    const y = between(100.32, 112.59).toFixed(2)
    stockData.push({
        y,
        timestamp,
        ticker: 'AAPL'
    })
    if (monthAgo > '05:00'){

    }
    else{
      monthAgo.add(30,'minutes')
    }
    if (monthAgo > now) {
        let data = JSON.stringify({stockData});
  
        fs.writeFile("stockData.json", data, (err) => {
          if (err)
            console.log(err);
          else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
          }
        });
    }
}


