import React, { Component } from 'react';
import  Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
    	// 把store放到最顶层
      <Provider store={store}>
        <Header/>
      </Provider>
    );
  }
}

export default App;
