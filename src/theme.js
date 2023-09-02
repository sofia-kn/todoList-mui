import { createTheme } from "@mui/material/styles";
import font from "../public/assets/fonts/Roboto-Regular.woff";
// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", isDisabled: true },
          style: { color: "green" },
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
        body: {
         color:'#000'
          
        },
        "@font-face": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 500,
          src: `url(${font}) format('woff')`,
          fontDisplay: "swap",
        },
      },
    },
  },
  palette: {
    mode:'light',
    primary: {
      main: "#3a7bfd",
    },
    secondary: {
      main: "#c058f3",
    },
    success: {
      main: "#57ddff",
    },
    gray: {
      main: "#777a92",
    },
    black: {
      main: "#161722",
      inputColor: "#25273c",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "3rem",
      fontWeight: "700",
    },
    body1: {
      fontSize: "12.6px",
    },
    body2: {
      fontSize: "16.2px",
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: "12.6px",
      fontWeight: "400",
    },
    button: {
      fontSize: "12.6px",
      fontWeight: "400",
    },
  },
});



export default theme;
