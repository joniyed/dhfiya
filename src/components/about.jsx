import React, {Component} from 'react'

export class about extends Component {
    render() {
        return (
            <div id="about">
                <div className="container content-text-font">
                    <div className="row">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col-xs-12 col-md-6">
                            <img style={{borderRadius:"50%",width:"200px",height:"200px"}} src="img/about.jpg" className="img-responsive" alt=""/>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text text-justify">
                                <h2 className={"content-text-font"}>কারা আমরা</h2>
                                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                                <h3 className={"content-text-font"}>কেন আমরা</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            {this.props.data ? this.props.data.Why.map((d, i) => <li
                                                key={`${d}-${i}`}>{d}</li>) : 'loading'}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            {this.props.data ? this.props.data.Why2.map((d, i) => <li
                                                key={`${d}-${i}`}> {d}</li>) : 'loading'}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default about
