import axios from 'axios'

const URL_BASE = "http://localhost:8080/api/v1/produtos"
class Servidor{

recuperarProdutos(){
    return axios.get(URL_BASE)
}

criaProduto(produto){
    return axios.post(URL_BASE,produto);

}
recuperaProdutoPorId(idProduto){
    return axios.get(URL_BASE + '/' + idProduto);
}
atualizaProduto(produto, idProduto){
    return axios.put(URL_BASE + '/' + idProduto,produto)
}
}

export default new Servidor()