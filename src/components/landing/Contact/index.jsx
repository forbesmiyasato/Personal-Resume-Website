import React, { useContext } from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { ThemeContext } from "providers/ThemeProvider";
import { Wrapper, Details, Thumbnail } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import social from "../../social.json";
import InsightFloatIn from "../../common/InsightFloatIn";
import { Trail, animated } from "react-spring/renderprops";
import VizSensor from "react-visibility-sensor";
import GITSectionfrom from "./section";
import "./contact.scss";

export const Contact = () => {
    const { theme } = useContext(ThemeContext);

    const items = [
        <div className="contact-icon">
            <a
                className="mail-icon"
                href="mailto:forbesmiyasato@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <p>
                <span>forbesmiyasato@yahoo.com</span>
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
        <InsightFloatIn topOffSet={200} translateY={50}>
            <Wrapper as={Container} id="contact">
                <Details className="contact-wrapper">
                    <GITSectionfrom />
                </Details>
                <Thumbnail>
                    <img src={contact} alt="Contact Forbes" />
                </Thumbnail>
            </Wrapper>
        </InsightFloatIn>
    );
};
