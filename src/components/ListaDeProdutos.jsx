import React, {Component} from 'react'
import Servidor from '../services/Servidor'

class ListaDeProdutos extends Component{

    constructor(props){
        
        super(props)

        this.state={
            produtos:[]
        }
        this.adicionaProduto = this.adicionaProduto.bind(this);
        this.editaProduto=this.editaProduto.bind(this);
        this.deletaProduto=this.deletaProduto.bind(this);


    }
    visualizaProduto(id){
        this.props.history.push(`/visualiza-produto/${id}`)
    }
    deletaProduto(id){
Servidor.deletaProduto(id).then(res=>{
    this.setState({produtos:this.state.produtos.filter(produto=>produto.id!==id)})
})
    }
    editaProduto(id){
        this.props.history.push(`/atualiza-produto/${id}`)
    }
    componentDidMount(){
            Servidor.recuperarProdutos().then((response)=>{

                    this.setState({produtos: response.data});
            });
    }

    adicionaProduto(){

        this.props.history.push('/adiciona-produto');
    }
    render(){
        return(
        <>
            <h2 className="text-center"> Lista de Produtos</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={this.adicionaProduto}>Adiciona Produto</button>
            </div>
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
                                    <td>
                                        <button onClick={()=> this.editaProduto(produtos.id)} className="btn btn-success">Atualiza Produto</button>
                                        <button onClick={()=> this.deletaProduto(produtos.id)} className="btn btn-danger" style={{marginLeft:"10px "}}>Deleta Produto</button>
                                        <button onClick={()=> this.visualizaProduto(produtos.id)} className="btn btn-info" style={{marginLeft:"10px "}}>Visualizar Produto</button>
                                    </td>
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