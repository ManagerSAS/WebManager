import axios from "axios"

const END_POINTH = 'https://api.agenciamanager.com.co/'

const cloudinaryApi = axios.create({
    baseURL: END_POINTH,
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export default cloudinaryApi