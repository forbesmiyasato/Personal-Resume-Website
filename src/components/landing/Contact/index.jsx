import React, { useContext } from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { ThemeContext } from "providers/ThemeProvider";
import { Wrapper, Details, Thumbnail } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import social from "../../social.json";
import InsightFloatIn from "../../common/InsightFloatIn";
import "./contact.scss";

export const Contact = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <InsightFloatIn topOffSet={200} translateY={50}>
            <Wrapper as={Container} id="contact">
                <Details className="contact-wrapper">
                    <h1>Let's get in touch</h1>
                    <div className="contact-text-wrapper">
                        <div>
                            <a
                                className="mail-icon"
                                href="mailto:forbesmiyasato@yahoo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <p>forbesmiyasato@yahoo.com</p>
                        </div>
                        {social.map(({ id, name, link, icon, iconDark }) => (
                            <div key={id} className="contact-social-icon">
                                <a
                                    key={id}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`follow me on ${name}`}
                                    className="contact-icon-anchor"
                                >
                                    {theme === "light" ? (
                                        <img width="24" src={icon} alt={name} />
                                    ) : (
                                        <img
                                            width="24"
                                            src={iconDark}
                                            alt={name}
                                        />
                                    )}
                                </a>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                </Details>
                <Thumbnail>
                    <img src={contact} alt="Contact Forbes" />
                </Thumbnail>
            </Wrapper>
        </InsightFloatIn>
    );
};
