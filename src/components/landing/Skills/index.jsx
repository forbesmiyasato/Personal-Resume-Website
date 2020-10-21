import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import image from "assets/images/me.jpeg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import technologies from './technologies.json';
import './skills.scss';

export const Skills = () => {
    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState("general");

    const topSkillsClicked = () => {
        setState("skills");
    };

    const backToGeneral = () => {
        setState("general");
    }

    return (
        <Wrapper id="about">
            {state === "general" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <img
                            className={"profile-pic"}
                            src={image}
                            alt="About Forbes"
                        />
                    </Thumbnail>
                    <Details theme={theme}>
                        <h1>About me</h1>
                        <p>
                            I am a 2020 graduate of Pacific University with a
                            degree in Computer Science and currently pursuing a
                            Masters of Computer Science at Portland State
                            University. I'm passionate about software
                            engineering and full-stack development.
                        </p>
                        <a
                            href="/files/Forbes_Miyasato_Resume.pdf"
                            target="_blank"
                        >
                            <Button>View Resume</Button>
                        </a>
                        <Button onClick={topSkillsClicked}>Tech/Skills</Button>
                        <Button onClick={topSkillsClicked}>Looking to Learn</Button>
                    </Details>
                </SkillsWrapper>
            )}
            {state === "skills" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <img
                            className={"profile-pic"}
                            src={image}
                            alt="About Forbes"
                        />
                    </Thumbnail>
                    <Details theme={theme}>
                        <h2>Tech I've Used Before</h2>
                        <ul className="skills-list">
                        {technologies.map(({ i, name, icon}) => (
                            <li key={i} className="skills-list-item">
                                <img width={'36'} src={icon} />
                            </li>
                        ))}
                        </ul>
                        <a
                            href="/files/Forbes_Miyasato_Resume.pdf"
                            target="_blank"
                        >
                            <Button>View Resume</Button>
                        </a>
                        <Button onClick={backToGeneral}>Back</Button>
                    </Details>
                </SkillsWrapper>
            )}
        </Wrapper>
    );
};
