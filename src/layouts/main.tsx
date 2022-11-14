import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderMenus from "../components/headerMenus/headerMenus";
import Footer from "../components/home/Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },

    typography: {
      fontFamily: ["Montserrat"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <HeaderMenus /> */}
        <div>{children}</div>
        <Footer />
      </ThemeProvider>

    </>
  );
};

export default MainLayout;
