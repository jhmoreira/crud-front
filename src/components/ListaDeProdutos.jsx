import React, {Component} from 'react'
import Servidor from '../services/Servidor'

class ListaDeProdutos extends Component{

    constructor(props){
        
        super(props)

        this.state={
            produtos:[]
        }
    }
    componentDidMount(){
            Servidor.recuperarProdutos().then((response)=>{

                    this.setState({produtos: response.data});
            });
    }
    render(){
        return(
        <>
            <h2 className="text-center"> Lista de Produtos</h2>

            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.map(
                                produtos=>
                                <tr key={produtos.id}>
                                    <td>{produtos.id}</td>
                                    <td >{produtos.nomeProduto}</td>
                                    <td >{produtos.descricaoProduto}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </>
        )
    }

}

export default ListaDeProdutos