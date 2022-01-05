import React from 'react'

const Cards = ({results}) => {

    let display;
    if(results){
        display = results.map((character)=>(     
        <div className='col-4'>
        {character.name}
        </div>)
        )    
}
    else{display = "No Characters Found"}
    return (
        <>
        {display}
        </>
    )
}

export default Cards
