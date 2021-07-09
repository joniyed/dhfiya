import React from "react";
import '../App.css'
import ParticleBackground from "./ParticleBackground";

export const Header = (props) => {
    return (
        <header id="header">
            <div className="intro">
                <ParticleBackground/>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div
                                style={{paddingTop: "180px"}}
                                className="col-md-10 col-lg-offset-1 intro-text"
                            >
                                <div className={"header-image"}>
                                    <img
                                        style={{
                                            borderRadius: "50%",
                                            width: "200px",
                                            height: "200px"
                                        }}
                                        src={"img/about.jpg"}
                                        className="img-responsive"
                                        alt=""/>
                                </div>
                                <h1 className={"content-text-font header-text"}>
                                    {
                                        props.data ? props.data.title : "Loading"
                                    }
                                    <span/>
                                </h1>
                                <p className={"content-text-justify header-p"}>
                                    {
                                        props.data ? props.data.paragraph : "Loading"
                                    }
                                </p>
                                {/*<a*/}
                                {/*    href="#features"*/}
                                {/*    className="btn btn-custom btn-lg page-scroll"*/}
                                {/*>*/}
                                {/*    Learn More*/}
                                {/*</a>{" "}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
