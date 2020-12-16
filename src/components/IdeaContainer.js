import React from 'react'
import IdeaCard from './IdeaCard'
import IdeaForm from './IdeaForm'

export default function IdeaContainer({ideas, getIdeas, deleteIdea}) {

    const showIdeas = () => ideas.map(idea => <IdeaCard idea={idea} key={idea.id} deleteIdea={deleteIdea} /> )

    return (
        <div>
            <IdeaForm getIdeas={getIdeas}/>
            <div className="idea-container" >{showIdeas()}</div>
        </div>
    )
}
