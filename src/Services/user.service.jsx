import { productsapp } from "../Utilities/interceptor"
export const getSingleUser = async (id) => {
    const axiosResponse = await productsapp.get(`https://dummyjson.com/users/${id}`)
    const user = axiosResponse.data
    return user
}