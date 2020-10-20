import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{height: '100vh'}}>
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There! <br/> My name is Forbes Miyasato.</h1>
          {/* <h1>My name is Forbes Miyasato.</h1> */}
          <h4>I’m an aspiring software engineer.</h4>
          <Button as={AnchorLink} href="#projects">
            Learn more
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I'm Forbes and this is my portfolio website" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
    </div>
  );
};
