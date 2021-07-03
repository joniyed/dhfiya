import React from "react";

function Gallery(props) {
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>গ্যালারী</h2>
                    <p>
                        আমাদের কিছু ছবি
                    </p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {
                            props.data ? props.data.map((d, i) => (
                                <div className="col-sm-6 col-md-4 col-lg-4" key={i}>
                                    <div className="portfolio-item">
                                        <div className="hover-bg">
                                            {" "}
                                            <a
                                                href={d.img}
                                                title="Project Title"
                                                data-lightbox-gallery="gallery1"
                                            >
                                                <div className="hover-text">
                                                    <h4>Lorem Ipsum</h4>
                                                </div>
                                                <img
                                                    style={{height: "250px", width: "100%", margin: "5px"}}
                                                    src={d.img}
                                                    className="img-responsive"
                                                    alt="Project Title"
                                                />{" "}
                                            </a>{" "}
                                        </div>
                                    </div>
                                </div>
                            )) : <h1>Photo Gallery Is Empty........</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
