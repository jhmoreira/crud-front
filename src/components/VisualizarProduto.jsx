import React, {Component} from 'react'

class VisualizarProduto extends Component{
    constructor(props){
        super(props)

        this.state={
          id: this.props.match.params.id
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                    <h2>Visualizar</h2>
            </div>
        )
    }
}
export default VisualizarProduto