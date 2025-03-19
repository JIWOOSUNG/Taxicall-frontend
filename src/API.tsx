import axios from "axios";

const instance =axios.create({
    baseURL : 'http://172.30.67.187:3333',
    timeout : 10000
})

export default {
    test() {
        return instance.get('/taxi/test')
    },

    login(id:string, pw:string) {
        return instance.post('/taxi/login', {userId: id, userPw: pw})
    }


}