import React, { Component } from 'react';
import { connect } from "react-redux"

import FormTodo from "./components/FormTodo"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"
import Footer from "./components/Footer"

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">

        <h1>To do list</h1>
        <FormTodo />
        <TodoList />
        <Filter />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos,
  visibilityFilter
})

export default connect(mapStateToProps)(App);
