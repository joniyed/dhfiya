import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = (props) => {
    const mainDiv = {
        // backgroundColor: "black",
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={mainDiv}>
            <div style={{width: "60vh"}}>
                <Slide easing="ease">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div className="each-slide">
                                <div style={{
                                    backgroundImage: `url(${d.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%",
                                    height:"40vh",
                                    borderRadius:"20px",
                                    margin:"5px"
                                }}>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </Slide>
            </div>
        </div>
    )
};

export default Slideshow;
