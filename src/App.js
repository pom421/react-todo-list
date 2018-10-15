import React, { Component } from 'react';
import './App.css';

import FormTodo from "./components/FormTodo"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

function* generateId(i = 0) {
  while (true) {
    yield i++
  }
}

class App extends Component {

  state = {
    todos: [
      {
        id: 0,
        title: "ejzroize",
        completed: false
      },
      {
        id: 1,
        title: "azeaze",
        completed: false
      },
      {
        id: 3,
        title: "bbbb",
        completed: false
      }
    ],
    visibilityFilter: "ALL"
  }

  constructor(props) {
    super(props)
    this.generatorId = generateId(4)
  }

  componentDidMount() {
    this.setVisibility("ALL")
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, {
        id: this.generatorId.next().value,
        title: todo,
        completed: false
      }]
    })
  }

  toggleTodo(id) {
    const index = this.state.todos.findIndex(todo => todo.id === id)
    let newTodo = {
      ...this.state.todos[index]
    }

    newTodo.completed = !newTodo.completed

    this.setState({
      todos: [...this.state.todos.slice(0, index),
        newTodo,
      ...this.state.todos.slice(index + 1)
      ]
    })
  }

  setVisibility(v) {
    this.setState({
      visibilityFilter: v ? v.toUpperCase() : "ALL"
    })
  }

  render() {
    return (
      <div className="App">

        <h1>To do list</h1>
        <FormTodo handleSubmit={(todo) => this.addTodo(todo)} />
        <TodoList todos={this.state.todos} visibility={this.state.visibilityFilter} toggleTodo={(id) => this.toggleTodo(id)} />
        <Filter value={this.state.visibilityFilter} setVisibility={(v) => this.setVisibility(v)} />

      </div>
    );
  }
}

export default App;
