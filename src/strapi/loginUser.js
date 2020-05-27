import Axios from 'axios'
import URL from '../utils/URL'

async function loginUser({email, password}) {
    
    const response = await Axios
    .post(`${URL}/auth/local`, {
        identifier: email,
        password
    })
    .catch(error=>console.log(error))
    return response;
}

export default loginUser

























// async function loginUser({
//     email,
//     password
// }) {
//     const response = await Axios
//         .post(`${URL}/auth/local`, {
//             identifier: email,
//             password
//         })
//         .catch(error => console.log(error))
//     return response;

// }

// export default loginUser
