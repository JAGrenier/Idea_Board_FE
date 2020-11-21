import React, { Component } from 'react'
import './App.css';
import CardContainer from './components/CardContainer';

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
    <h1>Put your Ideas in here!</h1>
      <CardContainer ideas={this.state.ideas} />
    </div>
  );
}
}
