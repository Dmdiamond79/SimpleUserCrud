const axios = require('axios');

const getUser = async () => {
    const { data } = await axios.get('http://localhost:3000/api/user');
    return data;
}
module.exports = getUser;



  