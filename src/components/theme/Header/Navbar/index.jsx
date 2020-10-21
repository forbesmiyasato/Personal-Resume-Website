import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { NavWrapper, Wrapper, Links} from './styles';
import social from '../../../social.json';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
        <Links>
        {social.map(({ id, name, link, icon, iconDark }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            {theme === 'light' 
            ? <img width="24" src={icon} alt={name} />
            : <img width="24" src={iconDark} alt={name} />
            }
          </a>
        ))}
      </Links>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
