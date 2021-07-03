import React, {Component} from "react";

export class features extends Component {
    render() {
        return (
            <div id="features" className="text-center content-text-font">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1>{this.props.title}</h1>
                        </div>
                        {this.props.data
                            ? this.props.data.map((d, i) => (
                                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                                    {" "}
                                    <i className={d.icon}/>
                                    <u><h5>{d.title}</h5></u>
                                    <p style={{width: "100%", height: "80px"}}>{d.text}</p>
                                </div>
                            ))
                            : "Loading..."}
                    </div>
                </div>
            </div>
        );
    }
}

export default features;
