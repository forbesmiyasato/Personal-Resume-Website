import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        {/* <h2>Forbes Miyasato</h2> */}
        <span>
          Copyright © {(new Date().getFullYear())}, Forbes Miyasato. All rights are reserved.
        </span>
      </Details>
    </Flex>
  </Wrapper>
);
