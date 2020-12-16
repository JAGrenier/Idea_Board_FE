import React from 'react'
import IdeaCard from './IdeaCard'
import IdeaForm from './IdeaForm'

export default function IdeaContainer({ideas, getIdeas}) {

    const showIdeas = () => ideas.map(idea => <IdeaCard idea={idea} key={idea.id} /> )

    return (
        <div>
            <IdeaForm getIdeas={getIdeas}/>
            <div className="idea-container" >{showIdeas()}</div>
        </div>
    )
}
