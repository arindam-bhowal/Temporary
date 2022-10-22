import React from 'react'
import './mainResume.scss'

const MainResume = () => {
    return (

        <div className="mainResume">

            <div className="container">
                <h1>Select Resume Templates</h1>
                <div className="card-container">

                    <div className="card">
                        <a href="template4.html"> <img src="./Template-Images/template1.png" alt="" width="300px" height="370px" /> </a>
                    </div>

                    <div className="card">
                        <a href="template1.html"> <img src="Template-Images/template1.png" alt="" width="300px" height="370px" /> </a>
                    </div>

                    <div className="card">
                        <a href="template2.html"> <img src="Template-Images/template2.png" alt="" width="300px" height="370px" /> </a>
                    </div>

                    <div className="card">
                        <a href="template3.html"> <img src="Template-Images/template4.png" alt="" width="300px" height="370px" /> </a>
                    </div>

                </div>
                <a href="#">See all Templates</a>
            </div>

        </div>
    )
}

export default MainResume