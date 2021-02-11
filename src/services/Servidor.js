import axios from 'axios'

const URL_BASE = "http://localhost:8080/api/v1/produtos"
class Servidor{

recuperarProdutos(){
    return axios.get(URL_BASE)
}
}

export default new Servidor()