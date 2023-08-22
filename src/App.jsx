import React from "react";
import { Link, Box, Typography } from "@mui/material";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import Container from "@mui/material/Container";

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
      <Container maxWidth="md">
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
        <InputAddItem />
        <Box
          width="90%"
          height={100}
          bgcolor="white"
          position="absolute"
          top={175}
          borderRadius="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="dark"
          fontSize={20}
          sx={{ boxShadow: "inset 0 0 5px 2px lightGray" }}
        >
          No todo items left!
        </Box>
        <Box
          position="absolute"
          top={270}
          bgcolor="white"
          width="90%"
          borderTop="1px solid lightgray"
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          padding={1.5}
          
        >
          <Typography variant="subtitle1" color='gray.main' fontSize={13}>0 items left</Typography>
          <Typography variant="subtitle1">
            <Link sx={{textDecoration:'none' , cursor:'pointer'}} color='gray.main' fontSize={13} >Clear Completed</Link>
          </Typography>
        </Box>
    
      </Container>
    </>
  );
}

export default App;
