import React from 'react'

export default function IdeaForm() {
    return (
        <section >
            <h2>Have a new idea? Add it here!</h2>
            <form className="new-idea-form">
                <label htmlFor="title">Title:</label>
                <input name="title" id="title" type="text"></input>
                <label htmlFor="category">Category:</label>
                <input name="category" id="category"></input>
                {/* needs to be a select */}
                <label htmlFor="content">Content:</label>
                <input name="content" id="content" type="text"></input>
                <label htmlFor="date">Date:</label>
                <input name="date" id="date" type="date"></input>
                <input type="submit"></input>
            </form>
            
        </section>
    )
}
