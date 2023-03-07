import React, {Component} from 'react';
import './App.css';
import MainPage from './Components/Pages/Home/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewPage from './Components/Pages/View/ViewPage';
import SignIn from './Components/Auth/SignIn/SignIn';
import SignUp from './Components/Auth/SignUp/SignUp';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" class="h-screen">
        <Header />
        <Switch>
          <Route path='/view/:id' component={ViewPage} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route path='/' component={MainPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
