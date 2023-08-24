import React, { useState } from "react";
import { Link, Box, Typography } from "@mui/material";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import ButtomNavigation from "./components/ButtomNavigation";
import Container from "@mui/material/Container";
import AddItemList from "./components/AddItemList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [addItemList, setAddItemList] = useState(true);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('/assets/images/bg-mobile-light.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4rem 0 3rem",
            }}
          >
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
          <InputAddItem
            inputValue={inputValue}
            setInputValue={setInputValue}
            data={data}
            setData={setData}
          />
          {addItemList ? (
            <Box
              width="100%"
              height={100}
              bgcolor="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="dark"
              fontSize={20}
              sx={{
                boxShadow: "inset 0 0 5px px lightGray",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
              border="1px solid lightGray"
            >
              No todo items left!
            </Box>
           
              ) 
          
          : (
            data.map((dataItem) => <AddItemList data={dataItem} />)
          )}

          <Box
            bgcolor="white"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={1.5}
            marginBottom={2}
            sx={{
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
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
