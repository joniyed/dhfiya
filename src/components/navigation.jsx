import React, {Component} from "react";

export class Navigation extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            {" "}
                            <span className="sr-only">Toggle navigation</span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">
                             <span>
                                 <img style={{width:"23px",height:"23px",margin:"0 5px 5px 0"}} src={'circle-logo.png'}/>
                                 DHFIYA
                             </span>
                        </a>{" "}
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#ideals" className="page-scroll">
                                    আদর্শ
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="page-scroll">
                                    লক্ষ্য
                                </a>
                            </li>
                            <li>
                                <a href="#motive" className="page-scroll">
                                    উদ্দেশ্য
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="page-scroll">
                                    বিস্তারিত
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="page-scroll">
                                    সার্ভিস
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="page-scroll">
                                    গ্যালারী
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="page-scroll">
                                    প্রত্যয়ন
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="page-scroll">
                                    দলীয় তথ্য
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="page-scroll">
                                    যোগাযোগ
                                </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
