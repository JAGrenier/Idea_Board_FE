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

  render() {

  return (
    <div className="App">
    <h1>My Idea Board</h1>
      <IdeaContainer ideas={this.state.ideas} getIdeas={this.getIdeas} />
    </div>
  );
}
}
