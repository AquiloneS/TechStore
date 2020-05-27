import url from '../utils/URL'
import Axios from 'axios'

async function registerUser ({username, email, password}){
    
    const response = await Axios

    .post(`${url}/auth/local/register`, {
        username,
        email,
        password
    })
    
    .catch(error=>console.log(error))

    return response
    }

export default registerUser;





























// async function registerUser ({email,password,username}){
//     const response = await Axios
//     .post(`${url}/auth/local/register`, {username,email,password})
//     .catch(error=>console.log(error));

//     return response;
//     }

// export default registerUser;