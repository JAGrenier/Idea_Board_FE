import React from 'react'
import Delete from '../images/delete.svg'

export default function IdeaCard({idea, deleteIdea}) {
    

    console.log(idea)
    const handleDelete = () =>{
        deleteIdea(idea.id)
    }
    
    const categoryColors = () =>{
     
        switch (idea.category) {
            case "Home":
                return "idea-card-home";
            case "App":
                return  "idea-card-app";
            case "Travel":
                return  "idea-card-travel";
            case "Food":
                return  "idea-card-food";
            case "gettingOutside":
                return  "idea-card-getting-outside";           
            default:
                return"idea-card-other";
        }               
    }
    return (
        <div className={categoryColors()}>
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
