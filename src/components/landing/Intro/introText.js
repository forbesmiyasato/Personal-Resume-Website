import React from "react";
import { useSpring, animated } from "react-spring";

const IntroText = () => {
    const first = useSpring({
        to: {
            opacity: 1,
            transform: "translateY(0)",
        },
        from: { opacity: 0, transform: "translateY(-200px)" },
    });

    const second = useSpring({
        to: {
            opacity: 1,
            transform: "translateX(0)",
        },
        from: { opacity: 0, transform: "translateX(-200px)" },
        delay: 500
    });

    return (
        <h1>
            <animated.span style={{ display: 'inline-block', ...first}}>Hi There!</animated.span> <br />{" "}
            <animated.span style={{ display: 'inline-block', opacity: 0, ...second}}>
                My name is Forbes Miyasato.
            </animated.span>
        </h1>
    );
};

export default IntroText;
