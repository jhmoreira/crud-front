import React, {Component} from 'react'
import Servidor from '../services/Servidor';


class AtualizaProduto extends Component{

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
               nomeProduto:'',
               descricaoProduto:''
        }
        this.adicionaNome= this.adicionaNome.bind(this);
        this.adicionaDescricao= this.adicionaDescricao.bind(this);
        this.atualizaProduto=this.atualizaProduto.bind(this);
    }
    componentDidMount(){
        Servidor.recuperaProdutoPorId(this.state.id).then((res)=>{
            let produto = res.data;
            this.setState({nomeProduto: produto.nomeProduto,
            descricaoProduto: produto.descricaoProduto})
        });
    }
    atualizaProduto=(e)=>{
        e.preventDefault();
      
         let produto={nomeProduto: this.state.nomeProduto, descricaoProduto: this.state.descricaoProduto};
         console.log('produto =>'+ JSON.stringify(produto));
    Servidor.atualizaProduto(produto,this.state.id).then(res =>{

        this.props.history.push('/produtos');
    })
        
      
    }
    adicionaNome = (event)=>{
        this.setState({nomeProduto: event.target.value})
    }

    adicionaDescricao = (event)=>{
        this.setState({descricaoProduto: event.target.value})
    }
    cancelar(){
        this.props.history.push('/produtos');
    }
    render(){
        return(
            <div>
              <div className="container">
                  <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">
                              Adiciona Produto
                          </h3>

                          <div className="card-body">
                              <form >
                                 <div className="form-group">
                                     <label> Nome do Produto </label>
                                     <input type="text" name="nomeProduto" placeholder="Digite o nome do produto" value={this.state.nomeProduto} className="form-control" onChange={this.adicionaNome}/>

                                 </div>
                                 <div className="form-group">
                                     <label> Descricao do Produto </label>
                                     <input type="text" name="descricaoProduto" placeholder="Digite a descricao do produto" value={this.state.descricaoProduto} className="form-control" onChange={this.adicionaDescricao}/>
                                     
                                 </div>

                                 <button className="btn btn-success" onClick={this.atualizaProduto}>Atualiza</button>
                                 <button className="btn btn-danger" onClick={this.cancelar.bind(this)} style={{marginLeft:"10px"}}>Cancelar</button>

                            
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default AtualizaProduto