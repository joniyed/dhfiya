import React, {Component} from "react";
import '../App.css'

export class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div style={{paddingTop:"180px"}} className="col-md-10 col-lg-offset-1 intro-text">
                                    <h1>
                                        {this.props.data ? this.props.data.title : "Loading"}
                                        <span></span>
                                    </h1>
                                    <p className={"content-text-justify"}>
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
