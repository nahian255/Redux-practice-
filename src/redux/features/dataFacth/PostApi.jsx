import axios from "axios"
import axiosInstance from "../../../axios/axios";



const getPost = async () => {
    const respons = await axiosInstance.get('/posts')
    // const data = respons.data
    // console.log(data,respons,'respons')
    return respons.data
}

export default getPost;