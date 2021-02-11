import logo from './logo.svg';
import './App.css';
import ListaDeProdutos from './components/ListaDeProdutos';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div><Header/>
    
    <div className="container">
     <ListaDeProdutos />
    </div>
    <Footer/>
     </div>
    
  );
}

export default App;
