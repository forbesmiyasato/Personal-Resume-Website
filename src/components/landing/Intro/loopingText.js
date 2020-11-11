import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./index.scss";

const LoopingText = () => {
    return (
        <div>
            <h4 className="loop-text">
                <Typewriter
                    options={{
                        deleteSpeed: 20,
                        delay: 30,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(900)
                            .typeString("I'm an aspiring software engineer!")
                            .pauseFor(1500)
                            .deleteChars(30)
                            .typeString("a MSCS student at PSU.")
                            .pauseFor(1500)
                            .deleteChars(22)
                            .typeString("a full-stack enthusiast.")
                            .pauseFor(1500)
                            .start();
                    }}
                />
            </h4>
        </div>
    );
};

export default LoopingText;
