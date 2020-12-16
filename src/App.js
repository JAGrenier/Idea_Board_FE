import React, { Component } from 'react'
import './App.css';
import IdeaContainer from './components/IdeaContainer';

export default class App extends Component {
  
  state = {
    ideas: []
  }

  componentDidMount(){
    this.getIdeas()
  } 

  getIdeas = () => {
    fetch('http://localhost:3000/ideas')
      .then(response => response.json())
      .then(ideas => this.setState({
        ideas 
      }))
  }

  deleteIdea = (id) => {
    let filtered = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas: filtered})
    fetch(`http://localhost:3000/ideas/${id}`, {method: "DELETE"})
  }

  render() {

  return (
    <div className="App">
    <h1>My Idea Board</h1>
      <IdeaContainer ideas={this.state.ideas} getIdeas={this.getIdeas} deleteIdea={this.deleteIdea} />
    </div>
  );
}
}
