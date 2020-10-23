import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import VizSensor from "react-visibility-sensor";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const CopyrightText = () => {
    const [open, setOpen] = useState(false);
    const [shown, setShown] = useState(false);

    return (
        <VizSensor
            partialVisibility={true}
            onChange={(isVisible) => {
                if (isVisible & !shown) {
                    setOpen(true);
                    setShown(true);
                }
            }}
        >
            <div>
                <span className="copyright-text">
                    Copyright © {new Date().getFullYear()}, Forbes Miyasato. All
                    rights are reserved.
                </span>

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
                            color: "#ffffff"
                        }}
                        message={
                            <span id="client-snackbar">
                                Thank you for visiting! Have a good day! 😄
                            </span>
                        }
                    />
                </Snackbar>
            </div>
        </VizSensor>
    );
};

export default CopyrightText;
