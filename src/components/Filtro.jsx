import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Max from '../assets/Fondos-de-pantalla-Rick-y-Morty-Wallpapers-gratistodo.com-8.jpg'

function Filtro({text, setText}) {


    const handleInputChange = ({target}) =>{
        setText(target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <section className='filtrar'>
            <img src={Max} alt="" style={{width: 1200, height: 500}} className="img-btn"/>
                <figure className='logo'>
                    <img src={Logo} alt="" />
                </figure>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name='buscador' 
                        placeholder='Nombre del personaje' 
                        value={text}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Buscar</button>
                </form>
            </section>
        </div>
    )
}

export default Filtro
