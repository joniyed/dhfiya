import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../App.css'

const Slideshow = (props) => {

    return (
        <div className={"slide-main"}>
            <div className={"slide-middle"}>
                <Slide easing="ease">
                    {props.data
                        ? props.data.map((d, i) => (
                            <a
                                href={d.img}
                                title="Project Title"
                                data-lightbox-gallery="gallery1"
                                key={i}
                            >
                                <div className="each-slide">
                                    <div className={"slide-show"} style={{
                                        backgroundImage: `url(${d.img})`,
                                    }}>
                                    </div>
                                </div>
                            </a>
                        ))
                        : "loading"}
                </Slide>
            </div>
        </div>
    )
};

export default Slideshow;
