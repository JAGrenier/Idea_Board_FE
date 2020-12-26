import React from 'react'
import Delete from '../images/delete.svg'

export default function IdeaCard({idea, deleteIdea}) {
    
    
    const handleDelete = () =>{
        deleteIdea(idea.id)
    }

    

    // switch (category) {
    //     case home:
            
    //         break;

    //     case app:

    //         break;

    //     case travel:

    //         break;

    //     case food:

    //         break;

    //     case gettingOutside:
    //         break;

    //     case other:
    //         break;
    
    //     default:
    //         break;
    // }
    return (
        <div className="idea-card">
            <h1>{idea.title}</h1>
            <h2>category: {idea.category}</h2>
            <p>{idea.content}</p>
            <p>Date Added: {idea.date}</p>
            <button className="delete-button">
            <img
                alt="trashcan"
                src={Delete}
                width='20'
                height='20'
                onClick={handleDelete}
            />
            </button>
        </div>
    )
}
