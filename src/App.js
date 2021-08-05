import React from 'react';
import './css/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CustomProvider from './context/CustomProvider';

function App() {
  return (
    <div className='container'>
      <CustomProvider>
        <BrowserRouter>
          <NavBar/>
            <Switch>
              <Route exact path = {'/'} component = {ItemListContainer}/>  
              <Route exact path = {'/categoria/:categoryID'} component = {ItemListContainer}/>  
              <Route exact path = {'/item/:id'} component = {ItemDetailContainer}/> 
              <Route exact path={'/cart'} component={Cart}/> 
            </Switch>
        </BrowserRouter>
      </CustomProvider>
    </div>
  )
}

export default App;
