/* eslint-disable no-undef */
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
      this.$hygie.logger.error(error);
      throw error;
    });
  }
}

export default agentapi;
