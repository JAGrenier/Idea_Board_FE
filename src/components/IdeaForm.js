import { Component } from 'react'

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
                    <input value={this.state.title} name="title" id="title" type="text" onChange={this.updateIdea}></input>
                    <label htmlFor="category">Category:</label>
                    <input name="category" id="category" onChange={this.updateIdea}></input>
                    {/* needs to be a select */}
                    <label htmlFor="content">Content:</label>
                    <input name="content" id="content" type="text" onChange={this.updateIdea}></input>
                    <label htmlFor="date">Date:</label>
                    <input name="date" id="date" type="date" onChange={this.updateIdea}></input>
                    <input type="submit"></input>
                </form>
                
            </section>
        )
    }
}
