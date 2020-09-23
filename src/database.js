import axios from 'axios';

const baseurl = 'https://idf-api.azurewebsites.net';
const addData = (object) => {
    axios.post(`${baseurl}/database/add`, {
        database: 'miniprojects',
        collection: 'sukotquiz',
        object,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
}
const getData = (phone) => {
    return new Promise(resolve => {
        axios.post(`${baseurl}/database/get`, {
            database: 'miniprojects',
            collection: 'sukotquiz',
            query: {
                phone: phone
            }
          })
          .then(function (response) {
            resolve(response.data);
            
          })
          .catch(function (error) {
            console.log(error);
        });
    })
}

export default {addData, getData};