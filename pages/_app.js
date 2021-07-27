import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/ui/theme";
import Header from "../src/ui/Header";
import Fonts from "../src/ui/Fonts";
import Footer from "../src/ui/Footer";

export default function MyApp(props) {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [lifeIndex, setLifeIndex] = useState(0);
  const [value, setValue] = useState(0);
  const { Component, pageProps } = props;

  React.useEffect(() => {
    Fonts();
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Chris Diorio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header
          value={value}
          setValue={setValue}
          lifeIndex={lifeIndex}
          setLifeIndex={setLifeIndex}
          experienceIndex={experienceIndex}
          setExperienceIndex={setExperienceIndex}
        />
        <Component
          {...pageProps}
          value={value}
          setValue={setValue}
          lifeIndex={lifeIndex}
          setLifeIndex={setLifeIndex}
          experienceIndex={experienceIndex}
          setExperienceIndex={setExperienceIndex}
        />
        {/* <Footer
          value={value}
          setValue={setValue}
          lifeIndex={lifeIndex}
          setLifeIndex={setLifeIndex}
          experienceIndex={experienceIndex}
          setExperienceIndex={setExperienceIndex}
        /> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
