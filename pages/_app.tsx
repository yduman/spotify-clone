import { ChakraProvider } from "@chakra-ui/react";
import "reset-css";
import Layout from "../components/Layout";

import { colorTheme } from "../utils/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={colorTheme}>
      {Component.isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
