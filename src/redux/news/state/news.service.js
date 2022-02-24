import axios from 'axios';
import config from '../../../env';


const NewsService = {
  get: async () => {
    
    // var url = 'https://newsapi.org/v2/top-headlines?' +
    //         'catgory=business&' +
    //         'apiKey=7cbddedda9a44ac7874f011730f5c1ef';
    // const {BusinessNews} = await axios.get(url)

    
    // const news = concat(BusinessNews)
    const {data} = await axios.get(`${config.API_URL}/api/news/all`)

    return data;
  },

  
  
};

export default NewsService;