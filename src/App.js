import React, {Component} from 'react';
import './App.css';
import MainPage from './Components/Pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPage from './Components/Pages/ViewPage/ViewPage';
import SignIn from './Components/Auth/SignIn/SignIn';

class App extends React.Component {
  state = {
    username: 'aeiou',
    memberType: 'normal'
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainPage />
          <Routes>
            <Route path='/view/:id' element={ViewPage} />
            <Route exact path='/SignIn' element={SignIn} />
            <Route path='/' element={MainPage} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
