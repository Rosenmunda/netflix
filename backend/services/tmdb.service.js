import axios from 'axios';
import {ENV_VARS} from '../config/enVars.js';

export const fetchFromTMDB = async (url) => {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization:`Bearer ${ENV_VARS.TMBD_API_KEY}`

        }
      };
      const responce=await axios.get(url, options)
      if (responce.status !== 200) {
        throw new Error('Failed to fetch data from TMDB'+ responce.statusText);
      }
      return responce.data
};