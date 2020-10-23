import React, { useState, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import VizSensor from "react-visibility-sensor";

const TechTooltip = (props) => {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (visible && props.parentVisible) {
            setTimeout(() => {
                setShow(true);
            }, 1000);
        }
    }, [visible, props.parentVisible]);

    return (
        <VizSensor
            onChange={(isVisible) => {
                if (isVisible) {
                    setVisible(true);
                }
            }}
        >
            <Tooltip
                title="You can click me!"
                placement="top"
                arrow
                open={props.show && show && visible && props.parentVisible}
            >
                <Link
                    style={{ cursor: "pointer" }}
                    color="inherit"
                    onClick={props.topSkillsClicked}
                >
                    Tech
                </Link>
            </Tooltip>
        </VizSensor>
    );
};

export default TechTooltip;
