import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import ItemPage from './ItemPage/ItemPage';
import AddToCartPage from './AddToCartPage/AddToCartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Header} exact />
        <Route path='/' component={ItemPage} exact />
        <Route path='/addToCartPage' component={AddToCartPage} />
         {/* <Header/>
         <ItemPage/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
