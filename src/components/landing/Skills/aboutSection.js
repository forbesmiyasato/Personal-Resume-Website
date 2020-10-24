import React, { useContext, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import about from "assets/images/me_about.jpg";
import tech from "assets/images/me_tech.png";
import hobby from "assets/images/me_hobby.jpg";
import { SkillsWrapper, Details, Thumbnail } from "./styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Technologies from "./technologies";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import TechTooltip from "./techTooltip";
import VizSensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";

const AboutSection = () => {
    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState("general");
    const [techClicked, setTechClicked] = useState(false);
    const [hobbiesClicked, setHobbyClicked] = useState(false);
    const [open, set] = useState(false);

    const topSkillsClicked = () => {
        setState("skills");
        if (!techClicked) {
            setTechClicked(true);
        }
    };

    const backToGeneral = () => {
        setState("general");
    };

    const hobbyClicked = () => {
        setState("hobby");
        if (!hobbiesClicked) {
            setHobbyClicked(true);
            setTechClicked(true);
        }
    };

    const prop = useSpring({
        opacity: open ? 1 : 0,
        transform:
            open ? "translateY(0px)" : "translateY(50px)",
        config: { duration: 250 }
    });

    return (
        <>
            {state === "general" && (
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
                        <SkillsWrapper as={Container}>
                            <Thumbnail>
                                <div className="image-wrapper">
                                    <img
                                        className={"profile-pic"}
                                        src={about}
                                        alt="About Forbes"
                                    />
                                </div>
                            </Thumbnail>
                            <Details theme={theme}>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link
                                        color="inherit"
                                        onClick={backToGeneral}
                                    >
                                        <h1>About me</h1>
                                    </Link>
                                    <TechTooltip
                                        show={
                                            techClicked === false ? true : null
                                        }
                                        parentVisible={open}
                                        topSkillsClicked={topSkillsClicked}
                                    />
                                    <Link
                                        style={{ cursor: "pointer" }}
                                        color="inherit"
                                        onClick={hobbyClicked}
                                    >
                                        Hobbies
                                    </Link>
                                </Breadcrumbs>
                                <p className="section-box">
                                    I am a 2020 graduate of Pacific University
                                    with a degree in Computer Science and
                                    currently pursuing a Masters of Computer
                                    Science at Portland State University. I'm
                                    passionate about software engineering and
                                    full-stack development.
                                </p>
                                <a
                                    href="/files/Forbes_Miyasato_Resume.pdf"
                                    target="_blank"
                                    rel="nofollow"
                                >
                                    <Button variant="contained" color="primary">
                                        View Resume
                                    </Button>
                                </a>
                            </Details>
                        </SkillsWrapper>
                    </animated.div>
                </VizSensor>
            )}
            {state === "skills" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <div className="image-wrapper">
                            <img
                                className={"profile-pic"}
                                src={tech}
                                alt="About Forbes"
                            />
                        </div>
                    </Thumbnail>
                    <Details theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                style={{ cursor: "pointer" }}
                                color="inherit"
                                onClick={backToGeneral}
                            >
                                About Me
                            </Link>
                            <Link color="inherit" onClick={topSkillsClicked}>
                                <h1>Tech</h1>
                            </Link>
                            <Tooltip
                                title="And me too!"
                                placement="top"
                                arrow
                                open={
                                    techClicked && !hobbiesClicked ? true : null
                                }
                            >
                                <Link
                                    style={{ cursor: "pointer" }}
                                    color="inherit"
                                    onClick={hobbyClicked}
                                >
                                    Hobbies
                                </Link>
                            </Tooltip>
                        </Breadcrumbs>
                        <Technologies />
                    </Details>
                </SkillsWrapper>
            )}
            {state === "hobby" && (
                <SkillsWrapper as={Container}>
                    <Thumbnail>
                        <div className="image-wrapper">
                            <img
                                className={"profile-pic"}
                                src={hobby}
                                alt="About Forbes"
                            />
                        </div>
                    </Thumbnail>
                    <Details theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                style={{ cursor: "pointer" }}
                                color="inherit"
                                onClick={backToGeneral}
                            >
                                About Me
                            </Link>
                            <Link
                                style={{ cursor: "pointer" }}
                                color="inherit"
                                onClick={topSkillsClicked}
                            >
                                Tech
                            </Link>
                            <Link color="inherit" onClick={hobbyClicked}>
                                <h1>Hobbies</h1>
                            </Link>
                        </Breadcrumbs>
                        <p className="section-box">
                            I enjoy playing basketball and going to the gym.
                        </p>
                    </Details>
                </SkillsWrapper>
            )}
        </>
    );
};

export default AboutSection;
