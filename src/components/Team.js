import React from "react";

const Team = (props) => {
    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2> কার্যনির্বাহী কমিটি</h2>
                    <p>
                        যারা আমাদের কে সামনে থেকে নেতৃত্ব দিচ্ছেন
                    </p>
                </div>
                <div id="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                                <div className="thumbnail">
                                    {" "}
                                    <img style={{width: "250px", height: "250px", borderRadius: "50%"}} src={d.img}
                                         alt="..." className="team-img"/>
                                    <div className={"caption"}>
                                        <h4 style={{fontSize: "20px"}} className={"content-text-font "}>{d.name}</h4>
                                        <p style={{margin: "0px"}}>পিতা : {d.father}</p>
                                        <p style={{margin: "0px"}}>মোবাইল : {d.mobile}</p>
                                        <p style={{margin: "0px"}}>রক্তের গ্রুপ : {d.blood}</p>
                                        <p style={{margin: "0px"}}>{d.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
}

export default Team;
