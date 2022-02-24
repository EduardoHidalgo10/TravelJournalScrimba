import React from 'react'
import { Travels } from './travels'
import data from '../data/data'

export const MainContent = () => {

    return (
        <div>

            {
                data.map(dat => (
                    <Travels
                        item={dat}
                    />
                ))

            }

        </div>
    )
}
