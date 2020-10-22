import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";

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
                                <p>{edge.node.excerpt}</p>
                            </Content>
                            <TitleWrap>
                                <Stats theme={theme}>
                                    <Languages>
                                        <span>
                                            {edge.node.frontmatter.languages}
                                        </span>
                                    </Languages>
                                </Stats>
                            </TitleWrap>
                        </Card>
                    </Item>
                ))}
            </Grid>
        </Wrapper>
    );
};
