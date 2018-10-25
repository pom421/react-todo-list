import React, { Component } from 'react';

import FormTodo from "./components/FormTodo"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"
import Footer from "./components/Footer"


import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./redux/reducers"

import './App.css';

const store = createStore(reducers)

class App extends Component {

  static style = { margin: "10px 30px", padding: "30px", border: "1px solid grey", display: "flex", flexDirection: "column", alignItems: "center" }

  render() {

    return (
      <Provider store={store}>
        <div style={{...App.style}}>
          <h1>To do list</h1>
          <FormTodo />
          <TodoList />
          <Filter />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
