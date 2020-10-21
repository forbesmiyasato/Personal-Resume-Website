import React, { useContext } from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import image from 'assets/images/me.jpeg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img className={'profile-pic'} src={image} alt="About Forbes" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About me</h1>
          <p>
            I am a 2020 graduate of Pacific University with a degree in Computer Science and currently pursuing a Masters
            of Computer Science at Portland State University. I'm passionate about software engineering and full-stack development.
          </p>
          <a href="/files/Forbes_Miyasato_Resume.pdf" target="_blank">
          <Button>
            View Resume
          </Button>
          </a>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
