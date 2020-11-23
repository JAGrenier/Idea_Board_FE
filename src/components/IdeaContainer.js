import React from 'react'
import IdeaCard from './IdeaCard'
import IdeaForm from './IdeaForm'

export default function cardContainer({ideas}) {

    const showIdeas = () => ideas.map(idea => <IdeaCard idea={idea} key={idea.id} /> )

    return (
        <div>
            <IdeaForm />
            <div className="idea-container" >{showIdeas()}</div>
        </div>
    )
}
