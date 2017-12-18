import React from "react";
import Reveal from "react-reveal";
import "animate.css/animate.css";
import {Link} from "react-router-dom";

const Blocks = (props) => {

    const generateBlocks = ({blocks}) => {
        if (blocks) {
            return blocks.map((item) => {
                return (
                    <Reveal key={item.id} effect="animated fadeInUp" className={`item ${item.type}`}>
                        <div className="veil"/>
                        <div
                            className="image"
                            style={{background: `url(/images/blocks/${item.image}) no-repeat`}}
                        >
                        </div>
                        <div className="title">
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    </Reveal>
                )
            })
        }

    };


    return (
        <div className="home_block">
            {generateBlocks(props)}
        </div>
    )
};

export default Blocks;