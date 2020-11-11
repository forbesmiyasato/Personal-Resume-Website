import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import social from "../../social.json";
import { Trail, animated } from "react-spring/renderprops";
import VizSensor from "react-visibility-sensor";

const GITSection = (props) => {
    const { theme } = useContext(ThemeContext);
    const [open, set] = useState(false);
    // const [parentOpenned, setParentOpenned] = useState(false);
    // useEffect(() => {
    //     if (props.show && !parentOpenned) {
    //         setParentOpenned(true)
    //     }
    // }, [props.show])

    const items = [
        <div className="contact-icon">
            <a
                className="mail-icon"
                href="mailto:forbes@forbesm.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <p>
                <span>forbes@forbesm.com</span>
            </p>
        </div>,
        ...social.map(({ id, name, link, icon, iconDark }) => (
            <div key={id} className="contact-social-icon contact-icon">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`follow me on ${name}`}
                    className="contact-icon-anchor"
                >
                    {theme === "light" ? (
                        <img width="24" src={icon} alt={name} />
                    ) : (
                        <img width="24" src={iconDark} alt={name} />
                    )}
                </a>
                <p>
                    <span>{name}</span>
                </p>
            </div>
        )),
    ];

    return (
        <>
            <VizSensor
                onChange={(isVisible) => {
                    if (isVisible && !open) {
                        set(true);
                    }
                }}
            >
                <h1>Let's get in touch</h1>
            </VizSensor>
            {open && (
                <div className="contact-text-wrapper">
                    <Trail
                        config={{ delay: 500 }}
                        items={items}
                        keys={(item) => item.key}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                    >
                        {(item) => (props) => (
                            <animated.div style={props}>{item}</animated.div>
                        )}
                    </Trail>
                </div>
            )}
        </>
    );
};

export default GITSection;
