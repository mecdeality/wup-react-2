import React, { Component } from 'react'
import $ from 'jquery'

class DoneTodos extends Component {
  todoDone = (e) => {
    // $('#' + e.target.id).wrapInner('<s />').contents();
    this.props.todoDoneFromParent(Number(e.target.id));
    // $('#' + e.target.id).replaceWith(function(){
    //   return $("<s />", {html: $(this).html()});
    // });
  }

  render() {
    const todos = this.props.states.todos;
    this.anyNotDone = false;
    for(let i = 0; i < todos.length; i++){
      if(todos[i].isDone == true){
        this.anyNotDone = true;
      }  
    }
    const list = this.anyNotDone  ? ( 
      todos.map(todo => {
        if (todo.isDone === true) {
          return (<div className='todo list-group-item bg-info ' key={todo.id}>
            <div className='todo-container d-flex justify-content-between'>
              <div>
                <s className={'font-weight-' + todo.weight} id={todo.id}>{todo.body}</s>
              </div>
              <div>
                <button className='btn btn-info' onClick={() => this.props.todoBack(todo.id)}>
                <i className="fa fa-undo" aria-hidden="true"></i>
                </button>
                <button className='btn btn-info' onClick={() => this.props.deleteTodo(todo.id)}>
                <i className="fa fa-close" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>)
        }
      })
    ) : (
        <div className='list-group-item bg-info'>
          <h6 className='m-0'>There is no nay done todo yet!</h6>
        </div>
    );

    return (
      <div className='content card-body p-0'>
        {list}
      </div>
    );
  }

}

export default DoneTodos;