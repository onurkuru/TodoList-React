import React, { Component } from 'react';

import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';

class App extends Component {
  constructor(){
    super();
    this.state = {myTasks: [
    "Yapılacak ilk iş",
    "film izle",
    "makarna yap",
    "elma soy"
    ]};
    this.addTask = this.addTask.bind(this);
  }

  addTask(val){
    let updatedList = this.state.myTasks;
    updatedList.push(val);  
    this.setState({myTasks: updatedList});
  }
  render() {
  
    return (
      <div className="content">
        <Header />
        <TodoForm addTask={this.addTask}/>
        <TodoList myTasks={this.state.myTasks} />
        <Footer />
      </div>
    );
  }
}

export default App;