import React from 'react'

export default function IdeaCard({idea}) {
    return (
        <div className="idea-card">
            <h1>{idea.title}</h1>
            <h2>category: {idea.category}</h2>
            <p>{idea.content}</p>
            <p>Date Added: {idea.date}</p>
        </div>
    )
}
