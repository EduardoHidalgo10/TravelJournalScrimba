import React from 'react'
import { TiLocation } from 'react-icons/ti'


export const Travels = ({ item }) => {

    console.log(item.title)

    return (
        <div className='container'>

            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img src={item.imageUrl} />
                    </div>
                    <div class="card-body">
                        <p> <TiLocation size={25} /> <strong>{item.location} </strong><a href={item.googleMapsUrl}>View Location on maps</a></p>
                        <h3>{item.title}</h3>
                        <p>{item.startDate} - {item.endDate}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
