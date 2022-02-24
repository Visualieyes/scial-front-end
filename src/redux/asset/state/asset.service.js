import axios from 'axios';
import config from '../../../env';


const AssetService = {
  get: async (ticker) => {
    
    console.log(ticker)
    const {data} = await axios.get(`${config.API_URL}/api/data/${ticker}`)
    // let {startMonth, startDay, startYear, endMonth, endDay, endYear, frequency} = [1, 1, 2022, 1, 2, 2022, 1] 
    // const assetPrices = await yahooStockPrices.getHistoricalPrices(startMonth, startDay, startYear, endMonth, endDay, endYear, asset.ticker, frequency)
    console.log(data)
    return data;
  },

  get_all_assets: async () => {
    const {data} = await axios.get(`${config.API_URL}/api/data/all-assets`)
    console.log(data)
    return data;
  },
  
};

export default AssetService;