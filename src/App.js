import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import ItemPage from './ItemPage/ItemPage';
import AddToCartPage from './AddToCartPage/AddToCartPage';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Route path='/'  render={() => (<Header wantCart={true} />)} exact />
        <Route path='/' component={ItemPage} exact />
        <Route path='/addToCartPage' component={AddToCartPage} />
         {/* <Header/>
         <ItemPage/> */}
      </div>
      </BrowserRouter>
  );
}

export default App;
