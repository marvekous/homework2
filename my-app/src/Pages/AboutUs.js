import React from "react";

const AboutUs = ({text}) => {
    return(
        <div>
            <h1>{text.title}</h1>
            <h2>{text.subtitle}</h2>
        </div>
    )  
};
export default AboutUs;