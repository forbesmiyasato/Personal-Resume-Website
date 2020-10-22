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

    const transitions = useTransition(
        open ? data.allMarkdownRemark.edges : [],
        (item, i) => i,
        {
            trail: 400 / data.allMarkdownRemark.edges.length,
            from: { opacity: 0, transform: "scale(0)" },
            enter: { opacity: 1, transform: "scale(1)" },
            leave: { opacity: 0, transform: "scale(0)" },
        }
    );

    return (
        <VizSensor
            partialVisibility={true}
            onChange={(isVisible) => {
                if (isVisible) {
                    set(true);
                }
            }}
        >
            <Wrapper as={Container} id="projects">
                <h1>Projects</h1>
                <Grid className="project-grid">
                    {transitions.length > 0 &&
                        transitions.map(({ item, key, props }) => (
                            <Item key={key} theme={theme} style={{ ...props }}>
                                <Card theme={theme}>
                                    <Content>
                                        <h4>{item.node.frontmatter.title}</h4>
                                        <div
                                            className="project-content"
                                            dangerouslySetInnerHTML={{
                                                __html: item.node.html,
                                            }}
                                        ></div>
                                    </Content>
                                    <div className="project-footer">
                                        <a
                                            href={item.node.frontmatter.href}
                                            target="_blank"
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                            >
                                                {item.node.frontmatter.button}
                                            </Button>
                                        </a>
                                        <TitleWrap>
                                            <Stats theme={theme}>
                                                <Languages>
                                                    <span>
                                                        {
                                                            item.node
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
