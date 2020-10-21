import React, { useContext, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import about from "assets/images/me_about.jpg";
import tech from "assets/images/me_tech.jpeg";
import hobby from "assets/images/me_hobby.jpg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Technologies from './technologies'
import "./skills.scss";

export const Skills = () => {
    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState("general");

    const topSkillsClicked = () => {
        setState("skills");
    };

    const backToGeneral = () => {
        setState("general");
    };

    const hobbyClicked = () => {
        setState("hobby");
    };

    return (
        <Wrapper id="about">
            {state === "general" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <img
                            className={"profile-pic"}
                            src={about}
                            alt="About Forbes"
                        />
                    </Thumbnail>
                    <Details theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" onClick={backToGeneral}>
                                <h1>About me</h1>
                            </Link>
                            <Link style={{cursor: 'pointer'}} color="inherit" onClick={topSkillsClicked}>
                                Technologies
                            </Link>
                            <Link style={{cursor: 'pointer'}} color="inherit" onClick={hobbyClicked}>
                                Things I do for fun
                            </Link>
                        </Breadcrumbs>
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
                    </Details>
                </SkillsWrapper>
            )}
            {state === "skills" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <img
                            className={"profile-pic"}
                            src={tech}
                            alt="About Forbes"
                        />
                    </Thumbnail>
                    <Details theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link style={{cursor: 'pointer'}} color="inherit" onClick={backToGeneral}>
                                About Me
                            </Link>
                            <Link color="inherit" onClick={topSkillsClicked}>
                                <h1>Technologies</h1>
                            </Link>
                            <Link style={{cursor: 'pointer'}} color="inherit" onClick={hobbyClicked}>
                                Things I do for fun
                            </Link>
                        </Breadcrumbs>
                        <Technologies />
                    </Details>
                </SkillsWrapper>
            )}
            {state === "hobby" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <img
                            className={"profile-pic"}
                            src={hobby}
                            alt="About Forbes"
                        />
                    </Thumbnail>
                    <Details theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link style={{cursor: 'pointer'}} color="inherit" onClick={backToGeneral}>
                                About Me
                            </Link>
                            <Link style={{cursor: 'pointer'}} color="inherit" onClick={topSkillsClicked}>
                                Technologies
                            </Link>
                            <Link color="inherit" onClick={hobbyClicked}>
                                <h1>Things I do for fun</h1>
                            </Link>
                        </Breadcrumbs>
                        <p>I love to play basketball and workout.</p>
                    </Details>
                </SkillsWrapper>
            )}
        </Wrapper>
    );
};
