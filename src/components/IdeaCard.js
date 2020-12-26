import React from 'react'
import Delete from '../images/delete.svg'

export default function IdeaCard({idea, deleteIdea}) {
    

    console.log(idea)
    const handleDelete = () =>{
        deleteIdea(idea.id)
    }
    
    const categoryColors = () =>{
     
        if (idea.category === "Home"){

        }
    }
        // var className;
        // switch (idea.category) {
        //     case "Home":
        //        return className="idea-card-home";
    
        //     case "app":
        //         return  "idea-card-app"
                
    
        //     case "travel":
        //         return  "idea-card-travel"
                
    
        //     case "food":
        //         return  "idea-card-food"
                
    
        //     case "gettingOutside":
        //         return  "idea-card-getting-outside"
                
    
        //     default:
        //         return className="idea-card-other"
        //         break;
        // }


//idea.category="home"? "idea-card-home": "idea-card-other"
    return (
        <div className="idea-card-other">
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
