import React from 'react'
import Userfunc from './Userfunc';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>"About Page"</h1>
            {/* <Userfunc name={"Julian funct"} location={"W"}/> */}
            <UserClass name={"Julian class"} location={"W"}/>
        </div>
    )
}

export default About;