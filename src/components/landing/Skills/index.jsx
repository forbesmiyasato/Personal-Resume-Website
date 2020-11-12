import React, { useState } from "react";
import { Wrapper } from "./styles";
import AboutSection from "./aboutSection";
import VizSensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import "./skills.scss";

export const Skills = () => {
    const [open, set] = useState(false);

    const prop = useSpring({
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0px)" : "translateY(50px)",
        config: { duration: 250 },
    });

    return (
        <VizSensor
            partialVisibility={true}
            minTopValue={300}
            onChange={(isVisible) => {
                if (isVisible && !open) {
                    set(true);
                }
            }}
        >
            <animated.div style={prop}>
                <Wrapper id="about">
                    <AboutSection open={open}/>
                </Wrapper>
            </animated.div>
        </VizSensor>
    );
};
