import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container } from "components/common";
import dev from "assets/illustrations/dev.svg";
import Button from "@material-ui/core/Button";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import LoopText from "./loopingText";
import IntroText from "./introText";
import { useSpring, animated } from "react-spring";

export const Intro = () => {
    const { theme } = useContext(ThemeContext);

    const button = useSpring({
        to: {
            opacity: 1,
            transform: "translateY(0)",
        },
        from: { opacity: 0, transform: "translateY(200px)" },
        delay: 2400
    });

    return (
        <>
            <Header />
            <IntroWrapper>
                <Wrapper as={Container}>
                    <Details theme={theme}>
                        <IntroText />
                        <LoopText />
                        <AnchorLink href="#projects">
                            <animated.div className="learn-more-btn" style={button}>
                                <Button variant="contained" color="primary">
                                    Learn More About Me
                                </Button>
                            </animated.div>
                        </AnchorLink>
                    </Details>
                    <Thumbnail theme={theme}>
                        <img
                            src={dev}
                            alt="I'm Forbes and this is my portfolio website"
                        />
                    </Thumbnail>
                </Wrapper>
            </IntroWrapper>
        </>
    );
};
