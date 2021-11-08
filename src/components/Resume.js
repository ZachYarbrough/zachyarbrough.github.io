import React from 'react';
import FadeIn from 'react-fade-in';

const Resume = () => {

    return (
        <FadeIn className='content'>
            {/* Summary */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Summary</h2>
                <p>Ambitious Full Stack Developer with a background in UI/UX</p>
                <p>Adept in Test Driven Development and Object Oriented Design allowing for clean, concise code</p>
                <p>Proficient in Agile Scrum Methodology; flexible, fast learner that brings curiosity and passion to every project</p>
            </div>

            {/* Skills */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Skills</h2>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Languages</span>
                    <span className='d-flex flex-wrap'>
                        <span className="alert mt-5 mr-5 py-0 px-5">HTML</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">CSS</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">JavaScript</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">C#</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Swift</span>
                    </span>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Technical</span>
                    <span className='d-flex flex-wrap'>
                        <span className="alert mt-5 mr-5 py-0 px-5">React</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Git</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">NodeJS</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">ExpressJS</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">MongoDB</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Jest</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Bootstrap</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">AJAX</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">MySQL</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Handlebars</span>
                    </span>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='nowrap-div alert alert-primary mt-5 mr-5 py-0 px-5'>Non Technical</span>
                    <span className='d-flex flex-wrap'>
                        <span className="alert mt-5 mr-5 py-0 px-5">Agile Scrum Methodology</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Object Oriented Design</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Flexible Learner</span>
                        <span className="alert mt-5 mr-5 py-0 px-5">Model View Controller</span>
                    </span>
                </p>
            </div>

            {/* Projects */}
            <div className='d-flex flex-column'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Projects</h2>
                <div>
                    <span className='font-size-18 font-weight-bold'>Reploy - Job Tracking Application</span>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Website</span>
                        <a href='https://reploy.herokuapp.com/' target='_'>
                            <span className='mr-5'>https://reploy.herokuapp.com</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Source</span>
                        <a href='https://github.com/abjj1999/Job-Tracker' target='_'>
                            <span className='mr-5'>https://github.com/abjj1999/Job-Tracker</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Stack</span>
                        <span className='d-flex flex-wrap'>
                            <span className="alert mr-5 py-0 px-5">Handlebars</span>
                            <span className="alert mr-5 py-0 px-5">MySQL</span>
                            <span className="alert mr-5 py-0 px-5">ExpressJS</span>
                            <span className="alert mr-5 py-0 px-5">NodeJS</span>
                        </span>
                    </p>
                </div>
                <div>
                    <span className='font-size-18 font-weight-bold'>Lyricado - Music Lyric Quiz</span>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Website</span>
                        <a href=' https://zachyarbrough.github.io/music-lyric-quiz/' target='_'>
                            <span className='mr-5'> https://zachyarbrough.github.io/music-lyric-quiz</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Source</span>
                        <a href='https://github.com/ZachYarbrough/music-lyric-quiz' target='_'>
                            <span className='mr-5'>https://github.com/ZachYarbrough/music-lyric-quiz</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Stack</span>
                        <span className='d-flex flex-wrap'>
                            <span className="alert mr-5 py-0 px-5">HTML</span>
                            <span className="alert mr-5 py-0 px-5">CSS</span>
                            <span className="alert mr-5 py-0 px-5">JavaScript</span>
                        </span>
                    </p>
                </div>
            </div>

            {/* Experience */}
            <div className='d-flex flex-column'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Experience</h2>
                <span className='font-size-18 font-weight-bold'>StoryFit</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Intern</span>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Jan 2020 - May 2020</span>
                    </p>
                    <span>Utilized critical thinking to regulate movie scripts and format them correctly to ensure AI runs smoothly when determining optimal markets and audience</span>
                </div>
            </div>

            {/* Education */}
            <div className='d-flex flex-column'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Education</h2>

                <span className='font-size-18 font-weight-bold'>BSA in Arts and Entertainment Technologies</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>University of Texas at Austin</span>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Aug 2017 - May 2021</span>
                    </p>
                    <span>Graduated with a GPA of 3.51 with a concentration in Game Design and a Certificate in Radio Television and Film</span>
                </div>

                <span className='font-size-18 font-weight-bold mt-10'>Bootcamp Certificate</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>University of Texas at Austin</span>
                        <span className='alert alert-primary mr-5 py-0 px-5'>May 2021 - Dec 2021</span>
                    </p>
                    <span>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js &amp; ReactJS</span>
                </div>
            </div>

            {/* Honors and Awards */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Honors and Awards</h2>
                <span className='font-size-18 font-weight-bold mr-10 py-0 px-5'>Eagle Scout</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Council Number - 576</span>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Sept 2014</span>
                    </p>
                </div>
            </div>
        </FadeIn>
    );
}

export default Resume;