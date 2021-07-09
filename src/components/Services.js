import React from "react";
import '../App.css'

export const Services = (props) => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>আমাদের সেবাসমূহ</h2>
                    <p>
                        আমাদের সংগঠন যে ধরনের কাজের সাথে যুক্ত
                    </p>
                </div>
                <div className={"container"}>
                    <div className="row">
                        {props.data
                            ? props.data.map((d, i) => (
                                <div key={`${d.name}-${i}`} className="col-md-4">
                                    <div
                                        className={"centerService"}
                                        style={
                                            {
                                                background: "#24101B",
                                                height: "320px",
                                                border: "1px solid #91C8FE",
                                                marginBottom: "30px",
                                                padding: "30px"
                                            }}
                                    >
                                        {" "}
                                        <i className={d.icon}/>
                                        <div className="service-desc">
                                            <h3 className={"content-text-font"}>{d.name}</h3>
                                            <p style={{fontSize: "11px"}}>{d.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : "loading"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
