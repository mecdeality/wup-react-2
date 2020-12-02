import React, { Component } from 'react'

class Todos extends Component {
  state = {
    id: null, body: null, isDone: null, weight: null 
  }
  handleChange = (e) => {
    this.x = e.target.value;
    let id = Math.random();
    this.setState({
      id, body: this.x, isDone: false, weight: 'normal'
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let bool = this.x !== undefined && this.x.length !== 0;
    if (this.state.id !== null && bool) this.props.todoAdd(this.state)
    this.setState({
      id: null,
      content: null
    })
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='w-100'>
        <div className="input-group mt-3">
          <input onChange={this.handleChange} type="text" className="form-control inp-add" placeholder="Add a Todo" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
          <div className="input-group-append">
            <button onSubmit={this.handleSubmit} className="btn btn-outline-danger" type="submit" value='&#xf067'><i className="fa fa-plus" style={{ fontWeight: 'bold' }} aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    )
  }
}

export default Todos;