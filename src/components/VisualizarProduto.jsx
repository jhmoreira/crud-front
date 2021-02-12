import React, {Component} from 'react'
import Servidor from '../services/Servidor'
import ListaDeProdutos from './ListaDeProdutos'

class VisualizarProduto extends Component{
    constructor(props){
        super(props)

        this.state={
          id: this.props.match.params.id,
          produto:{

          }
        }
    }
    componentDidMount(){
        Servidor.recuperaProdutoPorId(this.state.id).then(res=>{
            this.setState({produto: res.data});
        })
        
    }
    render(){
        return(
            <div>
                <br/> <br/>
               <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Visualiza Produto</h3>
                    <div className="card-body">
                        <div className="row">
                            <label >Nome do Produto</label>
                            <div>{this.state.produto.nomeProduto}</div>
                        </div>
                        <div className="row">
                            <label >Descrição do Produto</label>
                            <div>{this.state.produto.descricaoProduto}</div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
export default VisualizarProduto