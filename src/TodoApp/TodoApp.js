import React, { Component } from 'react'
import Todos from './Todos'
import DoneTodos from './doneTodos'
import TodoAdd from './TodoAdd'

class TodoApp extends Component {
  state = {
    // done: false,
    todos: [
      { id: 1, body: 'First Todo', isDone: false, weight: 'normal' },
      { id: 2, body: 'Second Todo', isDone: false, weight: 'normal' }
    ],
    isDonePage: false
  }
  toBold = (id) => {
    const updatedState = this.state.todos.map((todo) => {
      let bold = todo.weight === 'normal';
      if (todo.id === id) return { ...todo, weight: bold ? 'bold' : 'normal' }
      return todo;
    })
    this.setState({ todos: updatedState });
  }

  todoDoneFromParent = (id) => {
    const updatedState = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: true
        }
      }
      return item;
    });
    this.setState({ todos: updatedState });
  }
  todoBack = (id) => {
    const updatedState = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: false
        }
      }
      return item;
    });
    this.setState({ todos: updatedState });
  }
  doneTodosList = () => {
    this.setState({
      ...this.state,
      isDonePage: true
    })
  }
  notDoneTodosList = () => {
    this.setState({
      ...this.state,
      isDonePage: false
    })
  }
  todoAdd = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({ todos })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ ...this.state, todos }); 
  }
  render() {
    const page = this.state.isDonePage ? (
      <DoneTodos states={this.state} deleteTodo={this.deleteTodo} todoBack={this.todoBack}></DoneTodos>
    ) : (
        <Todos states={this.state} toBold={this.toBold} todoDoneFromParent={this.todoDoneFromParent}></Todos>
    );
    return (
      <div className='w-25'>
        <div className="allTodos card text-white bg-danger">
          <div className='todo-top card-header text-center'>
            <h5 className='m-0'>You have to do - </h5>
          </div>
          {page}
          <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Action
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={this.notDoneTodosList}> Not Done</button>
              <button className="dropdown-item" onClick={this.doneTodosList}>Done</button>
            </div>
          </div>
        </div>
        <TodoAdd todoAdd={this.todoAdd} />
      </div>
    );
  }
}
export default TodoApp;