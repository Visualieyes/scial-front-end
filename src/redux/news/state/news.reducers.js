import { sentimentData } from '../../../data/sampleData';
import {
    GET_NEWS
  } from '../../state/actionTypes';


// a reducer, action, and service for getting all assets
//


const initialState = {
    news:[]
}


export default function assetActions(state = initialState, action) {
    switch (action.type) {
  
      case GET_NEWS: {
        // const {
        //   payload: {
        //     selectedAsset = {},
        //   } = {},
        // } = action;
        const news = action.payload.news
        console.log({news})
        
        return {
          ...state,
          news

        };
      }
      
      default:
        return state;
    }
  }