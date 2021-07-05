import React from "react";
import '../App.css';

const Navigation = () => {

    const data = [
        {
            name: "আদর্শ",
            classId: "ideals"
        },
        {

            name: "লক্ষ্য",
            classId: "features"
        },
        {

            name: "উদ্দেশ্য",
            classId: "motive"
        },
        {

            name: "বিস্তারিত",
            classId: "about"
        },
        {

            name: "সার্ভিস",
            classId: "services"
        },
        {

            name: "দলীয় তথ্য",
            classId: "team"
        },
        {

            name: "গ্যালারী",
            classId: "portfolio"
        },
        {

            name: "প্রত্যয়ন",
            classId: "testimonials"
        },
        {

            name: "যোগাযোগ",
            classId: "contact"
        }
    ]

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
                        <span className="icon-bar menu-bar-line content-text-font"/>{" "}
                        <span className="icon-bar menu-bar-line content-text-font"/>{" "}
                        <span className="icon-bar menu-bar-line content-text-font"/>{" "}
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                             <span className={"content-text-font"}>
                                 <img style={{width: "23px", height: "23px", margin: "0 5px 5px 0"}}
                                      src={'circle-logo.png'}
                                      alt="logo"
                                 />
                                 DHFIYA
                             </span>
                    </a>{" "}
                </div>

                <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                    <ul className="nav navbar-nav navbar-right ">

                        {
                            data.map(value => (
                                <li>
                                    <a href={`#${value.classId}`} className="page-scroll">
                                        <span className={"content-text-font"}>{value.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
