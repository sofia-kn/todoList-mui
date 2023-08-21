import { createTheme } from "@mui/material/styles";


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
          backgroundColor:'#e4e5f1',
        },
      },
    },
  },
  palette: {
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
    dark: {
      main: "#161722",
      inputColor: "#25273c",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "700",
    },
    body1: {
      fontSize: "12.6px",
    },
    body2: {
      fontSize: "16.2px",
    },
    subtitle1: {
      fontSize: "16.2px",
      fontWeight: "700",
    },

    font: {
      family: "[Josefin Sans]",
    },
  },
});

export default theme;
