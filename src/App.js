import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import ToDoList from './ToDoList'
import Form from './Form'
import Categories from './Categories'
class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    filteredTasks: [] 
  }
  componentDidMount(){
    this.setState({filteredTasks: this.state.tasks})
  }

  handleFormSubmit = (e, task) => {
    e.preventDefault() 
    this.setState(pS => ({tasks: [...pS.tasks, task]}), this.resetFilteredTasks)
  } 
  handleDelete = (task_index) => {
    const tasks = [...this.state.tasks] 
    tasks.splice(task_index, 1)
    this.setState({tasks})
  }
  handleCategoryFilter = (category) => {
    const filteredTasks = category === "All" ? [...this.state.tasks] : this.state.tasks.filter(task => task.category === category)
    this.setState({filteredTasks})
  } 
  resetFilteredTasks = () => {
    this.setState({filteredTasks: this.state.tasks})
  }
  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories handleCategoryFilter={this.handleCategoryFilter}/>
        <Form handleFormSubmit={this.handleFormSubmit}/>
        <div className="tasks">
          <ToDoList handleDelete={this.handleDelete} tasks={this.state.filteredTasks} />
        </div>
        {/* <ToDoList handleDelete={this.handleDelete} tasks={this.state.tasks} /> */}
      </div>
    );
  }
}


export default App;
