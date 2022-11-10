
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { Fragment } from 'react';
import Cars from './components/cars';
import Learn from './components/learn';
import Shop from './components/shop';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Switch>
      <Fragment>
      <Cars/>
      <Route path="/learn" element={<Learn/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      </Fragment>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
