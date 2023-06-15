/* eslint-disable no-undef */
import axios from 'axios';

const statusapi = {
  checkStatus: async () => {
    const config = {
      method: 'get',
      url: process.env.VUE_APP_API_URL + '/hygie_back_runner/status',
    };
    
    return axios(config).then(response => {
      if (response.status === 200) {
        return response.status;
      }
    }).catch(error => {
      console.error(error);
      return 500;
    });
  }
}

export default statusapi;
