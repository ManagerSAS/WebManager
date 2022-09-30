import ManagerosApi from '../Api/ApiManager'

const forms = '/api/v1/forms'

export default {
    async SendBriefDesarrolloWeb( data ){
        const response = await ManagerosApi.post( forms + '/BriefDesarrolloWeb', data)
        return response
    },
}