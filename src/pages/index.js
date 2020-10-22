import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.scss";


const customTheme = createMuiTheme({
  palette: {
      primary: {
          main: "#2196f3",
      },
  },
});

export default () => (
    <MuiThemeProvider theme={customTheme}>
        <Layout>
            <SEO />
            <Intro />
            <Projects />
            <Skills />
            <Contact />
        </Layout>
    </MuiThemeProvider>
);
