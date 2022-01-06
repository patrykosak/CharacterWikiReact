import React from 'react'
import FilterButton from '../FilterButton';

const Species = () => {
    const species = ["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet",];
    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Species
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
              {species.map((item,index)=>(
                  <FilterButton key={index} name="species" item={item} index={index} />
              ))}
          </div>
        </div>
      </div>
    )
}

export default Species
