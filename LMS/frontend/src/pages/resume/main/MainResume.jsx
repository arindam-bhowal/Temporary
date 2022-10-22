import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../../components/sidebar/Sidebar'
import './mainResume.scss'

const MainResume = () => {
    return (
        <>
    <Sidebar />
        <div className="mainResume">

            <div className="container">
                <h1>Select Resume Templates</h1>
                <div className="card-container">

                    <div className="card">
                        <Link to='/resume/template1'> <img src="https://prandeep10.github.io/Portfolio-Website/template1.png" alt="" width="300px" height="370px" /> </Link>
                    </div>

                    <div className="card">
                        <Link to="/resume/template2"> <img src="https://prandeep10.github.io/Portfolio-Website/template2.png" alt="" width="300px" height="370px" /> </Link>
                    </div>

                    <div className="card">
                        <Link to="/resume/template3"> <img src="https://prandeep10.github.io/Portfolio-Website/template3.png" alt="" width="300px" height="370px" /> </Link>
                    </div>

                    <div className="card">
                        <Link to="/resume/template4"> <img src="https://prandeep10.github.io/Portfolio-Website/template4.png" alt="" width="300px" height="370px" /> </Link>
                    </div>

                </div>
                <a href="#">See all Templates</a>
            </div>

        </div>
        </>
    )
}

export default MainResume