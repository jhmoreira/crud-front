import logo from './logo.svg';
import './App.css';
import ListaDeProdutos from './components/ListaDeProdutos';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CriarProduto from './components/CriarProduto';

function App() {
  return (
    <div>
      <Router>
     
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListaDeProdutos}></Route>
              <Route path="/produtos" component={ListaDeProdutos}></Route>
              <Route path="/adiciona-produto" component={CriarProduto}></Route>
            </Switch>
          </div>
          <Footer />
        
      </Router>
    </div>
  );
}

export default App;
