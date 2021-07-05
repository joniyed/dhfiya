import React from 'react';
import Particles from "react-particles-js";
import ParticleConfig from "../config/ParticleConfig";

export default function ParticleBackground() {
    const styling = {
        backgroundColor: '#2a2e31',
        position: 'absolute',
        width: '100%',
    };
    return (
        <Particles width="100%" height={"175vh"} className={"particles-wrapper"} style={styling} params={ParticleConfig}/>
    );
}