import React from "react"

import aboutimg from "./photos/about.jpg"

function About () {
    return (
        <div className="app">
            <div className="banner">
                <div className="banner__content">
                    <div className="banner__header">
                        <div className="banner__title">About the Forty Acres</div>
                        <div className="banner__desc">The University of Texas at Austin, founded in 1883, ranks among the 40 best universities in the world. It supports some 51,000 diverse students with top national programs across 18 colleges and schools. And as Texas’ leading research university, UT attracts more than $650 million annually for discovery.</div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="body__flex">
                    <img src={aboutimg} alt="a scholar reading." />
                    <div className="body__flexText">But the most important takeaway of UT Austin is that ___.</div>
                </div>
            </div>
        </div>
    )
}

export default About