import styled from 'styled-components';
import headerIllustration from 'assets/illustrations/header.svg';

export const NavWrapper = styled.div`
  ${({ theme }) => (theme !== 'light' ? `
  `
  : null )};
`;

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;