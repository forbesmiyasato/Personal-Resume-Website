import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import blobOverlay from 'assets/illustrations/overlay.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
    <Header />
    <IntroWrapper>
      <Wrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There! <br/> My name is Forbes Miyasato.</h1>
          {/* <h1>My name is Forbes Miyasato.</h1> */}
          <h4>I’m an aspiring software engineer.</h4>
          <Button as={AnchorLink} href="#projects">
            Learn more
          </Button>
        </Details>
        <Thumbnail theme={theme}>
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e1f7fc" d="M54,-72.5C69.5,-63.1,81.2,-46.7,84.4,-29.2C87.6,-11.8,82.3,6.6,74.8,22.6C67.2,38.5,57.4,52,44.6,60.1C31.7,68.1,15.9,70.7,-1.8,73.1C-19.4,75.6,-38.8,77.9,-47.8,68.6C-56.7,59.3,-55.2,38.3,-59.5,20.4C-63.7,2.5,-73.9,-12.4,-71.3,-24C-68.7,-35.6,-53.4,-44,-39.4,-53.8C-25.4,-63.6,-12.7,-74.9,3.3,-79.4C19.3,-84,38.6,-81.8,54,-72.5Z" transform="translate(100 100)" />
        </svg> */}
          <img src={dev} alt="I'm Forbes and this is my portfolio website" />
        </Thumbnail>
      </Wrapper>
    </IntroWrapper>
    </>
  );
};
