import React from 'react'
import IdeaCard from './IdeaCard'
import IdeaForm from './IdeaForm'

export default function cardContainer({ideas}) {

    const showIdeas = () => ideas.map(idea => <IdeaCard idea={idea} key={idea.id} /> )

    return (
        <div>
            <h1>container for ideas</h1>
            {showIdeas()}
            <IdeaForm />
        </div>
    )
}
