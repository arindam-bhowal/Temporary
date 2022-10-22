import React from 'react'
import './template1.scss'

const TemplateOne = () => {
    return (
        <div className='templateOne'>
            <div className="resume" id="html2pdf" contenteditable="true">
                <div className="resume_left">

                    <div className="resume_content">
                        <div className="resume_item resume_info">
                            <div className="title">
                                <p className="bold">
                                    Prandeep Chutia </p>
                                <p className="regular">
                                    Full Stack Developer </p>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-map-signs"></i>
                                    </div>
                                    <div className="data">
                                        Guwahati,Assam </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="data">
                                        8399834759 </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="data">
                                        Guwahati,Assam </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-weebly"></i>
                                    </div>
                                    <div className="data">
                                        www.prandeep10.in </div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_skills">
                            <div className="title">
                                <p className="bold">skill's</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="skill_name">
                                        HTML </div>
                                    <div className="skill_progress">
                                        <span style= {{width : '80%'}}></span>
                                    </div>
                                    <div className="skill_per">80%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        CSS </div>
                                    <div className="skill_progress">
                                    <span style= {{width : '20%'}}></span>
                                    </div>
                                    <span className="skill_per">20%</span>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        JS </div>
                                    <div className="skill_progress">
                                    <span style= {{width : '50%'}}></span>
                                    </div>
                                    <div className="skill_per">50%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        PHP </div>
                                    <div className="skill_progress">
                                        <span style={{width: '100%'}}></span>
                                    </div>
                                    <div className="skill_per">90%</div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_social">
                            <div className="title">
                                <p className="bold">Social</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-github-square"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Github</p>
                                        <p>prandeep10</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Linkedin</p>
                                        <p>prandeep10</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Facebook</p>
                                        <p>prandeep10</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Youtube</p>
                                        <p>pranj_king</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resume_right">
                    <div className="resume_item resume_about">
                        <div className="title">
                            <p className="bold">About Me</p>
                        </div>
                        <p>
                            I'm a Full Stack Developer with expertise in TailwindCSS and PHP, I have 7 Years experience in Full
                            Stack Development and have worked for multiple organizations. </p>
                    </div>
                    <div className="resume_item resume_work">
                        <div className="title">
                            <p className="bold">Work Experience</p>
                        </div>
                        <ul>
                            <li>
                                <div className="date">2015-2017</div>
                                <div className="info">
                                    <p className="semi-bold">PHP DEVELOPER FOR SCHOOL</p>
                                    <p>I worked as a Web Developer for XYZ Public School, I used HTML/CSS/JS/PHP.</p>
                                </div>
                            </li>
                            <li>
                                <div className="date">2018-2020</div>
                                <div className="info">
                                    <p className="semi-bold">Django Developer For XYZ Company</p>
                                    <p>I worked as a Django Developer for xyz company, my days task is to make django backends
                                        for clients.</p>
                                </div>
                            </li>
                            <li>
                                <div className="date">2022-Present</div>
                                <div className="info">
                                    <p className="semi-bold">ML Wing Moderator AEC Coding Club</p>
                                    <p>Currently working as a ML Wing Moderator for AEC Coding Club, my task is to teach members
                                        ML Algorithms and aware them.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_education">
                        <div className="title">
                            <p className="bold">Education</p>
                        </div>
                        <ul>
                            <li>
                                <div className="date">2010-2021</div>
                                <div className="info">
                                    <p className="semi-bold">Guwahati Public School (CBSE)</p>
                                    <p>Boards Percentage: 91.4%
                                        Responsibilities: School Captain, Host for Annual Function. </p>
                                </div>
                            </li>
                            <li>
                                <div className="date">2021-Present</div>
                                <div className="info">
                                    <p className="semi-bold">Assam Engineering College (B.TECH)</p>
                                    <p>Senior Developer, ML Wing Moderator Coding Club AEC, Technical Associate in E-Cell AEC,
                                        Software Coordinator in ROBO Club AEC.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_hobby">
                        <div className="title">
                            <p className="bold">Hobby</p>
                        </div>
                        <ul>
                            <li><i className="fas fa-book"></i></li>
                            <li><i className="fas fa-gamepad"></i></li>
                            <li><i className="fas fa-music"></i></li>
                            <li><i className="fab fa-pagelines"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateOne