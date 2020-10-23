import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";

const InsightFloatIn = (props) => {
    const [open, set] = useState(false);
    const prop = useSpring({
        opacity: open || props.disable ? 1 : 0,
        transform: open || props.disable ? "translateY(0px)" : "translateY(50px)",
    });

    return (
        <VizSensor
            partialVisibility={true}
            minTopValue={props.topOffSet}
            onChange={(isVisible) => {
                if (isVisible && !props.disable) {
                    set(true);
                }
            }}
        >
            <animated.div style={prop}>{props.children}</animated.div>
        </VizSensor>
    );
};

export default InsightFloatIn;
