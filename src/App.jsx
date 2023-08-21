import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
function App() {
  return (
    <>
       <Box
        component="img"
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: "url('/assets/images/bg-mobile-light.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        position="absolute"
      ></Box>
      <Container>
        <Typography
          variant="h1"
          position="absolute"
          top={40}
          textTransform="uppercase"
          letterSpacing={10}
          color="white"
        >
          todo
        </Typography>
        <NightlightRoundSharpIcon
          sx={{
            position: "absolute",
            top: "4rem",
            right: "2rem",
            fontSize: "3.5rem",
            color: "white",
          }}
        ></NightlightRoundSharpIcon>
        <InputAddItem/>
      </Container>
      
       
     
    </>
  );
}

export default App;
