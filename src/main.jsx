import { ChakraProvider, extendTheme, theme as base } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = extendTheme({
  colors: {
    blu: {
      98: "hsl(225, 100%, 98%)",
      94: "hsl(225, 100%, 94%)",
      55: "hsl(224, 23%, 55%)",
      52: "hsl(245, 75%, 52%)",
      active: "hsl(245, 75%, 62%)",
      23: "hsl(223, 147%, 23%)",
    },
  },
  fonts: {
    heading: `"Red Hat Display", sans-serif, ${base.fonts?.heading}`,
    body: `"Red Hat Display", sans-serif, ${base.fonts?.body}`,
  },
});

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
