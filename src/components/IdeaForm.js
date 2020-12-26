import { Component } from 'react'

const BackURL = "http://localhost:3000/ideas"

export default class IdeaForm extends Component {

    state = {
        newIdea: {
            title: "",
            category: "",
            content: "",
            date: ""
        }
    }

    addNewIdea = (event) => {
        event.preventDefault()
        fetch(BackURL, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body:JSON.stringify({
                title: this.state.newIdea.title,
                category: this.state.newIdea.category,
                content: this.state.newIdea.content,
                date: this.state.newIdea.date
            })
        })
        this.props.getIdeas()
        
    }

    updateIdea = (event) => {
        const key = event.target.name
        const value = event.target.value

        this.setState(state => {
            state.newIdea[key] = value
            return state
        })
    }
    
    render(){
        return (
            <section >
                <h2>Have a new idea? Add it here!</h2>
                <form className="new-idea-form" onSubmit={this.addNewIdea}>
                    <label htmlFor="title">Title:</label>
                    <input 
                        value={this.state.title} 
                        name="title"
                        id="title"
                        type="text" 
                        onChange={this.updateIdea}
                    ></input>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" onChange={this.updateIdea}>
                        <option selected disabled>Select Category</option>
                        <option value={this.state.category}>Home</option>
                        <option value={this.state.category}>App</option>
                        <option value={this.state.category}>Travel</option>
                        <option value={this.state.category}>Food</option>
                        <option value={this.state.category}>Getting Outside</option>
                        <option value={this.state.category}>Other</option>
                    </select>
                    <label htmlFor="content">Content:</label>
                    <input 
                        name="content" 
                        id="content" 
                        type="text" 
                        onChange={this.updateIdea}
                    ></input>
                    <label htmlFor="date">Today's Date:</label>
                    <input 
                        name="date" 
                        id="date" 
                        type="date" 
                        onChange={this.updateIdea}
                    ></input>
                    <input type="submit"></input>
                </form>
                
            </section>
        )
    }
}
