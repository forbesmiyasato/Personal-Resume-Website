import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";
import Button from "@material-ui/core/Button";
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

    console.log(data);
    return (
        <Wrapper as={Container} id="projects">
            <h1>Projects</h1>
            <Grid>
                {data.allMarkdownRemark.edges.map((edge, i) => (
                    <Item key={i} theme={theme}>
                        <Card theme={theme}>
                            <Content>
                                <h4>{edge.node.frontmatter.title}</h4>
                                <div
                                    className="project-content"
                                    dangerouslySetInnerHTML={{
                                        __html: edge.node.html,
                                    }}
                                ></div>
                            </Content>
                            <div className="project-footer">
                                <a
                                    href={edge.node.frontmatter.href}
                                    target="_blank"
                                >
                                    <Button variant="contained" color="primary">
                                        {edge.node.frontmatter.button}
                                    </Button>
                                </a>
                                <TitleWrap>
                                    <Stats theme={theme}>
                                        <Languages>
                                            <span>
                                                {
                                                    edge.node.frontmatter
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
    );
};
