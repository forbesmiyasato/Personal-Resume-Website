import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Details } from "./styles";
import CopyrightText from "./copyrightText";
export const Footer = () => {

    return (
        <Wrapper>
            <Flex as={Container}>
                <Details>
                    <CopyrightText />
                </Details>
            </Flex>
        </Wrapper>
    );
};
