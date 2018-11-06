import React, { Component } from 'react';
import  Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
    	// 把store放到最顶层
      <Provider store={store}>
        <div>
          <Header/>
          {/* 要用路由的地方包裹起来 */}
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
