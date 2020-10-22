import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./index.scss";

const LoopingText = () => {
    return (
        <div>
            <h4 className="loop-text">
                <Typewriter
                    options={{
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("I'm an aspiring software engineer!")
                            .pauseFor(1000)
                            .deleteChars(30)
                            .typeString("pursuing a M.S. CS at PSU.")
                            .pauseFor(1000)
                            .deleteChars(26)
                            .typeString("a full-stack development enthusiast.")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </h4>
        </div>
    );
};

export default LoopingText;
