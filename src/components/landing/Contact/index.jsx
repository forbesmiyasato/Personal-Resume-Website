import React, { useContext, useState } from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { ThemeContext } from "providers/ThemeProvider";
import { Wrapper, Details, Thumbnail } from "./styles";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";
import GITSectionfrom from "./section";
import "./contact.scss";

export const Contact = () => {
    const [open, set] = useState(false);
    const prop = useSpring({
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0px)" : "translateY(50px)",
        config: { duration: 250 },
    });

    return (
        <VizSensor
            partialVisibility={true}
            minTopValue={200}
            onChange={(isVisible) => {
                console.log("Triggered", isVisible)
                if (isVisible && !open) {
                    set(true);
                }
            }}
        >
            <animated.div style={prop}>
                <Wrapper as={Container} id="contact">
                    <Details className="contact-wrapper">
                        <GITSectionfrom show={open}/>
                    </Details>
                    <Thumbnail>
                        <img src={contact} alt="Contact Forbes" />
                    </Thumbnail>
                </Wrapper>
            </animated.div>
        </VizSensor>
    );
};
