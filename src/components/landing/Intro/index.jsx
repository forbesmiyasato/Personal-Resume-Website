import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container } from "components/common";
import dev from "assets/illustrations/dev.svg";
import Button from "@material-ui/core/Button";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import LoopText from './loopingText'

export const Intro = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Header />
            <IntroWrapper>
                <Wrapper as={Container}>
                    <Details theme={theme}>
                        <h1>
                            Hi There! <br /> My name is Forbes Miyasato.
                        </h1>
                        <LoopText />
                        <AnchorLink href="#projects">
                            <Button variant="contained" color="primary">
                                Learn More About Me
                            </Button>
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
