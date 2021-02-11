import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <header>
                <nav className=" nav navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">CRUD JAVA+ REACT.JS - Produtos</div>

                </nav>
            </header>
            </>
        )
    }
}

export default Header