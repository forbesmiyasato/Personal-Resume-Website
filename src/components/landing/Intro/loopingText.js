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
                        delay: 50,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("I'm an aspiring software engineer!")
                            .pauseFor(1500)
                            .deleteChars(30)
                            .typeString("pursuing a M.S. CS at PSU.")
                            .pauseFor(1500)
                            .deleteChars(26)
                            .typeString("a full-stack development enthusiast.")
                            .pauseFor(1500)
                            .start();
                    }}
                />
            </h4>
        </div>
    );
};

export default LoopingText;
