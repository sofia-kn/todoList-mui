import React from "react";
import { Link, Box, Typography } from "@mui/material";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import ButtomNavigation from "./components/ButtomNavigation";
import Container from "@mui/material/Container";
function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundImage: "url('/assets/images/bg-mobile-light.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" , padding:'4rem 0 3rem' }}>
            <Typography
              variant="h1"
              textTransform="uppercase"
              letterSpacing={10}
              color="white"
            >
              todo
            </Typography>
            <NightlightRoundSharpIcon
              sx={{
                right: "2rem",
                fontSize: "3.5rem",
                color: "white",
              }}
            ></NightlightRoundSharpIcon>
          </div>
          <InputAddItem />
          <Box
            width="100%"
            height={100}
            bgcolor="white"
            
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="dark"
            fontSize={20}
            sx={{ boxShadow: "inset 0 0 5px px lightGray", borderTopLeftRadius:'4px', borderTopRightRadius:'4px' }}
            
          >
            No todo items left!
          </Box>
          <Box
          
            bgcolor="white"
            width="100%"
            borderTop="2px solid lightgray"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={1.5}
            marginBottom={2}
          >
            <Typography variant="subtitle1" color="gray.main" fontSize={13}>
              0 items left
            </Typography>
            <Typography variant="subtitle1">
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                color="gray.main"
                fontSize={13}
              >
                Clear Completed
              </Link>
            </Typography>
          </Box>
          <ButtomNavigation />
        </Container>
      </div>
    </>
  );
}

export default App;
