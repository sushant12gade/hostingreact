import React from 'react'
import Featured from './Featured'
import Fotter from './Fotter'
import Herosection from './Herosection'
import Services from './Services'
import Navbar from './Navbar'
import About from './About'

function Home() {
    return (
        <div>
            
            <Herosection/>
            <About/>
            <Featured/>
            <Services/>
            <Fotter/>
            
        </div>
    )
}

export default Home
