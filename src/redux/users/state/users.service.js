import axios from 'axios';
import config from '../../../env';


const UserService = {
  create: async ({name, username, email, password}) => {
    const user = {
      "name": name,
      "username": username,
      "email": email,
      "password": password
    }
    console.log(user)
    const {data} = await axios.post(`${config.API_URL}/api/users/register`, user)
    return data;
  },
  
};

export default UserService;
