const axios = require('axios');

const adminapi = {
  findAdminData: async () => {
    const config = {
      method: 'get',
      url: process.env.VUE_APP_API_URL + '/administrators',
      headers: { 
        'Authorization': 'Bearer ' + sessionStorage.admtoken
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

export default adminapi;
