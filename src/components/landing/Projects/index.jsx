import React, { useContext, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";
import Button from "@material-ui/core/Button";
import { useTransition, useSpring, useChain, config } from "react-spring";
import VizSensor from "react-visibility-sensor";
import "./project.scss";

export const Projects = () => {
    const { theme } = useContext(ThemeContext);
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { order: ASC, fields: [frontmatter___order] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            languages
                            button
                            href
                        }
                        excerpt
                        html
                    }
                }
            }
        }
    `);

    const [open, set] = useState(false);

    const springRef = useRef();
    const { size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: "20%", background: "hotpink" },
        to: {
            size: open ? "100%" : "20%",
            background: open ? "white" : "hotpink",
        },
    });

    console.log(open);

    const transRef = useRef();
    const transitions = useTransition(
        open ? data.allMarkdownRemark.edges : [],
        (item) => item.name,
        {
            ref: transRef,
            unique: true,
            trail: 400 / data.length,
            from: { opacity: 0, transform: "scale(0)" },
            enter: { opacity: 1, transform: "scale(1)" },
            leave: { opacity: 0, transform: "scale(0)" },
        }
    );

    useChain(open ? [springRef, transRef] : [transRef, springRef], [
        0,
        open ? 0.1 : 0.6,
    ]);

    return (
        <VizSensor
            onChange={(isVisible) => {
                if (isVisible) {
                    set(true);
                }
            }}
        >
            <Wrapper as={Container} id="projects">
                <h1>Projects</h1>
                <Grid>
                    {transitions.length > 0 &&
                        transitions.map((edge, i) => (
                            <Item key={i} theme={theme}>
                                <Card theme={theme}>
                                    <Content>
                                        <h4>
                                            {edge.item.node.frontmatter.title}
                                        </h4>
                                        <div
                                            className="project-content"
                                            dangerouslySetInnerHTML={{
                                                __html: edge.item.node.html,
                                            }}
                                        ></div>
                                    </Content>
                                    <div className="project-footer">
                                        <a
                                            href={
                                                edge.item.node.frontmatter.href
                                            }
                                            target="_blank"
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                            >
                                                {
                                                    edge.item.node.frontmatter
                                                        .button
                                                }
                                            </Button>
                                        </a>
                                        <TitleWrap>
                                            <Stats theme={theme}>
                                                <Languages>
                                                    <span>
                                                        {
                                                            edge.item.node
                                                                .frontmatter
                                                                .languages
                                                        }
                                                    </span>
                                                </Languages>
                                            </Stats>
                                        </TitleWrap>
                                    </div>
                                </Card>
                            </Item>
                        ))}
                </Grid>
            </Wrapper>
        </VizSensor>
    );
};
