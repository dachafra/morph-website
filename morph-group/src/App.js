import React from 'react';
import Route from 'react-router-dom/Route'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import 'antd/dist/antd.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'

//Enabling Tooltips:
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    );
  }
}

export default App;
