import React from 'react';


export class TodoList extends React.Component {
  constructor(){
  	super();
  	this.doneTask = this.doneTask.bind(this);
  	this.removeTask = this.removeTask.bind(this);
  }

  doneTask(e){
  	console.log("tamamlandı");
  }
  
  removeTask(){
	console.log("silindi");
  }

  render() {
  	const items_left = 0;
  	const items = this.props.myTasks.map((elem, i) => {
  		return(
  			<li key={i}>
  			<span className="id">{i+1}</span>
  			<span className="title">{elem}</span>
  			<span className="type" onClick={this.doneTask} />
  			<span className="delete" onClick={this.removeTask} />
  			</li>
  			)
  	});
    return (
    	<div>
      <div className="todo-list  ">
      	<ul>
      		{items}
      	</ul>
      </div>
      <div className="todo-filter">
      	<div className="left">
      		<span>{items_left} items left</span>
      	</div>
      	<div className="right">
      		<ul>
      			<li><span className="active">All</span></li>
      			<li><span>Active</span></li>
      			<li><span>Completed</span></li>
      		</ul>
      	</div>
      </div>
      </div>
    );
  }
}

