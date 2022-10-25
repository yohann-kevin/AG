/* eslint-disable no-undef */
// const axios = require('axios');
import axios from 'axios';

const agentapi = {
  findAgentData: async () => {
    const config = {
      method: 'get',
      url: process.env.VUE_APP_API_URL + '/agents',
      headers: { 
        'Authorization': 'Bearer ' + sessionStorage.agttoken
      }
    };
    
    return axios(config).then(response => {
      if (response.status === 200) {
        return response.data;
      }
    }).catch(error => {
      console.log(error);
      throw error;
    });
  }
}

export default agentapi;
