import React from 'react';
import {GlobalStyle} from "./style";
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./pages/home/home";
import Detail from "./pages/detail/detail";
import Download from "./pages/download/download";
import Login from "./pages/login/login";
import {Icon} from "./static/iconfont/iconfont";
import Writing from "./pages/writing/writing";
import Test from './test'


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle/>
            <Icon/>
            <Route path='/' component={Home} exact/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path='/download' component={Download}/>
            <Route path='/login' component={Login}/>
            <Route path='/writing' component={Writing}/>
            <Route path='/test' component={Test}/>
        </BrowserRouter>
    </Provider>
  )
}

export default App
