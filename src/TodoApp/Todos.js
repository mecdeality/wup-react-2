import React, { Component } from 'react'
import $ from 'jquery'

class Todos extends Component {
  // $('#' + e.target.id).wrapInner('<s />').contents();
  // $('#' + e.target.id).replaceWith(function(){
  //   return $("<s />", {html: $(this).html()});
  // });

  // bold = (e) => {


  // let id = e.target.id;
  // if ($('#' + id).css('font-weight') == 400) {
  //   $('#' + id).css('font-weight', 700)
  // } else $('#' + id).css('font-weight', 400)
  // console.log($('#' + id).css('font-weight'));

  // }
  render() {
    const todos = this.props.states.todos;
    this.anyNotDone = true;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].isDone == false) {
        this.anyNotDone = false;
      }
    }
    const list = !this.anyNotDone ? (
      todos.map(todo => {
        const classBold = todo.weight === 'bold' ? 'bold' : ' ';
        const toWeight = todo.weight === 'bold' ? 'Normal' : 'Bold';
        if (todo.isDone === false) {
          return (<div className='todo list-group-item bg-info ' key={todo.id}>
            <div className='todo-container d-flex justify-content-between'>
              <div>
                <p className={'font-weight-' + todo.weight} id={todo.id}>{todo.body}</p>
              </div>
              <div>
                <button data-bold='false' id={todo.id} className={'btn btn-info ' + classBold} onClick={() => this.props.toBold(todo.id)}>
                  <i className="fa fa-bold" aria-hidden="true"></i>
                </button>
                <button className='btn btn-info' onClick={() => this.props.todoDoneFromParent(todo.id)}>
                  <i className="fa fa-check" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>)
        }
      })
    ) : (
        <div className='list-group-item bg-info'>
          <h6 className='m-0'>0 work</h6>
        </div>
      );
    return (
      <div className='content card-body p-0'>
        {list}
      </div>
    );
  }

}

export default Todos;