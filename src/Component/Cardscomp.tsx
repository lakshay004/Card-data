import React, { useEffect, useState } from 'react'
import './Cardscomp.css';

export const Cardscomp = ({ elem, handlechange }: any) => {
    const [active, setactive] = useState(false)


    useEffect(() => {
        elem = { ...elem, ...{ 'active': active } }
    }, [active])


    elem = { ...elem, ...{ 'active': active } }

    console.log('carddata -', elem)

    return (
        <div className='card_container'>
            <div className='card_container_heading heading1'>
                <h4>Full Name</h4>
                <span>{`${elem.first_name} ${elem.last_name}`}</span>
            </div>
            <div className='card_container_heading heading1'>
                <h4>Profession</h4>
                <span>{elem.profession}</span>
            </div>
            <div className='card_container_heading heading1'>
                <h4>Age</h4>
                <span>{elem.age}</span>
            </div>
            <div className='card_container_heading favoritesong heading1'>
                <h4>Favorite Name</h4>
                <span>{elem.favorite.song}</span>
            </div>
            <div className='card_container_image'>
                <img src={elem.image} />
            </div>
            <div className='card_container_heading'>
                {!elem.active ? <button onClick={() => { handlechange(elem = { ...elem, ...{ 'active': true } }); setactive(true); }}>Activate</button> : <button onClick={() => { handlechange(elem = { ...elem, ...{ 'active': false } }); setactive(false); }} >De-Activate</button>}
            </div>

        </div>
    )
}
