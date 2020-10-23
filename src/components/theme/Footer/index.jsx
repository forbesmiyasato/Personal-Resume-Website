import React, { useState } from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Details } from "./styles";
import Snackbar from "@material-ui/core/Snackbar";
import VizSensor from "react-visibility-sensor";
import SnackbarContent from '@material-ui/core/SnackbarContent';

export const Footer = () => {
    const [open, setOpen] = useState(false);
    const [shown, setShown] = useState(false);

    return (
        <VizSensor
        minTopValue={200}
        partialVisibility={true}
            onChange={(isVisible) => {
                if (isVisible & !shown) {
                    setOpen(true);
                    setShown(true);
                }
            }}
        >
            <Wrapper>
                <Flex as={Container}>
                    <Details>
                        <span>
                            Copyright © {new Date().getFullYear()}, Forbes
                            Miyasato. All rights are reserved.
                        </span>
                    </Details>
                </Flex>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => {
                        setOpen(false);
                    }}
                    color="primary"
                >
                    <SnackbarContent
                        style={{
                            backgroundColor: "#30c9e8",
                        }}
                        message={<span id="client-snackbar">Thank you for visiting! Have a good day! 😄</span>}
                    />
                </Snackbar>
            </Wrapper>
        </VizSensor>
    );
};
