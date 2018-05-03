import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends React.Component {

    state = {
            todos: [
                {name: 'Go shopping', isFinished: false},
                {name: 'Cook', isFinished: false},
                {name: 'Eat', isFinished: false},
                {name: 'Code!', isFinished: false},
                {name: 'Code!', isFinished: false}
            ]
        };

    addTask = (title) => {
        const newTodo = { name: title, isFinished: false };
        this.setState( { todos: [...this.state.todos, newTodo]});
    };



  render() {
    return(
        <React.Fragment>
            {this.state.todos.map(todo => <Todo name={todo.name} isFinished={todo.isFinished}/>)}
            <Todo />
            <AddTodo onAdded={this.addTask}/>
        </React.Fragment>
  )
  }
}

export default App;
