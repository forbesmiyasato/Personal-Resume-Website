import React, { useContext, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import image from "assets/images/me.jpeg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import technologies from "./technologies.json";
import Link from "@material-ui/core/Link";

export const Skills = () => {
    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState("general");

    const topSkillsClicked = () => {
        setState("skills");
    };

    const backToGeneral = () => {
        setState("general");
    };

    const handleClick = () => {
        console.log("test");
    };

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
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" onClick={backToGeneral}>
                                <h1>About me</h1>
                            </Link>
                            <Link color="inherit" onClick={topSkillsClicked}>
                                Technologies
                            </Link>
                            <Link color="inherit" onClick={topSkillsClicked}>
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
                            src={image}
                            alt="About Forbes"
                        />
                    </Thumbnail>
                    <Details theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" onClick={backToGeneral}>
                                About Me
                            </Link>
                            <Link color="inherit" onClick={topSkillsClicked}>
                                <h1>Technologies</h1>
                            </Link>
                            <Link color="inherit" onClick={topSkillsClicked}>
                                Things I do for fun
                            </Link>
                        </Breadcrumbs>
                        <ul className="skills-list">
                            {technologies.map(({ i, name, icon }) => (
                                <li key={i} className="skills-list-item">
                                    <img width={"36"} src={icon} />
                                </li>
                            ))}
                        </ul>
                    </Details>
                </SkillsWrapper>
            )}
        </Wrapper>
    );
};
