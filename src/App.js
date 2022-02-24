import React from 'react'
import { MainContent } from './Components/MainContent'
import { Navbar } from './Components/navbar'

export const App = () => {
    return (
        <div>
            <Navbar />
            <div className=''>

                <MainContent />

            </div>

        </div>
    )
}
