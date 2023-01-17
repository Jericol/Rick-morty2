import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ResidentInfo({ characters }) {

    if (characters.length === 0) return <p>No se ha encontrado personajes</p>

    return (
        <div className='lista-personajes'>
            {characters.map(character => (
                <div className="personaje">
                    <div className="personaje-header">
                        <div className='estado'>
                            <span className={character.status}></span>
                            <h4>{character.status}</h4>
                        </div>
                    </div>
                    <div className="personaje-body">
                        <figure>
                            <img src={character.image} alt="" />
                        </figure>
                        <h2>{character.name}</h2>
                        <p>{character.species}<span>-</span>{character.gender}</p>
                    </div>
                </div>
            ))}
        </div>
    )


}

export default ResidentInfo;

