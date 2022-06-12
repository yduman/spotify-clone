import { ChakraProvider } from "@chakra-ui/react";
import "reset-css";
import Layout from "../components/Layout";

import { colorTheme } from "../utils/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={colorTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
