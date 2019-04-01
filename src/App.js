import React, { Component,lazy, Suspense } from 'react';
import Header from './common/Header/index';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadding from './common/Loadding';
import Home from './pages/home';
import { GlobalStyle } from './style.js';
import { Iconfont } from './statics/iconfont/iconfont.js'

const Detail = lazy(() => import('./pages/detail'));
const Login = lazy(() => import('./pages/login'));

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Iconfont />
        <Provider store={store}>
          <BrowserRouter>
            <Suspense fallback={ <Loadding />}>
              <Header></Header>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </Suspense>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
