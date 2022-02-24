import {
    GET_NEWS
  } from '../../state/actionTypes';
import NewsService from './news.service';

 


export const getNews = () => async (dispatch) => {
    // if (!Permissions.permissions.has('USERS_READ')) return false;
    
    const news = await NewsService.get();
    if (!news) return [];
    dispatch({
      type: GET_NEWS,
      payload: {
        news,
      },
    });
    return true;
  };

