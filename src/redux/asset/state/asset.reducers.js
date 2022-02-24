import {
    
    GET_ALL_ASSETS,
    GET_ASSET_DATA
  } from '../../state/actionTypes';


// a reducer, action, and service for getting all assets
//


const initialState = {
    assets:[],
    selectedAsset: {
        // ticker: '',
        // currentPrice: 0,
        // currentSentiment: 0,
        // marketCap: 0,
        // description: '',
        // dateInterval: '',
        // sentimentData: [],
        // assetPrices: [],
    }
}


export default function assetActions(state = initialState, action) {
    switch (action.type) {
  
      case GET_ASSET_DATA: {
        // const {
        //   payload: {
        //     selectedAsset = {},
        //   } = {},
        // } = action;
        const selectedAsset = action.payload.selectedAsset
        
        return {
          ...state,
          selectedAsset

        };
      }

      case GET_ALL_ASSETS: {
        // const {
        //   payload: {
        //       assets = {}
        //   } = {},
        // } = action;
        const assets = action.payload.assets.data;
  
        return {
          ...state,
          assets
        };
      }
      
      default:
        return state;
    }
  }