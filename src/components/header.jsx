import React, {Component} from "react";
import '../App.css'
import ParticleBackground from "./ParticleBackground";

export class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="intro">
                    <ParticleBackground/>
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div style={{paddingTop: "180px"}} className="col-md-10 col-lg-offset-1 intro-text">
                                    <h1 className={"content-text-font header-text"}>
                                        {this.props.data ? this.props.data.title : "Loading"}
                                        <span/>
                                    </h1>
                                    <p className={"content-text-justify header-p"}>
                                        {this.props.data ? this.props.data.paragraph : "Loading"}
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
        );
    }
}

export default Header;
