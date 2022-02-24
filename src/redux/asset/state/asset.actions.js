import {
    GET_ALL_ASSETS,
    GET_ASSET_DATA
  } from '../../state/actionTypes';
import AssetService from './asset.service';

 


export const getAssetData = (ticker) => async (dispatch) => {
    // if (!Permissions.permissions.has('USERS_READ')) return false;
    console.log(ticker)
    const selectedAsset = await AssetService.get(ticker);
    dispatch({
      type: GET_ASSET_DATA,
      payload: {
        selectedAsset,
      },
    });
    return true;
  };

export const getAllAssets = () => async (dispatch) => {
    // if (!Permissions.permissions.has('USERS_READ')) return false;
    const assets = await AssetService.get_all_assets();
    if (!assets) return [];
    console.log(assets)
    dispatch({
      type: GET_ALL_ASSETS,
      payload: {
        assets,
      },
    });
    return true;
  };