import React from 'react';
import {Card, Col, Row} from 'antd';
import 'antd/dist/antd.compact.css'

const Ideals = props => {

    const style = {
        background: "#F6F6F6",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div id={"ideals"} className={"content-text-justify"} style={style}>
            <div className="site-card-wrapper" style={{margin: "10px"}}>
                <div style={{textAlign:"center"}}>
                    <h1>{props.title}</h1>
                </div>
                <Row gutter={24}>
                    {props.data
                        ? props.data.map((d, i) => (
                            <Col style={{marginTop: "5px"}} key={`${d.title}-${i}`} span={24}>
                                <Card style={{fontSize:"15px", background:"#F6F6F6"}}>
                                    <span>{i+1}. </span>{d.text}
                                </Card>
                            </Col>
                        ))
                        : "Loading..."}
                </Row>
            </div>
        </div>
    );
};

export default Ideals;
