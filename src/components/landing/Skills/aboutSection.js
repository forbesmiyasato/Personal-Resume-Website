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

const AboutSection = ({ open }) => {
    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState("general");
    const [techClicked, setTechClicked] = useState(false);
    const [hobbiesClicked, setHobbyClicked] = useState(false);

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

    return (
        <>
            {state === "general" && (
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
                            <Link color="inherit" onClick={backToGeneral}>
                                <h1>About me</h1>
                            </Link>
                            <TechTooltip
                                show={techClicked === false ? true : null}
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
                            I am a Master of Computer Science degree candidate
                            at Portland State University seeking opportunities
                            as a software engineer. I was born in Honolulu,
                            Hawaii but grew up in Beijing, China, and now I'm
                            located in Beaverton, Oregon. Hence, I'm fluent in
                            both English and Chinese and able to thrive in
                            multicultural environments.
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
                                <h1>Skills</h1>
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
                                Skills
                            </Link>
                            <Link color="inherit" onClick={hobbyClicked}>
                                <h1>Hobbies</h1>
                            </Link>
                        </Breadcrumbs>
                        <p className="section-box">
                            I am passionate about software engineering and
                            full-stack development, and I enjoy self-learning
                            new things and developing applications in my spare
                            time. Outside of programming, I enjoy playing
                            basketball, going to the gym and hanging out with
                            friends.
                        </p>
                    </Details>
                </SkillsWrapper>
            )}
        </>
    );
};

export default AboutSection;
