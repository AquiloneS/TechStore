import url from '../utils/URL'
import Axios from 'axios'

async function submitOrder({name, total, items, stripeTokenId, userToken}) {
    const response = await Axios
        .post(
            `${url}/orders`,
            { name, total, items, stripeTokenId },
            { headers: { Authorization: `Bearer ${userToken}`}}
        )
        .catch(error=>console.log(error))
    return response;
}

export default submitOrder
