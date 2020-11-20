import React from 'react'
import IdeaCard from './IdeaCard'
import IdeaForm from './IdeaForm'

export default function cardContainer() {
    return (
        <div>
            <h1>container for ideas</h1>
            <IdeaCard />
            <IdeaForm />
        </div>
    )
}
