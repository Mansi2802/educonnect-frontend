import { Component } from "react";
import "./Content.css";
import React from "react";

class Contentdata extends Component{
    render()
    {
        return(
            <div className={this.props.className}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text1}</p>
                        <br/> <hr/><br/>
                        <p>{this.props.text2}</p>
                    </div>
                    <div className="image">
                        <img alt="img" src={this.props.img1} />
                        <img alt="img" src={this.props.img2} />

                    </div>
            </div>
        )
    }
}
export default Contentdata;